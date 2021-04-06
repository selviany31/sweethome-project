import { GET_OVERVIEW_DATA } from '../actionTypes/OverviewType'

const initialState = {
	overviewData: '',
}

const getOverviewDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_OVERVIEW_DATA:
			return {
				...state,
				overviewData: action.payload,
			}
		default:
			return state
	}
}

export default getOverviewDataReducer
