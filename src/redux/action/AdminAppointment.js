import axios from 'axios'

const getAdminAppointment = (page) => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/appointment?page=${page}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_ADMIN_APPOINTMENT',
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getAdminAppointmentDetail = (id) => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/appointment/${id}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_ADMIN_APPOINTMENT_DETAIL',
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getAdminAppointmentCalender = () => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/appointment/calendar`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				dispatch({
					type: 'GET_ADMIN_APPOINTMENT_CALENDER',
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const putStatusAppointment = (id, body) => () => {
	axios
		.put(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/appointment/${id}/status`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data.data)
			}
		})
		.catch((err) => console.log(err))
}

export { getAdminAppointment, getAdminAppointmentDetail, getAdminAppointmentCalender, putStatusAppointment }
