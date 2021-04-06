import { combineReducers } from 'redux'
import appointmentReducer from './reducer/AppointmentReducer'
import loginReducer from './reducer/Login'
import customerReducer from './reducer/CustomerReducer'
import getOverviewDataReducer from './reducer/OverviewReducer'
import dashboardReducer from './reducer/DashboardReducer'
import showcaseReducer from './reducer/ShowcaseReducer'
import adminAppointment from './reducer/AdminAppointment'
import adminProject from './reducer/AdminProjectReducer'

const rootReducer = combineReducers({
	loginReducer,
	appointmentReducer,
	customerReducer,
	getOverviewDataReducer,
	dashboard: dashboardReducer,
	showcaseReducer,
	adminAppointment,
	adminProject,
})

export default rootReducer
