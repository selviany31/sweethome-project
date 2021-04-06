import axios from 'axios'

const showcaseAdminUrl = `https://sweethome-api-v1.herokuapp.com/api/v1/admin/showcase/`
const showcaseUrl = `https://sweethome-api-v1.herokuapp.com/api/v1/showcase`
const showcaseCategory = `https://sweethome-api-v1.herokuapp.com/api/v1`

const getShowcaseList = (page) => (dispatch) => {
	axios
		.get(`${showcaseUrl}/project?limit=8&page=${page}`)
		.then((response) => {
			if (response.status === 200) {
				console.log(response.data)
				dispatch({
					type: `GET_SHOWCASE`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseAdminList = () => (dispatch) => {
	axios
		.get(`${showcaseAdminUrl}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_ADMIN`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseLocationList = () => async (dispatch) => {
	axios
		.get(`${showcaseCategory}/location`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_LOCATION`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseStyleList = () => async (dispatch) => {
	axios
		.get(`${showcaseCategory}/style`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_STYLE`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseSearchList = (value) => (dispatch) => {
	axios
		.get(`${showcaseUrl}/search?query=${value}`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_SEARCH`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseByLocation = (id) => (dispatch) => {
	axios
		.get(`${showcaseUrl}/project/location?query=${id}`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_BY_LOCATION`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseByStyle = (id) => (dispatch) => {
	axios
		.get(`${showcaseUrl}/project/style?query=${id}`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_BY_STYLE`,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

const getShowcaseDetail = (id) => (dispatch) => {
	axios
		.get(`${showcaseUrl}/${id}`)
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: `GET_SHOWCASE_DETAIL`,
					payload: response.data.data,
				})
			}
		})
		.catch((err) => console.log(err))
}
const uploadImage = (data) => async (dispatch) => {
	axios
		.post(`${showcaseAdminUrl}upload`, data, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response)
				dispatch({ type: `POST_UPLOAD_IMAGE`, payload: response.data.data })
			}
		})
		.catch((err) => console.log(err))
}

const createShowcase = (data) => async (dispatch) => {
	axios
		.post(`${showcaseAdminUrl}`, data, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response)
				dispatch({ type: `POST_SHOWCASE_IMAGE`, payload: response })
			}
		})
		.catch((err) => console.log(err))
}

const postFavorite = (id) => () => {
	// return new Promise((resolve) => {
	console.log(localStorage.getItem('tokenUser'))
	axios
		.post(`https://sweethome-api-v1.herokuapp.com/api/v1/showcase/${id}/favorite`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
				'Content-Type': 'application/json',
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// resolve(response.data.data)
				console.log(response.data.data)
			}
		})
		.catch((err) => console.log(err))
	// })
}
const deleteFavorite = (id) => () => {
	return new Promise((resolve) => {
		axios
			.delete(`https://sweethome-api-v1.herokuapp.com/api/v1/showcase/${id}/favorite`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
					console.log(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

export {
	getShowcaseList,
	getShowcaseAdminList,
	getShowcaseSearchList,
	getShowcaseLocationList,
	getShowcaseStyleList,
	getShowcaseByLocation,
	getShowcaseByStyle,
	getShowcaseDetail,
	postFavorite,
	deleteFavorite,
	uploadImage,
	createShowcase,
}
