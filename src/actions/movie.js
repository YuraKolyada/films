import fetch from 'isomorphic-fetch';
import * as c from '../constants';
import getDataMovies from '../data';

export default function GetMovie(){
	return (dispatch) => {
		dispatch({type: c.LOADING_MOVIE});
		
		if(localStorage.getItem('movies')){
			dispatch({
				type: c.GET_MOVIE,
				payload: JSON.parse(localStorage.getItem('movies')),
			})
		} else {
			dispatch({
				type: c.GET_MOVIE,
				payload: getDataMovies(),
			})
		}
	}
}