import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { connect } from 'react-redux';
import Link from '../Link';


const Header = ({ link, title }) => (
  <Link to={link} className={s.link}>
    <div className={s.back}></div>
    <h3 className={s.title}>{title}</h3>
  </Link>
);



export default withStyles(s)(Header);
