import { GET_APPOINTMENT_DATA, GET_FAVOURITE_DATA, GET_PROJECT_DATA, POST_REQCANCEL_DATA, POST_RECEIPT_DATA, POST_PAYMENT_PROJECT } from '../actionTypes/DashboardType'

const initialState = {
	//kalau responsedata nya object kasih null, kalau bentuk array kasih array kosong
	appointmentData: null,
	projectData: null,
	favouriteData: null,
	reqCancelData: null,
	receiptData: null,
	submitPaymentData: null,
}

const dashboardReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case GET_APPOINTMENT_DATA:
			return {
				...state,
				appointmentData: payload,
			}

		case GET_PROJECT_DATA:
			return {
				...state,
				projectData: payload,
			}

		case GET_FAVOURITE_DATA:
			return {
				...state,
				favouriteData: payload,
			}

		case POST_REQCANCEL_DATA:
			return {
				...state,
				reqCancelData: payload,
			}

		case POST_RECEIPT_DATA:
			return {
				...state,
				receiptData: payload,
			}

		case POST_PAYMENT_PROJECT:
			return {
				...state,
				submitPaymentData: payload,
			}

		default:
			return state
	}
}

export default dashboardReducer
