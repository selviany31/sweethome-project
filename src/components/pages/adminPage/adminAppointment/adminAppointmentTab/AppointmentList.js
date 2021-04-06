import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getAdminAppointment } from '../../../../../redux/action/AdminAppointment'
import moment from 'moment'
import '../AdminAppointment.css'
import Spinner from '../../../../../components/dashboardPage/Spinner'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

export default function AppointmentList() {
	const dispatch = useDispatch()

	const adminAppointmentData = useSelector((state) => state.adminAppointment.adminAppointmentData)
	const [pages, setPages] = useState(1)
	const pagination = (page) => {
		setPages(page)
	}

	const renderColorStatus = (param) => {
		if (param === 'Waiting Approval') {
			return '#F8D277'
		} else if (param === 'Scheduled') {
			return '#3E89AE'
		} else if (param === 'Declined') {
			return '#DD5571'
		} else if (param === 'Done') {
			return '#61D3A4'
		} else if (param === 'Closed') {
			return '#999999'
		}
	}
	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'AM' : 'PM'
	}

	useEffect(() => {
		dispatch(getAdminAppointment(pages))
	}, [dispatch, pages])

	console.log(adminAppointmentData)
	return adminAppointmentData.length === 0 ? (
		null || (
			<div className='spinner-container'>
				<Spinner />
			</div>
		)
	) : (
		<div>
			<table className='setting-table'>
				<thead className='setting-adm-table'>
					<tr>
						<td>Customer</td>
						<td>Inquiry</td>

						<td>Appointment Date</td>
						<td>Status</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{adminAppointmentData.data.map((item, index) => {
						return (
							<tr key={index}>
								<td className='adm-appointment-row'>
									<div>
										<img src={item.user?.photo} alt='prof-pic' className='adm-appointment-pic' />
									</div>
									<div>
										{item.user === null ? 'anonymous' : item.user.firstname} {item.user === null ? '.' : item.user.lastname}
										<p>Submitted at {moment(item.createdAt).format('DD MMMM YYYY, h:mm A')}</p>
									</div>
								</td>
								<td>
									{item.locations[0]?.name}
									<p className='adm-appointment-text'>{item.serviceType.name}</p>
								</td>
								<td>
									{moment(item.date).format('DD MMMM YYYY')}
									<p className='adm-appointment-text'>
										{item.timeslot?.start} {handleFormatTime(item.timeslot?.start)} - {item.timeslot?.end} {handleFormatTime(item.timeslot?.end)}
									</p>
								</td>
								<td>
									<span className='adm-appointment-status' style={{ backgroundColor: renderColorStatus(item.status) }}>
										{item.status?.toUpperCase()}
									</span>
								</td>
								<td>
									<Link to={`/admin/appointment/list-detail/${item._id}`}>
										<button className='setting-btn-icon'>
											<FaEllipsisV className='setting-table-icon' />
										</button>
									</Link>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className='project-pagination'>
				<p className='row-per-page'>Rows per page: 10</p>
				<div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
					<p className='pgn-btn'>
						<VscChevronLeft onClick={() => pagination(pages > 1 ? pages - 1 : 1)} style={{ color: '#9FA2B4', fontSize: '20px' }} />
					</p>
					<p className='pagination-current-page'>Page {pages}</p>
					<p className='pgn-btn'>
						<VscChevronRight onClick={() => pagination(pages + 1)} style={{ color: '#9FA2B4', fontSize: '20px' }} />
					</p>
				</div>
			</div>
		</div>
	)
}
