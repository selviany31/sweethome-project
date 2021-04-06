import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAdminContent } from '../.././../../../../../redux/action/AdminSetting'
import '../../../Setting.css'
import { FaSortAmountUp, FaFilter, FaEllipsisV } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import Spinner from '../../../../../../../components/dashboardPage/Spinner'
import Breadcrumb from '../../../../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../../../../layouts/BreadcrumbItem'

export default function Timeslot() {
	const dispatch = useDispatch()

	const [serviceType, setServiceType] = useState([])

	useEffect(() => {
		dispatch(getAdminContent('serviceType')).then((response) => setServiceType(response))
	}, [dispatch])

	return !serviceType ? null : (
		<div className='setting-container'>
			<p>Timeslot</p>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Settings' to='/admin/setting/timeslot' />
				<BreadcrumbItem name='Timeslot' />
			</Breadcrumb>
			<div className='setting-wrapper'>
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
				{serviceType.length === 0 ? (
					null || (
						<div className='spinner-container'>
							<Spinner />
						</div>
					)
				) : (
					<table className='setting-table'>
						<thead className='setting-table-head'>
							<tr>
								<td>Service Type</td>
								<td>Updated At</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{!serviceType
								? null
								: serviceType.map((service, index) => {
										return (
											<tr key={index}>
												<td>{service?.name}</td>
												<td>{moment(service?.createdAt).format('DD MMMM YYYY, hh:mm A')}</td>
												<td>
													<Link to={`/admin/setting/timeslot/${service?.name}/${service?._id}`} title='See detail timeslot' servicename={service.name}>
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
				)}
			</div>
		</div>
	)
}
