import React from 'react';
import ListMovies from '../../components/ListMovies';
import Layout from '../../components/Layout';


const title = 'Список фильмов';

function action() {
  return {
    chunks: ['movies'],
    title,
    component: <Layout><ListMovies title={title} /></Layout>,
  };
}

export default action;
