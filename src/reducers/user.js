
let getInitialState = {
	users: 'num1',
}

export default function User(state = getInitialState, action){
	switch(action.type){
		case 'GET_USER':
			return {
				...state,
				users: action.payload 
			};
		default:
			return state;
	}
}