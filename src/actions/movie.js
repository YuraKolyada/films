import fetch from 'isomorphic-fetch';
import * as c from '../constants';
import GetDataFile from '../data';
import movies from '../data/sample_movies.txt';

let getDataMovies = new GetDataFile(movies);

export function getMovie(){
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
				payload: getDataMovies.parseData(),
			})
		}
	}
}

export let deleteMovie = (id) => ({
	type: c.DELETE_MOVIE,
	payload: id,
})

export let addMovie = (payload) => ({
	type: c.ADD_MOVIE ,
	payload,
})