import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAppointmentTime, postAppointmentDate } from '../../../../redux/action/postAppointment'
import '../Appointment.css'

export default function AppointmentDate({ match }) {
	const history = useHistory()
	const dispatch = useDispatch()

	const [appointmentDateData, setappointmentDateData] = useState({
		date: '',
		timeslot: '',
	})

	const appointmentTime = useSelector((state) => state.appointmentReducer.appointmentTime)

	useEffect(() => {
		dispatch(getAppointmentTime(match.params.id))
	}, [dispatch, match.params.id])

	const handleAppointmentDate = (e) => {
		e.preventDefault()
		const body = {
			date: appointmentDateData.date,
			timeslot: appointmentDateData.timeslot,
		}
		dispatch(postAppointmentDate(body)).then(() => history.push(`/appointment/review`))
	}
	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'am' : 'pm'
	}

	console.log(appointmentDateData)
	return (
		<div className='container-wrapper'>
			<form className='enquiry-wrapper'>
				<div>
					<label className='enquiry-label'>
						Date<span>*</span>
					</label>{' '}
					<br />
					<input onChange={(e) => setappointmentDateData({ ...appointmentDateData, date: e.target.value })} type='date' className='enquiry-select unstyled' />
				</div>
			</form>
			<div className='filter-date'>
				<div className='filter-title'>
					<span className='enquiry-label'>Select appointment time</span>
				</div>
				{appointmentTime.length === 0
					? null
					: appointmentTime.data.map((time, index) => {
							return (
								<div key={index}>
									<input
										id={index}
										onChange={(e) => setappointmentDateData({ ...appointmentDateData, timeslot: JSON.parse(e.target.value) })}
										className='filter-radio'
										type='radio'
										value={JSON.stringify(time)}
										checked={appointmentDateData.timeslot._id === time._id ? true : false}
									/>
									<label className='appointment-radio-label'>
										{time?.start}
										{handleFormatTime(time?.start)} - {time?.end}
										{handleFormatTime(time?.end)}
									</label>
								</div>
							)
					  })}
			</div>
			<div className='btn-wrapper'>
				<button disabled={!appointmentDateData.date || !appointmentDateData.timeslot} onClick={handleAppointmentDate} className='btn-submit'>
					Next {'  -->'}
				</button>
			</div>
		</div>
	)
}
