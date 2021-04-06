import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import EnquiryDetails from './appointmentTab/EnquiryDetails'
import AppointmentDate from './appointmentTab/AppointmentDate'
import Review from './appointmentTab/Review'
import './Appointment.css'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import { useSelector } from 'react-redux'

const AppointmentPage = () => {
	const appointmentData = useSelector((state) => state.appointmentReducer.appointmentData)

	const pathname = window.location.pathname.split('/')[2]

	const renderClassNameTab = (params) => {
		if (pathname === undefined) {
			if (params === 1) return 'appointment-btn'
			if (params === 2) return 'appointment-btn2'
			if (params === 3) return 'appointment-btn3'
		}
		if (pathname === 'appointment-date') {
			if (params === 1) return 'appointment-btn2'
			if (params === 2) return 'appointment-btn'
			if (params === 3) return 'appointment-btn3'
		}
		if (pathname === 'review') {
			if (params === 1) return 'appointment-btn2'
			if (params === 2) return 'appointment-btn3'
			if (params === 3) return 'appointment-btn'
		}
	}

	return (
		<div>
			<NavBar />
			<div className='appointment'>
				<div className='appointment-title'>
					<h3>New Appointment</h3>
					<p>Get free professional consultation, Rhoncus sed at nulla odio.</p>
				</div>
			</div>
			<div className='appointment-link'>
				<NavLink className={renderClassNameTab(1)} exact to='/appointment'>
					<span className={window.location.pathname === '/appointment' ? 'appointment-btn-list' : 'appointment-btn-list1'}>1</span>
					Enquiry Details
				</NavLink>
				<NavLink
					className={renderClassNameTab(2)}
					exact
					to={`/appointment/appointment-date/${appointmentData.serviceType._id}`}
					style={!appointmentData.serviceType ? { pointerEvents: 'none' } : { pointerEvents: 'visible' }}>
					<span className={window.location.pathname === `/appointment/appointment-date/${appointmentData.serviceType._id}` ? 'appointment-btn-list' : 'appointment-btn-list1'}>
						2
					</span>
					Appointment Date
				</NavLink>
				<NavLink
					className={renderClassNameTab(3)}
					exact
					to='/appointment/review'
					style={!appointmentData.date || !appointmentData.timeslot ? { pointerEvents: 'none' } : { pointerEvents: 'visible' }}>
					<span className={window.location.pathname === '/appointment/review' ? 'appointment-btn-list' : 'appointment-btn-list1'}>3</span>
					Review
				</NavLink>
			</div>

			<Switch>
				<Route exact path='/appointment/appointment-date/:id' component={AppointmentDate} />
				<Route exact path='/appointment/review' component={Review} />
				<Route exact path='/appointment' component={EnquiryDetails} />
			</Switch>
			<Footer />
		</div>
	)
}

export default AppointmentPage
