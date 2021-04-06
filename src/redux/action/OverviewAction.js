import { GET_OVERVIEW_DATA } from '../actionTypes/OverviewType'
import axios from 'axios'

const getOverview = (dispatch) => {
	const token = localStorage.getItem('tokenUser')
	axios
		.get('https://sweethome-api-v1.herokuapp.com/api/v1/admin/dashboard', {
			headers: {
				Authorization: token,
			},
		})
		.then((response) => {
			dispatch({ type: GET_OVERVIEW_DATA, payload: response.data.data })
		})
}

export default getOverview
