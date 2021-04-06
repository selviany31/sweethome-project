import React from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { FaSortAmountUp, FaFilter } from 'react-icons/fa'
import './AdminAppointment.css'
import '../adminSetting/Setting.css'
import AppointmentList from './adminAppointmentTab/AppointmentList'
import AppointmentCalender from './adminAppointmentTab/AppointmentCalender'
import Breadcrumb from '../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../layouts/BreadcrumbItem'

export default function adminAppointment() {
	return (
		<div className='setting-container'>
			<p>Appointments</p>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Appointment' to='' />
			</Breadcrumb>
			<div className='setting-wrapper'>
				<div className='setting-head'>
					<div className='adm-appointment'>
						<NavLink className='adm-appointment-link' activeClassName='adm-appointment-link-active' exact to='/admin/appointment'>
							List
						</NavLink>
						<hr />
						<NavLink className='adm-appointment-link' activeClassName='adm-appointment-link-active' exact to='/admin/appointment/calender'>
							Calender
						</NavLink>
					</div>
					<div className='setting-btn-timeslot'>
						<button className='setting-btn-icon'>
							<FaSortAmountUp className='setting-table-icon' />
							<span>Sort</span>
						</button>
						<button className='setting-btn-icon'>
							<FaFilter className='setting-table-icon' />
							<span>Filter</span>
						</button>
					</div>
				</div>
				<Switch>
					<Route exact path='/admin/appointment/calender' component={AppointmentCalender} />
					<Route exact path='/admin/appointment' component={AppointmentList} />
				</Switch>
			</div>
		</div>
	)
}
