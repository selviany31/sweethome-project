import { SIGN_UP } from '../actionTypes/SignupType'
import axios from 'axios'

export const signUp = (payload) => {
	return {
		type: SIGN_UP,
		payload,
	}
}

export const postSignUp = (body) => (dispatch) => {
	axios
		.post('https://sweethome-api-v1.herokuapp.com/api/v1/register', body)
		.then((response) => {
			console.log(response)
			dispatch({ type: SIGN_UP, payload: response })
		})
		.catch((error) => {
			console.log(error)
		})
}
