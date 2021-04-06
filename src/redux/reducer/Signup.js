import { SIGN_UP } from '../actionTypes/SignupType'

const signUpState = {
	data: {},
}

const signUpReducer = (state = signUpState, action) => {
	switch (action.type) {
		case SIGN_UP:
			return {
				...state,
				data: action.payload,
			}
		default:
			return state
	}
}

export default signUpReducer
