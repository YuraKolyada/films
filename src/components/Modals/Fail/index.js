import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Error.scss';



class Fail extends React.Component {
  render() {
    let { hideModal, title } = this.props;

    return (
      <div className={s.container}>
        <p className={s.title}>{title}</p>
        <div className={s.btn} onClick={hideModal}>OK</div>
      </div>
    );
  }
}


export default withStyles(s)(Fail);
