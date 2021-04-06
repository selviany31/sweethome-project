import React from 'react'
import '../Appointment.css'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { postAppointmentUser } from '../../../../redux/action/postAppointment'
import NumberFormat from 'react-number-format'

export default function Review() {
	const dispatch = useDispatch()
	const appointmentData = useSelector((state) => state.appointmentReducer.appointmentData)

	const handleAppointmentUser = (e) => {
		dispatch(postAppointmentUser(appointmentData))
	}

	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'AM' : 'PM'
	}

	return (
		<div className='container-wrapper'>
			<div className='review-wrapper'>
				<div className='appointment-review'>
					<p>Building Type</p>
					<p>{appointmentData.buildType.name}</p>
				</div>
				<div className='appointment-review'>
					<p>Area Size</p>
					<p>{appointmentData.area}m2</p>
				</div>
				<div className='appointment-review'>
					<p>Estimated Work Duration</p>
					<p>{appointmentData.duration} week(s)</p>
				</div>
				<div className='appointment-review'>
					<p>Budget</p>
					<p>
						<NumberFormat value={appointmentData.budget} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
					</p>
					{/* <p>Rp. {appointmentData.budget}</p> */}
				</div>
			</div>
			<div className='appointment-review'>
				<p>Address</p>
				<p>{appointmentData.address}</p>
			</div>
			<div className='appointment-review'>
				<p>Inspection Area</p>
				<p>{appointmentData.locations === 0 ? null : appointmentData.locations.map((area) => area.name)}</p>
			</div>
			<div className='appointment-review'>
				<p>Date and Time</p>
				<p>
					{moment(appointmentData.date).format('DD MMMM YYYY')} | {appointmentData.timeslot?.start} {handleFormatTime(appointmentData.timeslot?.start)} -{' '}
					{appointmentData.timeslot?.end} {handleFormatTime(appointmentData.timeslot?.end)}{' '}
				</p>
			</div>
			<div className='filter-date'>
				<div className='filter-title'>
					<span className='enquiry-label'>Note</span>
				</div>
				<p>{appointmentData.note}</p>
			</div>
			<div className='btn-wrapper'>
				<button onClick={handleAppointmentUser} className='btn-submit' style={{ padding: '15px 30px' }}>
					<i className='fas fa-check check'></i> Create Appointment
				</button>
			</div>
		</div>
	)
}
