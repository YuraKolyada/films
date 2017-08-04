import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';
import cx from 'classnames';


let Select = ({value, label, onChangeInput, id}) => (
  <label className={cx(s.label, s.selectLabel)}> 
    { label }
    <select value={value} className={s.select} onChange={(e) => onChangeInput(e, id)}>
	  <option value='VHS'>VHS</option>
	  <option value='DVD'>DVD</option>
	  <option value='Blu-Ray'>Blu-Ray</option>
	</ select>
  </label>

);

export default withStyles(s)(Select);


