import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';


let Select = ({value, label}) => (
  <label className={s.label}> 
    { label }
    <select value={value} className={s.select}>
	  <option value='VHS'>VHS</option>
	  <option value='DVD'>DVD</option>
	  <option value='Blu-Ray'>Blu-Ray</option>
	</ select>
  </label>

);

export default withStyles(s)(Select);


