
export default function UserAction(user){
	return {
		type: 'GET_USER',
		payload: user
	}
}