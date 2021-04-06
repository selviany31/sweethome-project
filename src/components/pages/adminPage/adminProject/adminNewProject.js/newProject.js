import React, { useEffect, useState } from 'react'
import './newProject.css'
import { VscChevronRight } from 'react-icons/vsc'
import { getCustomerList } from '../../../../../redux/action/CustomerAction'
import { postOrderProject } from '../../../../../redux/action/AdminProjectAction'
import { getAdminAppointment } from '../../../../../redux/action/AdminAppointment'
import { useDispatch, useSelector } from 'react-redux'
import PackageCard from './PackageCard'
import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router-dom'
import Moment from 'moment'

const NewProject = ({ match }) => {
	const dispatch = useDispatch()
	const customerData = useSelector((state) => state.customerReducer.customers)
	const appointmentData = useSelector((state) => state.adminAppointment.adminAppointmentData)

	useEffect(() => {
		dispatch(getCustomerList())
		dispatch(getAdminAppointment())
	}, [dispatch])

	// setup for project details

	const [packages, setPackages] = useState([])
	const [arrPkg, setArrPkg] = useState([<PackageCard packages={packages} setPackages={setPackages} />])

	const handleAddPackage = () => {
		setArrPkg([...arrPkg, ...[<PackageCard packages={packages} setPackages={setPackages} />]])
	}

	// count total project duration
	let totalDuration = 0
	for (let i = 0; i < packages.length; i++) {
		if (packages.length > 0) {
			totalDuration += packages[i].duration
		}
	}

	// count total price
	let totalPrice = 0
	for (let i = 0; i < packages.length; i++) {
		if (packages.length > 0) {
			totalPrice += packages[i].price
		}
	}

	// setup post new project (admin)
	const [order, setOrder] = useState({
		user: '',
		packages: [],
		appointment: '',
	})

	// const orderData = useSelector((state) => state.adminProject.projectData)

	useEffect(() => {
		setOrder({ ...order, packages: packages })
		// eslint-disable-next-line
	}, [packages])

	console.log('order', order)
	// console.log(packages)

	// setup for submit project
	const history = useHistory()
	const handleSubmitProject = (e) => {
		e.preventDefault()
		const body = {
			user: order.user,
			packages: order.packages,
			appointment: order.appointment,
		}
		dispatch(postOrderProject(body))
		history.push('/admin/project')
	}

	return (
		<div className='adm-project-new'>
			<h3>Create Order</h3>
			<p className='adm-new-breadcrumb'>
				<a href='/' style={{ textDecoration: 'none', color: '#828282' }}>
					Home
				</a>{' '}
				<VscChevronRight
					style={{
						verticalAlign: 'middle',
						marginRight: '0.5%',
						fontSize: '18px',
						color: '#828282',
					}}
				/>
				<a href='/admin/project' className='adm-p-link'>
					Order
				</a>{' '}
				<VscChevronRight
					style={{
						verticalAlign: 'middle',
						marginRight: '0.5%',
						fontSize: '18px',
						color: '#828282',
					}}
				/>
				<span style={{ color: '#214457', fontWeight: 'bold' }}>Create Order</span>
			</p>
			<div className='project-cust-select'>
				<div className='cust-select'>
					<p>Customer Details</p>
					<select defaultValue={'DEFAULT'} onChange={(e) => setOrder({ ...order, user: JSON.parse(e.target.value), appointment: '' })}>
						<option value='DEFAULT' disabled>
							Please select...
						</option>
						{customerData.length === 0
							? null
							: customerData.data?.map((cust, index) => (
								<option key={index} value={JSON.stringify(cust)}>
									{cust.firstname} {cust.lastname}
								</option>
							))}
					</select>
					{order.user ? (
						<div className='selected-cust-detail'>
							<img src={order.user.photo} alt='' className='cust-dp-pic' />
							<div className='cust-detail-detail'>
								<p className='cust-detail-title'>Name</p>
								<p className='cust-detail-content'>
									{order.user.firstname} {order.user.lastname}
								</p>
								<p className='cust-detail-title'>Phone</p>
								<p className='cust-detail-content'>{order.user.phone}</p>
								<p className='cust-detail-title'>Email</p>
								<p className='cust-detail-content'>{order.user.email}</p>
							</div>
						</div>
					) : (
						''
					)}
				</div>
				<div className='cust-select'>
					<p>Appointment Details</p>
					<select defaultValue={'DEFAULT'} onChange={(e) => setOrder({ ...order, appointment: JSON.parse(e.target.value) })}>
						<option value='DEFAULT' disabled>
							Please select...
						</option>
						{appointmentData.length === 0
							? null
							: appointmentData.data?.map((appt, index) =>
								order.user._id === appt.user._id && appt.status.toLowerCase() === 'done' ? (
									<option key={index} value={JSON.stringify(appt)}>
										{order.user._id === appt.user._id ? `${Moment(appt.date).format('DD MMM YYYY')} | ${appt.timeslot.start} - ${appt.timeslot.end}` : null}
									</option>
								) : (
									''
								)
							)}
					</select>
					{order.appointment ? (
						<div className='selected-appt-detail'>
							<div className='appt-details-columns'>
								<div className='appt-service-detail'>
									<p className='cust-detail-title'>Appointment ID</p>
									<p className='cust-detail-content'>{order.appointment.ticket}</p>
									<p className='cust-detail-title'>Service Type</p>
									<p className='cust-detail-content'>{order.appointment.serviceType?.name}</p>
								</div>
								<div>
									<p className='cust-detail-title'>Build Type</p>
									<p className='cust-detail-content'>{order.appointment.buildType.name}</p>
									<p className='cust-detail-title'>Budget</p>
									<p className='cust-detail-content'>
										<NumberFormat value={order.appointment.budget} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
									</p>
								</div>
							</div>
							<p className='cust-detail-title'>Address</p>
							<p className='cust-detail-content'>{order.appointment.address}</p>
						</div>
					) : (
						''
					)}
				</div>
			</div>
			<div className='project-detail-select'>
				<p style={{ fontWeight: 'bold' }}>Project Details</p>
				<hr
					style={{
						border: '1px solid #999999',
						height: '0px',
						marginTop: '1.5%',
					}}
				/>

				{arrPkg.map((pkg, index) => (
					<div key={index}>{pkg}</div>
				))}

				<button
					className='new-pkg-btn'
					disabled={
						!packages[packages.length - 1]?.area ||
						!packages[packages.length - 1]?.duration ||
						!packages[packages.length - 1]?.location ||
						!packages[packages.length - 1]?.price ||
						!packages[packages.length - 1]?.projectType
					}
					onClick={handleAddPackage}>
					New Package
				</button>
			</div>
			<div className='duration-total'>
				<div className='dt-dur'>
					<p style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '5%' }}>Duration</p>
					<p style={{ fontSize: '16px', width: '6rem' }}>{totalDuration} Week(s)</p>
				</div>
				<div className='dt-total'>
					<p style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '5%' }}>Total</p>
					<p style={{ fontSize: '16px', width: '8rem' }}>
						<NumberFormat value={totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
					</p>
				</div>
			</div>
			<div className='create-order-btn-div'>
				<button className='btn-create-order' onClick={handleSubmitProject}>
					Create Order
				</button>
			</div>
		</div>
	)
}

export default NewProject
