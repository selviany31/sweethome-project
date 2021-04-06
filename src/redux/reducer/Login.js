import { LOG_IN } from '../actionTypes/LoginType'

const loginState = {
	data: '',
}

const loginReducer = (state = loginState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				data: action.payload,
			}
		default:
			return state
	}
}

export default loginReducer
