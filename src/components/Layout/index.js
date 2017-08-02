import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
