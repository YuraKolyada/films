import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListMovies.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import { deleteMovie, getMovie } from '../../actions/movie';
import preloader from './preloader.gif';
import Movie from './Movie';
import Sort from './Sort';

class ListMovies extends React.Component {
  constructor(){
    super();
    this.state = {
      update: [],
      sort: false, 
    }
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
    let { loading, data, title, deleteMovie } = this.props;
    let { sort, update } = this.state;
    return (
      <div className={s.root}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.menu}>
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
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(ListMovies));
