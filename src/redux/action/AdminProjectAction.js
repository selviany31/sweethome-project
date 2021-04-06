import axios from 'axios'
import {
	GET_PROJECT_DATA_ALL,
	GET_PROJECT_LOCATION_ALL,
	GET_PROJECT_TYPE_ALL,
	POST_ORDER_PROJECT,
	GET_PROJECT_DETAIL,
	PUT_PROJECT_STATUS,
	POST_RECEIPT,
} from '../actionTypes/AdminProjectTypes'

// const token = localStorage.getItem('tokenUser')

const getAllProjectData = (id) => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/project?page=${id}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: GET_PROJECT_DATA_ALL,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getProjectType = () => (dispatch) => {
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/admin/projectType', {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: GET_PROJECT_TYPE_ALL,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getLocation = () => (dispatch) => {
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/admin/location', {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: GET_PROJECT_LOCATION_ALL,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const postOrderProject = (body) => (dispatch) => {
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/project`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: POST_ORDER_PROJECT,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getProjectDetail = (id) => (dispatch) => {
	axios
		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/project/${id}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data.data)
				dispatch({
					type: GET_PROJECT_DETAIL,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const putProjectStatus = (id, body) => (dispatch) => {
	axios
		.put(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/project/${id}/status`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data.data)
				dispatch({
					type: PUT_PROJECT_STATUS,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const postReceiptUpload = (id, body) => async (dispatch) => {
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/project/${id}/upload`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data.data)
				dispatch({
					type: POST_RECEIPT,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export { getAllProjectData, getLocation, getProjectType, postOrderProject, getProjectDetail, putProjectStatus, postReceiptUpload }
