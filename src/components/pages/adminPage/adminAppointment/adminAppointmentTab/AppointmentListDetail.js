import React, { useEffect, useState } from 'react'
import '../AdminAppointment.css'
import * as ActionAppointment from '../../../../../redux/action/AdminAppointment'
import { useDispatch, useSelector } from 'react-redux'
import { GoCheck } from 'react-icons/go'
import { TiShoppingCart } from 'react-icons/ti'
import Spinner from '../../../../../components/dashboardPage/Spinner'
import Breadcrumb from '../../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../../layouts/BreadcrumbItem'
import NumberFormat from 'react-number-format'
import moment from 'moment'

export default function AppointmentListDetail({ match }) {
	const dispatch = useDispatch()

	const [statusData, setStatus] = useState('')
	const adminAppointmentDetail = useSelector((state) => state.adminAppointment.adminAppointmentDetail)

	const handleChangeStatus = (value) => {
		const body = {
			status: value,
		}
		setStatus(value)

		dispatch(ActionAppointment.putStatusAppointment(match.params.id, body))
		dispatch(ActionAppointment.getAdminAppointmentDetail(match.params.id))
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

	useEffect(() => {
		dispatch(ActionAppointment.getAdminAppointmentDetail(match.params.id))
	}, [dispatch, match.params.id])

	console.log(statusData)
	return adminAppointmentDetail.length === 0 || adminAppointmentDetail._id !== match.params.id ? (
		null || (
			<div className='spinner-container'>
				<Spinner />
			</div>
		)
	) : (
		<div className='setting-container'>
			<div className='adm-appointment-title'>
				<span>
					{adminAppointmentDetail.user?.firstname} {adminAppointmentDetail.user?.lastname}
				</span>
				<span className='adm-appointment-ticket'>{adminAppointmentDetail.ticket}</span>
				<span className='adm-appointment-status' style={{ backgroundColor: renderColorStatus(adminAppointmentDetail.status) }}>
					{adminAppointmentDetail.status?.toUpperCase()}
				</span>
			</div>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Appointment' to='/admin/appointment' />
				<BreadcrumbItem name={`${adminAppointmentDetail.user?.firstname} ${adminAppointmentDetail.user?.lastname}`} />
			</Breadcrumb>
			<div className='setting-wrapper'>
				<div className='adm-appointment-wrapper'>
					<div className='adm-appointment-detail'>
						<div>
							<img src={adminAppointmentDetail.user?.photo} alt='imgclear' className='adm-appointment-detail-img' />
						</div>
						<div>
							<p>Name</p>
							<p>
								{adminAppointmentDetail.user?.firstname} {adminAppointmentDetail.user?.lastname}
							</p>
							<p>Phone</p>
							<p>{adminAppointmentDetail.user?.phone}</p>
							<p>Email</p>
							<p>{adminAppointmentDetail.user?.email}</p>
						</div>
					</div>
					<hr />
					<div className='adm-appointment-detail-content'>
						<div>
							<p>Building Type</p>
							<p>{adminAppointmentDetail.buildType?.name}</p>
						</div>
						<div>
							<p>Service Type</p>
							<p>{adminAppointmentDetail.serviceType?.name}</p>
						</div>
						<div>
							<p>Budget</p>
							<p>
								<NumberFormat value={adminAppointmentDetail.budget} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
							</p>
						</div>
						<div>
							<p>Estimated Duration</p>
							<p>{adminAppointmentDetail.duration} Week(s)</p>
						</div>
						<div>
							<p>Address</p>
							<p>{adminAppointmentDetail.address}</p>
						</div>
					</div>
				</div>
			</div>
			<div className='setting-wrapper adm-appointment-space'>
				<div className='adm-appointment-detail-list'>
					<div>
						<p>Inspection Area</p>
						<ul>
							{!adminAppointmentDetail.locations
								? null
								: adminAppointmentDetail.locations.map((location, index) => {
										return <li key={index}>{location.name}</li>
								  })}
						</ul>
					</div>
					<div>
						<p>Preffered Style</p>
						<ul>
							{!adminAppointmentDetail.styles
								? null
								: adminAppointmentDetail.styles.map((style, index) => {
										return <li key={index}>{style.name}</li>
								  })}
						</ul>
					</div>
					<div>
						<p>Note</p>
						<p>{adminAppointmentDetail.note}</p>
					</div>
				</div>
				<span>Submitted at {moment(adminAppointmentDetail?.createdAt).format('DD MMMM YYYY, h:mm A')}</span>
			</div>
			<div className='adm-btn-status-wrapper'>
				<button
					style={adminAppointmentDetail.status === 'Waiting Approval' ? { display: 'block' } : { display: 'none' }}
					value='Declined'
					onClick={() => handleChangeStatus('Declined')}>
					Decline
				</button>
				<button
					style={adminAppointmentDetail.status === 'Waiting Approval' ? { display: 'block' } : { display: 'none' }}
					value='Scheduled'
					onClick={() => handleChangeStatus('Scheduled')}>
					<GoCheck />
					<span>Approve</span>
				</button>
				<button
					style={adminAppointmentDetail.status === 'Scheduled' ? { display: 'block' } : { display: 'none' }}
					value='Declined'
					onClick={() => handleChangeStatus('Closed')}>
					Close Appointment
				</button>
				<button style={adminAppointmentDetail.status === 'Scheduled' ? { display: 'block' } : { display: 'none' }} value='Scheduled' onClick={() => handleChangeStatus('Done')}>
					<TiShoppingCart />
					<span>Proceed to Order</span>
				</button>
			</div>
		</div>
	)
}
