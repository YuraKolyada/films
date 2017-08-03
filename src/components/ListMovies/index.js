import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListMovies.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import { deleteMovie, getMovie, addMovie } from '../../actions/movie';
import preloader from './preloader.gif';
import Movie from './Movie';
import Sort from './Sort';
import Search from './Search';
import Add from './Add';

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

  mapDataToSearch = (field) => (
    Array.isArray(field) ? 
      field.map((item) => item.firstName).join('').toLowerCase() : field.toLowerCase() 
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



  componentWillReceiveProps(props){
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
      update.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0) : data;
  }

  sortNameClick = (sortActive) => {
    let active = !sortActive; 
    this.setState({sort: active, update: this.sortValue(this.props.data, active) })
  }
  
  render() {
    let { loading, data, title, deleteMovie, addMovie } = this.props;
    let { sort, update, tabsSearchActive, searchValue } = this.state;
    return (
      <div className={s.root}>
        <h1 className={s.title}>{title}</h1>
        <Add addMovieFunc={addMovie} />
        <div className={s.menu}>
          <Search 
            activeTab={tabsSearchActive} 
            tabClick={(tabName) => {this.setState({tabsSearchActive: tabName})}}
            value={searchValue}
            onChangeSearch={this.onChangeSearch}
          />
          <Sort sortNameFunc={this.sortNameClick} sortActive={sort} />
        </div>
        <div className={s.container}>
        {loading ? <img src={preloader} className={s.preloader} /> 
        : update.map((movie) => 
          <Movie 
            key={movie.id} 
            id={movie.id} 
            deleteMovie={deleteMovie}
            title={movie.title} 
            year={movie.year}
            actors={movie.actors} />) }
        </div>
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
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(ListMovies));
