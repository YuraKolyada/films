import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ListMovies.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import { getMovie, deleteMovie } from '../../actions/movie';
import preloader from './preloader.gif';
import Movie from './Movie';

class ListMovies extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getMovie();
  }

  componentWillReceiveProps(props){
    if(this.props.data !== props.data){
      localStorage.setItem('movies', JSON.stringify(props.data));
    }
  }
  
  render() {
    let { loading, data, title, deleteMovie } = this.props;
    return (
      <div className={s.root}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.container}>
        {loading ? <img src={preloader} className={s.preloader} /> 
        : data.map((movie) => 
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
    getMovie: () => dispatch(getMovie()),
    deleteMovie: (id) => dispatch(deleteMovie(id)),
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(ListMovies));
