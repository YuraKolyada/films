import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Search.scss';
import cx from 'classnames';

let tabs = [
  {
    id: 'title',
    name: 'названию фильма',
  },
  {
    id: 'actors',
    name: 'актеру',
  },
]

let Search = ({activeTab, onChangeSearch, tabClick, value}) => (
  <div className={s.tabs}>
    <p className={s.title}>Поиск по: </p>
    { 
      tabs.map((tab) => 
        <span 
          key={tab.id}
          onClick={() => tabClick(tab.id)}
          className={cx(s.tab, {[s.active]: (tab.id === activeTab)})}>
          {tab.name}
        </span>)
    }
    <input 
      className={s.input}
      type='text' 
      placeholder='поиск...'
      value={value}
      onChange={(e) => onChangeSearch(e)}/>
  </div>
);

export default withStyles(s)(Search);
