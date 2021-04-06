const initialState = {
	showcases: [],
	showcasesAdmin: [],
	locations: [],
	styles: [],
	showcaseDetail: [],
	galery: null
}

const showcaseReducer = (state = initialState, action) => {
	switch (action.type) {
		case `GET_SHOWCASE`:
			return {
				...state,
				showcases: action.payload,
			}
		case `GET_SHOWCASE_ADMIN`:
			return {
				...state,
				showcasesAdmin: action.payload,
			}
		case `GET_SHOWCASE_SEARCH`:
			return {
				...state,
				showcases: action.payload,
			}
		case `GET_SHOWCASE_LOCATION`:
			return {
				...state,
				locations: action.payload,
			}
		case `GET_SHOWCASE_STYLE`:
			return {
				...state,
				styles: action.payload,
			}
		case `GET_SHOWCASE_BY_LOCATION`:
			return {
				...state,
				showcases: action.payload,
			}
		case `GET_SHOWCASE_BY_STYLE`:
			return {
				...state,
				showcases: action.payload,
			}
		case `GET_SHOWCASE_DETAIL`:
			return {
				...state,
				showcaseDetail: action.payload,
			}
		case `POST_UPLOAD_IMAGE`:
			return {
				...state,
				galery: action.payload,
			}
		default:
			return state
	}
}

export default showcaseReducer
