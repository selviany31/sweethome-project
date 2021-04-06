import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import '../../../Setting.css'
import { getAdminData, postSettingAdmin, putSettingAdmin, deleteSettingAdmin } from '../../../../../../../redux/action/AdminSetting'
import { useDispatch } from 'react-redux'
import { FaSortAmountUp, FaFilter } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { IoTrashOutline } from 'react-icons/io5'
import Spinner from '../../../../../../dashboardPage/Spinner'
import Breadcrumb from '../../../../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../../../../layouts/BreadcrumbItem'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

export default function AdminList() {
	const dispatch = useDispatch()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [adminData, setAdminData] = useState([])
	const [idAdmin, setIdAdmin] = useState('')
	const [isActive, setIsActive] = useState(false)
	const [inputAdmin, setInputAdmin] = useState({
		name: '',
		email: '',
		password: '',
	})

	const handleCreateAdmin = (e) => {
		e.preventDefault()
		const body = {
			name: inputAdmin.name,
			email: inputAdmin.email,
			password: inputAdmin.password,
		}
		dispatch(postSettingAdmin(body)).then(() => {
			setInputAdmin('')
			setIsModalOpen(false)
			dispatch(getAdminData()).then((response) => setAdminData(response))
		})
	}
	const handleUpdateAdmin = (e) => {
		e.preventDefault()
		const body = {
			name: inputAdmin.name,
			email: inputAdmin.email,
			password: inputAdmin.password,
		}
		dispatch(putSettingAdmin(idAdmin, body)).then(() => {
			setInputAdmin('')
			setIsModalOpen(false)
			dispatch(getAdminData()).then((response) => setAdminData(response))
		})
	}
	const handleDeleteAdmin = (id) => {
		dispatch(deleteSettingAdmin(id)).then(() => dispatch(getAdminData()).then((response) => setAdminData(response)))
	}
	const submit = (idCont) => {
		confirmAlert({
			title: 'Delete Admin',
			message: 'Are you sure want to delete this admin account?.',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						handleDeleteAdmin(idCont)
					},
				},
				{
					label: 'No',
					onClick: () => alert('Click No'),
				},
			],
		})
	}

	useEffect(() => {
		dispatch(getAdminData()).then((response) => setAdminData(response))
	}, [dispatch])

	return (
		<div className='setting-container'>
			<p className='adm-title-setting'>Admin</p>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Settings' to='/admin/setting' />
				<BreadcrumbItem name='Admin' />
			</Breadcrumb>
			<div className='setting-wrapper'>
				<div className='setting-head'>
					<div>
						<button
							className='setting-btn-submit'
							onClick={() => {
								setIsModalOpen(true)
							}}>
							<AiOutlinePlus className='setting-plus-icon' /> Create New
						</button>
					</div>
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
				</div>
				{adminData.length === 0 ? (
					null || (
						<div className='spinner-container'>
							<Spinner />
						</div>
					)
				) : (
					<table className='setting-table'>
						<thead className='setting-table-head'>
							<tr>
								<td>Name</td>
								<td>Email</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{!adminData
								? null
								: adminData.map((admin, index) => {
										return (
											<tr key={index}>
												<td>{admin?.name}</td>
												<td>{admin?.email}</td>
												<td>
													<button
														className='setting-btn-icon'
														onClick={() => {
															setIsActive(true)
															setIdAdmin(admin?._id)
															setIsModalOpen(true)
														}}>
														<MdSystemUpdateAlt className='setting-table-icon' />
													</button>
													<button
														className='setting-btn-icon'
														onClick={() => {
															submit(admin._id)
														}}>
														<IoTrashOutline className='setting-table-icon' />
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
						<p>{isActive ? 'Update Admin' : 'Create New Admin'}</p>
						<button
							onClick={() => {
								setIsModalOpen(false)
								setIsActive(false)
								setIdAdmin('')
							}}>
							<AiOutlineClose />
						</button>
					</div>
					<form className='setting-modal-form'>
						<div className='setting-modal-timeslot'>
							<div>
								<label>
									Name<span>*</span>
								</label>
								<br />
								<input type='text' placeholder='e.g Justin Junaedi' onChange={(e) => setInputAdmin({ ...inputAdmin, name: e.target.value })} />
							</div>
							<div>
								<label>
									Email<span>*</span>
								</label>
								<br />
								<input type='text' placeholder='e.g justinjunaedi@gmail.com' onChange={(e) => setInputAdmin({ ...inputAdmin, email: e.target.value })} />
							</div>
						</div>
						<label>
							Password<span>*</span>
						</label>
						<br />
						<input className='setting-input-content' type='password' placeholder='********' onChange={(e) => setInputAdmin({ ...inputAdmin, password: e.target.value })} />
						<div className='setting-btn-modal-wrapper'>
							<button style={isActive ? { display: 'none' } : { display: 'block' }} className='setting-btn-modal' onClick={handleCreateAdmin}>
								Create Admin
							</button>
							<button style={isActive ? { display: 'block' } : { display: 'none' }} className='setting-btn-modal' onClick={handleUpdateAdmin}>
								Update Admin
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	)
}
