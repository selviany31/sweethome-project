import axios from 'axios'
import { GET_APPOINTMENT_DATA, GET_PROJECT_DATA, GET_FAVOURITE_DATA, POST_REQCANCEL_DATA, POST_RECEIPT_DATA, POST_PAYMENT_PROJECT } from '../actionTypes/DashboardType'

// const token = localStorage.getItem('tokenUser')

export const getAppointmentData = () => async (dispatch) => {
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/appointment', {
			headers: { Authorization: localStorage.getItem('tokenUser') },
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: GET_APPOINTMENT_DATA,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export const getProjectData = () => async (dispatch) => {
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/project', {
			headers: { Authorization: localStorage.getItem('tokenUser') },
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: GET_PROJECT_DATA,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export const getFavouriteData = () => async (dispatch) => {
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/favorite', {
			headers: { Authorization: localStorage.getItem('tokenUser') },
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: GET_FAVOURITE_DATA,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export const postReqCancelData = (id, body) => async (dispatch) => {
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/project/${id}/cancel`, body, {
			headers: { Authorization: localStorage.getItem('tokenUser') },
		})
		.then((response) => {
			console.log(response.data, 'cancelreq')
			if (response.status === 200) {
				dispatch({
					type: POST_REQCANCEL_DATA,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export const postReceiptData = (id, body) => async (dispatch) => {
	axios
		.post(
			`https://sweethome-api-v1.herokuapp.com/api/v1/project/${id}/payment/uploadreceipt
		`,
			body,
			{
				headers: { Authorization: localStorage.getItem('tokenUser') },
			}
		)
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data)
				dispatch({
					type: POST_RECEIPT_DATA,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export const paymentProject = (id, body) => async (dispatch) => {
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/project/${id}/payment`, body, { headers: { Authorization: localStorage.getItem('tokenUser') } })
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data, 'payment')
				dispatch({
					type: POST_PAYMENT_PROJECT,
					payload: response.data.message,
				})
			}
		})
		.catch((err) => console.log(err))
}
