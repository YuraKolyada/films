import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';


let Input = ({onChangeAdd, value, type, label}) => (
  <label className={s.label}> 
    { label }
    <input 
      className={s.input}
      type={type} 
      value={value}
      required
      onChange={(e) => onChangeAdd(e)} />
  </label>
);

export default withStyles(s)(Input);


