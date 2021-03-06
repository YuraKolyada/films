import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListMovies.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import { deleteMovie, getMovie, addMovie } from '../../actions/movie';
import { showModal } from '../../actions/modal';
import * as c from '../../constants/modal';
import preloader from './preloader.gif';
import Movie from './Movie';
import Sort from './Sort';
import Search from './Search';
import Add from './Add';
import Modals from '../Modals';
import GetDataFile from '../../data';


const FAIL = c.MODAL_TYPE_FAIL;
const OK = c.MODAL_TYPE_SUCCSESS;

class ListMovies extends React.Component {
  constructor(){
    super();
    this.state = {
      update: [],
      sort: false,
      tabsSearchActive: 'title',
      searchValue: '', 
    }
  }

  componentDidMount(){
    this.setState({ update: this.props.data });
  }

  onChangeLoadFile = (e) => {
    let file = e.target.files[0],
      textType = /text.*/,
      { showModal } = this.props,
      fileName = localStorage.getItem('textName') ? JSON.parse(localStorage.getItem('textName')) : [];

    if (fileName.indexOf(file.name) !== -1){
      showModal(FAIL, {title: 'Ошыбка! Данный файл уже был загружен'});
      return;
    }

    if (file.type.match(textType)) {
      let reader = new FileReader();
      reader.onload = (event) => {
        let data = new GetDataFile(event.target.result).parseData();
        if(!data.length){
          showModal(FAIL, {title: 'Что-то пошло не так... Проверьте свой файл. В следующий раз все получиться! Удачи'});
          return;
        }
        this.props.addMovie(data);
        showModal(OK, {title: 'Фильмы добавлены'});
      }
      reader.readAsText(file); 
      localStorage.setItem('textName', JSON.stringify([...fileName, file.name]));
    } else {
      showModal(FAIL, {title: 'файл выбран не формате .txt'});
    }
  }

  mapDataToSearch = (field) => (
    Array.isArray(field) ? 
      field.map((item) => item.firstName + ' ' + item.lastName).join('').toLowerCase() : field.toLowerCase() 
  )

  onChangeSearch = (e) => {
    let { data } = this.props,
      { tabsSearchActive } = this.state,
      { value } = e.target;

    if(this.state.sort){
      data = this.sortValue(data, true)
    }

    this.setState({
      update: data.filter((movie) => 
        this.mapDataToSearch(movie[tabsSearchActive]).indexOf(value.toLowerCase()) !== -1), 
      searchValue: value,
    })
  }



  componentWillReceiveProps(props, nextState){
    if(this.props.data !== props.data){
      if(this.state.sort){
        this.setState({ update: this.sortValue(props.data, true) });
      } else {
        this.setState({ update: props.data });
      }

      localStorage.setItem('movies', JSON.stringify(props.data));
    }

  }

  sortValue = (data, active) => {
    let update = [...data];

    return active ? 
      update.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 
        : (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 0) : data;
  }

  sortNameClick = (sortActive) => {
    let active = !sortActive; 
    this.setState({sort: active, update: this.sortValue(this.props.data, active) })
  }
  
  render() {
    let { loading, data, title, deleteMovie, addMovie, showModal } = this.props;
    let { sort, update, tabsSearchActive, searchValue } = this.state;
    return (
      <div className={s.root}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.unload}>
          <span className={s.load}>Загрузить фильмы </span>
          <input type='file' accept='text/plain' onChange={this.onChangeLoadFile} /> 
          <span className={s.or}>или</span>
        </div>
        
        <Add addMovieFunc={addMovie} fail={FAIL} success={OK} showModal={showModal} />
        <div className={s.menu}>
          <div className={s.wrapper}>
            <Search 
              activeTab={tabsSearchActive} 
              tabClick={(tabName) => {this.setState({tabsSearchActive: tabName})}}
              value={searchValue}
              onChangeSearch={this.onChangeSearch}
            />
            <Sort sortNameFunc={this.sortNameClick} sortActive={sort} />
          </div>
        </div>
        <div className={s.container}>
        {!update.length && searchValue ? <span> По даному запросу нету фильмов </span> 
        : update.map((movie) => 
          <Movie 
            key={movie.id} 
            id={movie.id} 
            deleteMovie={deleteMovie}
            title={movie.title} 
            year={movie.year}
            actors={movie.actors} />) }
        </div>
        <Modals />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    loading: state.movie.loading,
    data: state.movie.data,
});

let mapDispatchToProps = dispatch => ({ 
  deleteMovie: (id) => dispatch(deleteMovie(id)),
  getMovie: () => dispatch(getMovie()),
  addMovie: (movie) => dispatch(addMovie(movie)), 
  showModal: (type, props) => dispatch(showModal(type, props)),
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(ListMovies));
