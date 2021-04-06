import React from 'react'
import { Route } from 'react-router-dom'
import AppointmentPage from './components/pages/appointment'
import DashboardPage from './components/pages/dashboardPage'
import DetailProject from './components/pages/detailProject/DetailProject'
import HomePage from './components/pages/homePage'
import ProjectPage from './components/pages/projectPage'
import adminPage from './components/pages/adminPage'

const Routes = () => {
	return (
		<div>
			<Route path='/admin/:tab' component={adminPage} />
			<Route path='/appointment' component={AppointmentPage} />
			<Route path='/dashboard' component={DashboardPage} />
			<Route path='/detail/:id' component={DetailProject} />
			<Route path='/project' component={ProjectPage} />
			<Route exact path='/' component={HomePage} />
		</div>
	)
}

export default Routes
