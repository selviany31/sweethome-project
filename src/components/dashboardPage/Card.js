import React, { useState } from 'react'
import { CardContainer } from '../../assets/styles/components/dashboardPage/Card.styles'
import { IoIosArrowDown } from 'react-icons/io'
import AppointmentDetails from './AppointmentDetails'
import moment from 'moment'

export default function Card(props) {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	const statusColor = (status) => {
		if (status === 'Waiting Payment') {
			return { color: '#F8D277', text: 'waiting payment', border: 'rgba(248, 210, 119, 0.4)' }
		} else if (status === 'Waiting Approval') {
			return { color: '#F8D277', text: 'waiting approval', border: 'rgba(248, 210, 119, 0.4)' }
		} else if (status === 'Done') {
			return { color: '#61D3A4', text: 'done', border: 'rgba(97, 211, 164, 0.4)' }
		} else if (status === 'On Going') {
			return { color: '#3E89AE', text: 'ongoing', border: 'rgba(62, 137, 174, 0.4)' }
		} else if (status === 'Cancelled') {
			return { color: '#DD5571', text: 'cancelled', border: 'rgba(221, 85, 113, 0.4)' }
		} else if (status === 'Declined') {
			return { color: '#DD5571', text: 'declined', border: 'rgba(221, 85, 113, 0.4)' }
		} else if (status === 'Scheduled') {
			return { color: '#3E89AE', text: 'scheduled', border: 'rgba(62, 137, 174, 0.4)' }
		} else {
			return { color: '#999999', text: 'closed', border: 'rgba(153, 153, 153, 0.4)' }
		}
	}

	// console.log(props.data)

	return (
		<CardContainer color={statusColor(props.data.status).color} border={statusColor(props.data.status).border}>
			<div className='top-section'>
				<div className='left'>
					<div className='top-label'>
						<div className='label'>{props.data.status}</div>
						<div className='created-date'>Created at {moment(props.data.createdAt).format('DD MMMM YYYY, LT')}</div>
					</div>
					<div className='down-label'>
						<div className='date'> {moment(props.data.date).format('DD MMMM YYYY')} |</div>
						<div className='time'>
							{props.data.timeslot.start} am - {props.data.timeslot.end} pm
						</div>
					</div>
				</div>

				<div className='toogle' onClick={toggle}>
					<IoIosArrowDown />
				</div>
			</div>
			{isOpen && (
				<div className='bottom-section'>
					<AppointmentDetails detail={props.data} />
				</div>
			)}
		</CardContainer>
	)
}
