import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import moment from 'moment'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { MdSystemUpdateAlt } from 'react-icons/md'
import { IoTrashOutline } from 'react-icons/io5'
import { getAdminContent, postSettingContent, putSettingContent, deleteSettingContent } from '../../../../../../redux/action/AdminSetting'
import '../../Setting.css'
import { useDispatch } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert' // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import Spinner from '../../../../../../components/dashboardPage/Spinner'
import Breadcrumb from '../../../../../layouts/Breadcrumb'
import BreadcrumbItem from '../../../../../layouts/BreadcrumbItem'

export default function Content() {
	const dispatch = useDispatch()

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [btnTitle, setBtnTitle] = useState('location')
	const [contentData, setContentData] = useState([])
	const [inputContent, setInputContent] = useState('')
	const [isActive, setIsActive] = useState(false)
	const [idContent, setIdContent] = useState('')

	useEffect(() => {
		setContentData([])
		dispatch(getAdminContent(btnTitle)).then((response) => setContentData(response))
	}, [dispatch, btnTitle])

	const handleCreateContent = (e) => {
		e.preventDefault()
		const body = {
			name: inputContent,
		}
		dispatch(postSettingContent(btnTitle, body)).then(() => {
			setInputContent('')
			setIsModalOpen(false)
			dispatch(getAdminContent(btnTitle)).then((response) => setContentData(response))
		})
	}

	const handleUpdateContent = (e) => {
		e.preventDefault()
		const body = {
			name: inputContent,
		}
		dispatch(putSettingContent(idContent, btnTitle, body)).then(() => {
			setInputContent('')
			setIsModalOpen(false)
			dispatch(getAdminContent(btnTitle)).then((response) => setContentData(response))
		})
	}
	const handleDeleteContent = (id) => {
		dispatch(deleteSettingContent(id, btnTitle)).then(() => dispatch(getAdminContent(btnTitle)).then((response) => setContentData(response)))
	}

	const submit = (idCont) => {
		confirmAlert({
			title: 'Delete Content',
			message: 'Are you sure want to delete this content type?.',
			buttons: [
				{
					label: 'Yes',
					onClick: () => {
						handleDeleteContent(idCont)
					},
				},
				{
					label: 'No',
					onClick: () => alert('Click No'),
				},
			],
		})
	}
	return (
		<div className='setting-container'>
			<p>Contents</p>
			<Breadcrumb>
				<BreadcrumbItem name='Home' to='/' />
				<BreadcrumbItem name='Settings' to='/admin/setting' />
				<BreadcrumbItem name='Content' />
			</Breadcrumb>
			<div className='setting-wrapper'>
				<div className='setting-head'>
					<div>
						<button onClick={() => setBtnTitle('location')} className={btnTitle === 'location' ? 'setting-content-btn-active' : 'setting-content-btn'}>
							Location
						</button>
						<button onClick={() => setBtnTitle('buildType')} className={btnTitle === 'buildType' ? 'setting-content-btn-active' : 'setting-content-btn'}>
							Building Type
						</button>
						<button onClick={() => setBtnTitle('serviceType')} className={btnTitle === 'serviceType' ? 'setting-content-btn-active' : 'setting-content-btn'}>
							Service Type
						</button>
						<button onClick={() => setBtnTitle('projectType')} className={btnTitle === 'projectType' ? 'setting-content-btn-active' : 'setting-content-btn'}>
							Project Type
						</button>
						<button onClick={() => setBtnTitle('style')} className={btnTitle === 'style' ? 'setting-content-btn-active' : 'setting-content-btn'}>
							Styles
						</button>
					</div>
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
				{contentData.length === 0 ? (
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
								<td>Created At</td>
								<td></td>
							</tr>
						</thead>
						<tbody>
							{contentData.map((content, index) => {
								return (
									<tr key={index}>
										<td>{content.name}</td>
										<td>{moment(content.createdAt).format('DD MMMM YYYY, hh:mm A')}</td>
										<td className='setting-btn-icon-wrapper'>
											<button
												className='setting-btn-icon'
												onClick={() => {
													setIsActive(true)
													setIsModalOpen(true)
													setIdContent(content._id)
												}}>
												<MdSystemUpdateAlt className='setting-table-icon' />
											</button>
											<button
												className='setting-btn-icon'
												onClick={() => {
													submit(content._id)
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
						<p>{isActive ? 'Update Content' : 'Create New Content'}</p>
						<button
							onClick={() => {
								setIsModalOpen(false)
								setIsActive(false)
								setIdContent('')
							}}>
							<AiOutlineClose />
						</button>
					</div>
					<form className='setting-modal-form'>
						<label>
							Category<span>*</span>
						</label>
						<br />
						<input type='text' value={btnTitle} disabled /> <br />
						<label>
							Content<span>*</span>
						</label>
						<br />
						<input className='setting-input-content' type='text' onChange={(e) => setInputContent(e.target.value)} />
						<div className='setting-btn-modal-wrapper'>
							<button style={isActive ? { display: 'none' } : { display: 'block' }} onClick={handleCreateContent} className='setting-btn-modal'>
								Create Content
							</button>
							<button style={isActive ? { display: 'block' } : { display: 'none' }} onClick={handleUpdateContent} className='setting-btn-modal'>
								Update Content
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</div>
	)
}
