import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './InfoMovie.scss';
import { connect } from 'react-redux';
import Header from '../Header';

class InfoMovie extends React.Component {
  
  render() {
    let { data, id, title: titleHeader } = this.props, 
      movie = [{title: '', format: '', year: '', actors: []}];
    if(data.length){
      movie = data.filter((movie) => +movie.id === +id);
    }

    let { title, format, year, actors } = movie[0];
    return (
      data.length ?
      <div className={s.root}>
        <Header link='/' title={titleHeader} />
        <div className={s.movie}>
          <h3 className={s.title}>{title}</h3>
          <div className={s.year}>
            <span className={s.name}>Год выпуска: </span>
            <span>{year}</span>
          </div>
          <div className={s.format}>
            <span className={s.name}>Формат: </span>
            <span>{format}</span>
          </div>
          <div className={s.actors}>
            <span className={s.name}>Акторы: </span>
            <span>{actors.length ? actors.map((actor) => `${actor.firstName} ${actor.lastName}, `) : 'нету...'}</span>
          </div>
        </div>
      </div>
      : null
    );
  }
}

let mapStateToProps = (state) => ({
  data: state.movie.data,
});

export default withStyles(s)(connect(mapStateToProps)(InfoMovie));
