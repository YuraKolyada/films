import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';


let Input = ({onChangeInput, value, type, label, id}) => (
  <label className={s.label}> 
    { label }
    <input 
      className={s.input}
      type={type} 
      value={value}
      required
      onChange={(e) => onChangeInput(e, id)} />
  </label>
);

export default withStyles(s)(Input);


