import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import '../../../Setting.css'
import { FaEllipsisV } from 'react-icons/fa'
import { getTimeslotDetail, postSettingTimeslot } from '../../../../../../../redux/action/AdminSetting'
import { useDispatch } from 'react-redux'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import Spinner from '../../../../../../../components/dashboardPage/Spinner'
import Breadcrumb from '../../../../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../../../../layouts/BreadcrumbItem'

export default function DetailTimeslot({ match }) {
	const dispatch = useDispatch()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [detailTimeslot, setDetailTimeslot] = useState([])
	const [inputTimeslot, setInputTimeslot] = useState({
		start: '',
		end: '',
		quota: '',
	})

	useEffect(() => {
		dispatch(getTimeslotDetail(match.params.id)).then((response) => setDetailTimeslot(response))
	}, [dispatch, match.params.id])

	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'AM' : 'PM'
	}
	const handleCreateTimeslot = (e) => {
		e.preventDefault()
		const body = {
			start: inputTimeslot.start,
			end: inputTimeslot.end,
			quota: inputTimeslot.quota,
		}
		dispatch(postSettingTimeslot(match.params.id, body)).then(() => {
			setInputTimeslot('')
			setIsModalOpen(false)
			dispatch(getTimeslotDetail(match.params.id)).then((response) => setDetailTimeslot(response))
		})
	}

	return (
		<div className='setting-container'>
			<p>Timeslot</p>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Settings' to='/admin/setting' />
				<BreadcrumbItem name='Timeslot' to='/admin/setting/timeslot' />
				<BreadcrumbItem name={match.params.name} />
			</Breadcrumb>
			<div className='setting-wrapper'>
				<div className='setting-head'>
					<p>{match.params.name} Timeslot</p>
					<div>
						<button
							className='setting-btn-submit'
							onClick={() => {
								setIsModalOpen(true)
							}}>
							<AiOutlinePlus className='setting-plus-icon' /> Create New
						</button>
					</div>
				</div>
				{detailTimeslot.length === 0 ? (
					null || (
						<div className='spinner-container'>
							<Spinner />
						</div>
					)
				) : (
					<table className='setting-table'>
						<thead className='setting-table-head'>
							<tr>
								<td>Timeslot</td>
								<td>Quota</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{!detailTimeslot
								? null
								: detailTimeslot.map((time, index) => {
										return (
											<tr key={index}>
												<td>
													{time?.start} {handleFormatTime(time?.start)} - {time?.end} {handleFormatTime(time?.end)}
												</td>
												<td>{time?.quota}</td>
												<td>
													<button className='setting-btn-icon'>
														<FaEllipsisV className='setting-table-icon' />
													</button>
												</td>
											</tr>
										)
								  })}
						</tbody>
					</table>
				)}
			</div>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				className='setting-modal-container'
				overlayClassName='setting-modal-overlay'
				contentLabel='Learn Modal'>
				<div className='setting-modal-wrapper'>
					<div className='setting-modal-content'>
						<p>Create New Timeslot</p>
						<button
							onClick={() => {
								setIsModalOpen(false)
							}}>
							<AiOutlineClose />
						</button>
					</div>
					<form className='setting-modal-form'>
						<div className='setting-modal-timeslot'>
							<div>
								<label>
									Start<span>*</span>
								</label>
								<br />
								<input type='text' onChange={(e) => setInputTimeslot({ ...inputTimeslot, start: e.target.value })} />
							</div>
							<div>
								<label>
									End<span>*</span>
								</label>
								<br />
								<input type='text' onChange={(e) => setInputTimeslot({ ...inputTimeslot, end: e.target.value })} />
							</div>
						</div>
						<label>
							Quota<span>*</span>
						</label>
						<br />
						<input className='setting-input-content' type='text' onChange={(e) => setInputTimeslot({ ...inputTimeslot, quota: e.target.value })} />
						<div className='setting-btn-modal-wrapper'>
							<button className='setting-btn-modal' onClick={handleCreateTimeslot}>
								Create Timeslot
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	)
}
