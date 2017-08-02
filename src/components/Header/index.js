import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import GetMovie from '../../actions/movie';
import preloader from './preloader.gif';

class Header extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getMovie();
  }
  
  render() {
    let { loading, data } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
        {loading ? <img src={preloader} className={s.preloader} /> : null }
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    loading: state.movie.loading,
    data: state.movie.data,
});

let mapDispatchToProps = dispatch => ({ 
    getMovie: () => dispatch(GetMovie()),
});

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(Header));
