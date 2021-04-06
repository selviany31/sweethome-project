const appointmentState = {
	buildType: [],
	serviceType: [],
	inspectArea: [],
	prefStyle: [],
	appointmentTime: [],
	appointmentData: {
		duration: '',
		area: '',
		budget: '',
		address: '',
		note: '',
		buildType: '',
		serviceType: '',
		locations: [],
		styles: [],
		date: '',
		timeslot: '',
	},
}

const appointmentReducer = (state = appointmentState, action) => {
	switch (action.type) {
		case 'GET_BUILDING_TYPE':
			return {
				...state,
				buildType: action.payload,
			}
		case 'GET_SERVICE_TYPE':
			return {
				...state,
				serviceType: action.payload,
			}
		case 'GET_INSPECTION_AREA':
			return {
				...state,
				inspectArea: action.payload,
			}
		case 'GET_PREFERRED_STYLE':
			return {
				...state,
				prefStyle: action.payload,
			}
		case 'GET_APPOINTMENT_TIME':
			return {
				...state,
				appointmentTime: action.payload,
			}
		case 'POST_APPOINTMENT_ENQUIRY_DETAIL':
			return {
				...state,
				appointmentData: {
					...state.appointmentData,
					...action.payload,
				},
			}
		case 'POST_APPOINTMENT_DATE':
			return {
				...state,
				appointmentData: {
					...state.appointmentData,
					...action.payload,
				},
			}
		case 'POST_APPOINTMENT_USER':
			return {
				...state,
				appointmentData: action.payload,
			}
		default:
			return state
	}
}

export default appointmentReducer
