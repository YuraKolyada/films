import fetch from 'isomorphic-fetch';
import * as c from '../constants';
import GetDataFile from '../data';
import movies from '../data/sample_movies.txt';

let getDataMovies = new GetDataFile(movies);

export function getMovie(){
	if(localStorage.getItem('movies')){
		return {
			type: c.GET_MOVIE,
			payload: JSON.parse(localStorage.getItem('movies')),
		};
	} else {
		return {
			type: c.GET_MOVIE,
			payload: getDataMovies.parseData(),
		};
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