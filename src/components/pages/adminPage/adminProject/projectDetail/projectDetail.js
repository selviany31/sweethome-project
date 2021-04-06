import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectDetail, putProjectStatus } from '../../../../../redux/action/AdminProjectAction'
import './projectDetail.css'
import { VscChevronRight } from 'react-icons/vsc'
import { Link, useHistory } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import Moment from 'moment'
import Spinner from '../../../../../components/dashboardPage/Spinner'
import Modal from './AdminUploadReceipt'

function ProjectDetail({ match }) {
	const dispatch = useDispatch()
	const projectDetail = useSelector((state) => state.adminProject.projectDetail)

	useEffect(() => {
		dispatch(getProjectDetail(match.params.id))
	}, [dispatch, match.params.id])
	// console.log(`ini detail`, projectDetail)

	// setup button status change
	// const [statusData, setStatus] = useState('')
	const history = useHistory()
	const handleChangeStatus = (value) => {
		// setStatus(value)
		const body = {
			status: value,
		}
		dispatch(putProjectStatus(match.params.id, body))
		dispatch(getProjectDetail(match.params.id))
	}

	// setup upload file modal
	const [showModal, setShowModal] = useState(false)
	const openModal = () => {
		setShowModal((prev) => !prev)
	}

	return projectDetail.length === 0 ? (
		<div className='spinner-container'>
			<Spinner />
		</div>
	) : (
		<div className='adm-project-detail-container'>
			<div className='adm-detail-title'>
				<h3 className='title-full-name'>
					{projectDetail.data.user?.firstname} {projectDetail.data.user?.lastname}
				</h3>
				<h3 className='adm-detail-ticket'>{projectDetail.data?.ticket}</h3>
				<label
					className={
						projectDetail.data?.status.toUpperCase() === 'DONE'
							? 'detail-stat-done'
							: projectDetail.data?.status.toUpperCase() === 'WAITING PAYMENT'
							? 'detail-stat-wait'
							: projectDetail.data?.status.toUpperCase() === 'ON GOING'
							? 'detail-stat-ongoing'
							: projectDetail.data?.status.toUpperCase() === 'CANCELLED'
							? 'detail-stat-cancel'
							: ''
					}>
					{projectDetail.data.status?.toUpperCase()}
				</label>
			</div>
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
				<span style={{ color: '#214457', fontWeight: 'bold' }}>{projectDetail.data.ticket}</span>
			</p>

			{projectDetail.data.status.toUpperCase() === 'CANCELLED' ? (
				<p className='order-cancelled-notif'>{`This order has been cancelled at ${Moment(projectDetail.data.updatedAt).format('DD MMM YYYY, hh:mm a')}`}</p>
			) : (
				''
			)}
			<div className='project-detail-info'>
				<div className='project-detail-wrapper'>
					<div className='project-detail-contact'>
						<div className='pd-cust-detail'>
							<img src={projectDetail.data.user.photo} alt='' className='cust-dp-pic' />
							<div className='cust-detail-detail'>
								<p className='cust-detail-title'>Name</p>
								<p className='cust-detail-content'>
									{projectDetail.data.user.firstname} {projectDetail.data.user.lastname}
								</p>
								<p className='cust-detail-title'>Phone</p>
								<p className='cust-detail-content'>{projectDetail.data.user.phone}</p>
								<p className='cust-detail-title'>Email</p>
								<p className='cust-detail-content'>{projectDetail.data.user.email}</p>
							</div>
						</div>

						<div className='pd-project-detail'>
							<div className='pd-cust-detail-container'>
								<div className='price-dur-container'>
									<div className='total-price-container'>
										<p className='cust-detail-title'>Total Price</p>
										<p className='cust-detail-content'>
											<NumberFormat value={projectDetail.data?.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
										</p>
									</div>
									<div>
										<p className='cust-detail-title'>Total Duration</p>
										<p className='cust-detail-content'>{projectDetail.data?.totalDuration} Week(s)</p>
									</div>
								</div>
								<div>
									<p className='cust-detail-title'>Address</p>
									<p className='cust-detail-address'>{projectDetail.data.user?.address}</p>
									<Link to={{ pathname: 'https://www.google.com/maps' }} target='_blank' style={{ color: 'black' }}>
										<p style={{ fontSize: '14px', marginBottom: '1.375rem' }}>see maps</p>
									</Link>
								</div>
								<div className='appt-receipt-container'>
									<div className='related-appt-container'>
										<p className='cust-detail-title'>Related Appointment</p>
										<p className='cust-detail-content'>{projectDetail.data.ticket}</p>
									</div>
									{projectDetail.data?.status.toUpperCase() === 'ON GOING' || projectDetail.data?.status.toUpperCase() === 'DONE' ? (
										<div>
											<p className='cust-detail-title'>Payment Receipt</p>
											<Link to={{ pathname: projectDetail.data.receipt }} target='_blank' style={{ color: 'black' }}>
												<p className='cust-detail-content'>receipt.jpg</p>
											</Link>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='project-detail-list'>
				<div className='pl-tabs-detail'>
					<p style={{ width: '16rem' }}>Project Type</p>
					<p style={{ width: '18rem' }}>Area</p>
					<p style={{ width: '18rem' }}>Work Duration</p>
					<p>Total</p>
				</div>
				{projectDetail.length === 0
					? null
					: projectDetail.data.packages?.map((pkg, index) => (
							<div key={index} className='detail-packages'>
								<p style={{ width: '16rem' }} className='pkg-project-type'>
									{pkg.projectType.name}
								</p>
								<p style={{ width: '18rem' }} className='pkg-project-content'>
									{pkg.location.name}
								</p>
								<p style={{ width: '18rem' }} className='pkg-project-content'>
									{pkg.duration} Week(s)
								</p>
								<p className='pkg-project-content'>
									<NumberFormat value={pkg.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
								</p>
							</div>
					  ))}
			</div>
			<div className='duration-total'>
				<div className='dt-dur'>
					<p style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '5%' }}>Duration</p>
					<p style={{ fontSize: '16px', width: '6rem' }}>{projectDetail.data.totalDuration} Week(s)</p>
				</div>
				<div className='dt-total'>
					<p style={{ fontWeight: 'bold', fontSize: '16px', marginRight: '5%' }}>Total</p>
					<p style={{ fontSize: '16px', width: '8rem' }}>
						<NumberFormat value={projectDetail.data.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
					</p>
				</div>
			</div>
			{projectDetail.data.status.toUpperCase() === 'DONE' ? (
				<div className='detail-btn-ongoing'>
					<button>Create Showcase</button>
				</div>
			) : projectDetail.data.status.toUpperCase() === 'WAITING PAYMENT' ? (
				<div className='detail-btn-wait'>
					<button
						className='wait-btn-cancel'
						value='Cancelled'
						onClick={() => {
							handleChangeStatus('Cancelled')
							history.push('/admin/project')
						}}>
						Cancel
					</button>
					<div>
						<button className='wait-btn-upload' onClick={openModal}>
							Upload Receipt
						</button>
						<Modal showModal={showModal} setShowModal={setShowModal} />
					</div>
				</div>
			) : projectDetail.data.status.toUpperCase() === 'ON GOING' ? (
				<div className='detail-btn-ongoing'>
					<button
						value='Done'
						onClick={() => {
							handleChangeStatus('Done')
							history.push('/admin/project')
						}}>
						Complete Order
					</button>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default ProjectDetail
