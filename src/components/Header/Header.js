import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import UserAction from '../../actions/userAction';

class Header extends React.Component {
  constructor(){
    super();
    this.onGetUser = this.onGetUser.bind(this);
  }

  onGetUser(e) {
    e.preventDefault();
    this.props.getUser(e.target.innerHTML);
  }

  render() {
    let { user } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
   return {
    user: state.User.users
  }
}

let mapDispatchToProps = dispatch => { 
  return { 
    getUser: (user) => dispatch(UserAction(user)),
  }  
}

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Header));
