import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { connect } from 'react-redux';
import Link from '../Link';


class Header extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
   
  }

  render() {
    let { data } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    data: state.movie.data,
});


export default withStyles(s)(connect(mapStateToProps)(Header));
