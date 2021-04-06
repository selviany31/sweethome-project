import { LOG_IN } from '../actionTypes/LoginType'
import axios from 'axios'

const getDataUser = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/profile`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			console.log(`response auth token`, response)
			dispatch({ type: LOG_IN, payload: response.data.data })
		})
		.catch((err) => {
			console.log(err)
			if (window.confirm('Your session has expired. Please Login')) {
				localStorage.clear()
				window.location.href = '/'
			}
		})
}
const getDataAdmin = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/profileAdmin`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			console.log(`response auth token`, response)
			dispatch({ type: LOG_IN, payload: response.data.data })
		})
		.catch((err) => {
			console.log(err)
			if (window.confirm('Your session has expired. Please Login')) {
				localStorage.clear()
				window.location.href = '/'
			}
		})
}

export { getDataUser, getDataAdmin }
