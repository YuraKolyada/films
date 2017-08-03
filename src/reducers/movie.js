import * as c from '../constants';

let getInitialState = {
	loading: false,
	data: [],
}

export default function User(state = getInitialState, action){
	switch(action.type){
		case c.GET_MOVIE:
			return {
				...state,
				data: action.payload, 
				loading: false,
			};
		case c.LOADING_MOVIE: 
			return {
				...state,
				loading: true,
			};
		case c.DELETE_MOVIE: 
			return {
				...state,
				data: state.data.filter((movie) => movie.id !== action.payload),
			}
		case c.ADD_MOVIE: 
			return {
				...state,
				data: [...addMovie(state.data, action.payload)],
			}
		default:
			return state;
	}
}


let addMovie = (state, payload) => {
	let {title, year, format, actors} = payload;
	let id = Math.ceil(Math.random() * (500000 - 10000) + 10000);

	return [
		...state,
		{title, year, format, actors, id,},
	]
}