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
		default:
			return state;
	}
}