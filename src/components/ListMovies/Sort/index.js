import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sort.scss';
import cx from 'classnames';


let Sort = ({sortActive, sortNameFunc}) => (
  <div className={s.sortBar}>
    <h3 onClick={() => sortNameFunc(sortActive)} className={cx(s.sort, {[s.active]: sortActive })}>Сортировка по имени</h3>
  </div>
);

export default withStyles(s)(Sort);
