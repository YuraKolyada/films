import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.scss';
import Header from '../Header';
import Footer from '../Footer';

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
