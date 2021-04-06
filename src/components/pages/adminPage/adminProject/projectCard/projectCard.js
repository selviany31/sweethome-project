import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './projectCard.css'
import { getAllProjectData } from '../../../../../redux/action/AdminProjectAction'
import Moment from 'moment'
import NumberFormat from 'react-number-format'
import { FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Spinner from '../../../../../components/dashboardPage/Spinner'
import displayPic from '../../adminProject/displayPicture.png'

function ProjectCard({ id }) {
	const dispatch = useDispatch()
	const projectData = useSelector((state) => state.adminProject.projectDataAll)

	useEffect(() => {
		dispatch(getAllProjectData(id))
		// eslint-disable-next-line 
	}, [id])

	// console.log(projectData)
	// console.log(`id`, id)

	return (
		<div>
			{projectData?.length === 0 ? (
				<div className='adm-project-spinner'>
					<Spinner />
				</div>
			) : (
				projectData.data?.map((users, index) => {
					return (
						<div className='adm-project-card' key={index}>
							<div className='pc-profile'>
								<img src={users.user.photo === 'none' ? displayPic : users.user.photo} alt='' className='pc-dp' />
								<div>
									<p className='pcp-name'>
										{users.user?.firstname} {users.user?.lastname}
									</p>
									<p className='pcp-created'>Created at {Moment(users.createdAt).format('DD MMMM YYYY, HH:MM A')}</p>
								</div>
							</div>
							<div className='pc-package'>
								{users.packages?.map((pkg, subIndex) => (
									<div key={subIndex}>
										<div className='pkg-loc'>{pkg.location.name}</div>
										<div className='pkg-type'>{pkg.projectType.name}</div>
									</div>
								))}
							</div>

							<div className='pc-price'>
								<NumberFormat value={users.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />{' '}
								<div
									className={
										users.status.toUpperCase() === 'DONE' || users.status.toUpperCase() === 'ON GOING'
											? 'pmt-status-done'
											: users.status.toUpperCase() === 'CANCELLED'
												? 'pmt-status-cancel'
												: users.status.toUpperCase() === 'WAITING PAYMENT'
													? 'pmt-status-wait'
													: ''
									}>
									{users.status.toUpperCase() === 'DONE' || users.status.toUpperCase() === 'ON GOING'
										? 'Paid'
										: users.status.toUpperCase() === 'WAITING PAYMENT'
											? 'Pending'
											: users.status.toUpperCase() === 'CANCELLED'
												? 'Cancelled'
												: ''}
								</div>
							</div>
							<div className='pc-completion'>
								<div className='completion-date'>{Moment(users.createdAt).add(users.packages[0]?.duration, 'weeks').format('DD MMMM YYYY')}</div>
								<div className='completion-due'>due {Moment(users.createdAt).add(users.packages[0]?.duration, 'weeks').fromNow()}</div>
								{/* <div>{Moment().subtract()}</div> */}
							</div>
							<div className='pmt-stat-container'>
								<p
									className={
										users.status === 'Done'
											? 'pmt-done'
											: users.status === 'Cancelled'
												? 'pmt-cancel'
												: users.status === 'Waiting Payment'
													? 'pmt-wait'
													: users.status === 'On Going'
														? 'pmt-ongoing'
														: ''
									}>
									{users.status.toUpperCase()}
								</p>
							</div>
							<Link to={`/admin/project/${users._id}`}>
								<button className='setting-btn-icon'>
									<FaEllipsisV className='setting-table-icon' />
								</button>
							</Link>
						</div>
					)
				})
			)}
		</div>
	)
}

export default ProjectCard
