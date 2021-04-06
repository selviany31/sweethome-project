import {
	GET_PROJECT_DATA_ALL,
	GET_PROJECT_LOCATION_ALL,
	GET_PROJECT_TYPE_ALL,
	POST_ORDER_PROJECT,
	GET_PROJECT_DETAIL,
	PUT_PROJECT_STATUS,
	POST_RECEIPT,
} from '../actionTypes/AdminProjectTypes'

const initialState = {
	projectDataAll: [],
	location: [],
	projectType: [],
	projectData: {
		user: '',
		packages: [],
		appointment: '',
	},
	projectDetail: [],
	projectStatus: '',
	receipt: null,
}

const adminProjectReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PROJECT_DATA_ALL:
			return {
				...state,
				projectDataAll: action.payload,
			}
		case GET_PROJECT_LOCATION_ALL:
			return {
				...state,
				location: action.payload,
			}
		case GET_PROJECT_TYPE_ALL:
			return {
				...state,
				projectType: action.payload,
			}
		case POST_ORDER_PROJECT:
			return {
				...state,
				projectData: action.payload,
			}
		case GET_PROJECT_DETAIL:
			return {
				...state,
				projectDetail: action.payload,
			}
		case PUT_PROJECT_STATUS:
			return {
				...state,
				projectStatus: action.payload,
			}
		case POST_RECEIPT:
			return {
				...state,
				receipt: action.payload,
			}
		default:
			return state
	}
}

export default adminProjectReducer
