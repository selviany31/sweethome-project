import axios from 'axios'
import { GET_CUSTOMER_LIST } from '../actionTypes/CustomerType'

const customerUrl = `https://sweethome-api-v1.herokuapp.com/api/v1/admin/customer`

const getCustomerList = () => (dispatch) => {
	axios
		.get(`${customerUrl}`, {
			headers: {
				Authorization: localStorage.getItem('tokenUser'),
			},
		})
		.then((response) => {
			if (response.status === 200) {
				// console.log(response.data.data)
				dispatch({
					type: GET_CUSTOMER_LIST,
					payload: response.data,
				})
			}
		})
		.catch((err) => console.log(err))
}

export { getCustomerList }
