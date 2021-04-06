import axios from 'axios'

const getAdminContent = (type) => () => {
	return new Promise((resolve) => {
		axios
			.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${type}`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => {
				alert(err)
				const status = err.status
				if (status === 400) {
					localStorage.clear()
					window.location.href = '/'
				}
			})
	})
}

const getTimeslotDetail = (id) => () => {
	return new Promise((resolve) => {
		axios
			.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/serviceType/${id}/timeslot`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

const getAdminData = () => () => {
	return new Promise((resolve) => {
		axios
			.get(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

const postSettingContent = (type, body) => () => {
	return new Promise((resolve) => {
		axios
			.post(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${type}`, body, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}
const putSettingContent = (id, type, body) => () => {
	return new Promise((resolve) => {
		axios
			.put(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${type}/${id}`, body, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}
const deleteSettingContent = (id, type) => () => {
	return new Promise((resolve) => {
		axios
			.delete(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${type}/${id}`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

const postSettingTimeslot = (id, body) => () => {
	return new Promise((resolve) => {
		axios
			.post(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/serviceType/${id}/timeslot`, body, {
				headers: {
					// Authorization: localStorage.getItem('tokenUser'),
					'Content-Type': 'application/json',
				},
			})
			.then((response) => {
				if (response.status === 200) {
					console.log(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}
const postSettingAdmin = (body) => () => {
	return new Promise((resolve) => {
		axios
			.post(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/register`, body, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

const putSettingAdmin = (id, body) => () => {
	return new Promise((resolve) => {
		axios
			.put(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${id}`, body, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}
const deleteSettingAdmin = (id) => () => {
	return new Promise((resolve) => {
		axios
			.delete(`https://sweethome-api-v1.herokuapp.com/api/v1/admin/${id}`, {
				headers: {
					Authorization: localStorage.getItem('tokenUser'),
				},
			})
			.then((response) => {
				if (response.status === 200) {
					resolve(response.data.data)
				}
			})
			.catch((err) => console.log(err))
	})
}

export {
	getAdminContent,
	getTimeslotDetail,
	getAdminData,
	postSettingContent,
	putSettingContent,
	deleteSettingContent,
	postSettingTimeslot,
	postSettingAdmin,
	putSettingAdmin,
	deleteSettingAdmin,
}
