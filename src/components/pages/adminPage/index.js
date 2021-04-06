import React from 'react'
import { Route, Switch } from 'react-router-dom'
import adminAppointment from './adminAppointment'
import adminCustomer from './adminCustomer'
import adminOverview from './adminOverview'
import adminProject from './adminProject'
import adminSetting from './adminSetting'
import adminShowcase from './adminShowcase'
import AdminListDetail from './adminAppointment/adminAppointmentTab/AppointmentListDetail'
import AdminCreateShowcase from './adminShowcase/AdminCreateShowcase'
import SideBar from './layout/SideBar'
import adminNewProject from './adminProject/adminNewProject.js/newProject'
import adminProjectDetail from './adminProject/projectDetail/projectDetail'

export default function adminPage() {
	return (
		<div style={{ backgroundColor: '#f8f8f8', width: '100%', minHeight: '100vh' }}>
			<SideBar />

			<Switch>
				<Route path='/admin/appointment/list-detail/:id' component={AdminListDetail} />
				<Route path='/admin/appointment' component={adminAppointment} />
				<Route path='/admin/customer' component={adminCustomer} />
				<Route exact path='/admin/project' component={adminProject} />
				<Route path='/admin/setting' component={adminSetting} />
				<Route exact path='/admin/showcase' component={adminShowcase} />
				<Route path='/admin/showcase/create-showcase' component={AdminCreateShowcase} />
				<Route path='/admin/overview' component={adminOverview} />
				<Route path='/admin/project/new' component={adminNewProject} />
				<Route path='/admin/project/:id' component={adminProjectDetail} />
			</Switch>
		</div>
	)
}
