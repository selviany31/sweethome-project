const adminAppointmentState = {
	adminAppointmentData: [],
	adminAppointmentDetail: [],
	adminAppointmentCalender: [],
}

const adminAppointment = (state = adminAppointmentState, action) => {
	switch (action.type) {
		case 'GET_ADMIN_APPOINTMENT':
			return {
				...state,
				adminAppointmentData: action.payload,
			}
		case 'GET_ADMIN_APPOINTMENT_DETAIL':
			return {
				...state,
				adminAppointmentDetail: action.payload,
			}
		case 'GET_ADMIN_APPOINTMENT_CALENDER':
			return {
				...state,
				adminAppointmentCalender: action.payload,
			}
		default:
			return state
	}
}

export default adminAppointment
