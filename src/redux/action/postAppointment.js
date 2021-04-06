import axios from 'axios'

const getBuildingType = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/buildType`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_BUILDING_TYPE',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getServiceType = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/serviceType`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_SERVICE_TYPE',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const getInspectionArea = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/location`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_INSPECTION_AREA',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const getPreferredStyle = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/style`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_PREFERRED_STYLE',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const getAppointmentTime = (id) => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/serviceType/${id}/timeslot`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_APPOINTMENT_TIME',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const postEnquiryDetail = (payload) => async (dispatch) => {
	dispatch({
		type: 'POST_APPOINTMENT_ENQUIRY_DETAIL',
		payload,
	})
}
const postAppointmentDate = (payload) => async (dispatch) => {
	dispatch({
		type: 'POST_APPOINTMENT_DATE',
		payload,
	})
}

const postAppointmentUser = (body) => (dispatch) => {
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/appointment`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'POST_APPOINTMENT_USER',
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export { getBuildingType, getServiceType, getInspectionArea, getPreferredStyle, getAppointmentTime, postEnquiryDetail, postAppointmentDate, postAppointmentUser }
