import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Movie.scss';
import Link from '../../Link';

const listActors = (actors) => {
  const list = actors.slice(0, 2).map((actor) => `${actor.firstName} ${actor.lastName}`);
  return `${list.join(', ')} ...`;
}

let Movie = ({id, title, actors, year, deleteMovie}) => (
  <div className={s.movie}>
      <div className={s.wrap}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.delete} onClick={() => deleteMovie(id)} />
      </div>
      <div className={s.year}>
        <span className={s.name}>Год выпуска: </span>
        <span>{year}</span>
      </div>
      <div className={s.actors}>
        <span className={s.name}>Актеры: </span>
        <span className={s.list}>{actors.length ? listActors(actors) : 'нету'}</span>
      </div>
      <Link className={s.link} to={`/movie/${id}`}>Узнать больше о фильме...</Link>
  </div>
);

export default withStyles(s)(Movie);
