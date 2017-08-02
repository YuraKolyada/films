import * as c from '../constants';

let getInitialState = {
	loading: false,
	data: [],
	searchData: [],
	sort: false,
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
		case c.SORT_MOVIE: 
			return {
				...state,
				sort: action.payload,
			}
		default:
			return state;
	}
}