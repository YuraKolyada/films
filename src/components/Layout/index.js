import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import { connect } from 'react-redux';
import { getMovie } from '../../actions/movie';


class Layout extends React.Component {
  
  componentDidMount(){
  	this.props.getMovie();
  }

  render() {
    return (
      <div className={s.root}>
        { this.props.children }
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => ({ 
  getMovie: () => dispatch(getMovie()),
});

export default withStyles(s)(connect(null, mapDispatchToProps)(Layout));