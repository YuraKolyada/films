import React from 'react';
import InfoMovie from '../../components/InfoMovie';
import Layout from '../../components/Layout';


const title = 'Информация о фильме';

function action(context) {
  return {
    chunks: ['infoMovie'],
    title,
    component: <Layout><InfoMovie title={title} id={context.params.id} /></Layout>,
  };
}

export default action;
