import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Add.scss';
import cx from 'classnames';


let Input = ({onChangeInput, value, type, label, id, error}) => (
  <label className={s.label}> 
    { label }
    <input 
      className={cx(s.input, {[s.error]: (error && !value)})}
      type={type} 
      value={value}
      required
      onChange={(e) => onChangeInput(e, id)} />
  </label>
);

export default withStyles(s)(Input);


