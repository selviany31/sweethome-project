import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { ModalCancel } from '../../../assets/styles/pages/dashboardPage/RequestCancel.styles'
import { postReqCancelData } from '../../../redux/action/DashboardAction'
import { useDispatch } from 'react-redux'

export default function RequestCancel(props) {
	const dispatch = useDispatch()

	const [inputReqCancelData, setInputReqCancelData] = useState('')
	const id = props.idProjectDash

	const handleReqCancelData = (e) => {
		e.preventDefault()
		const body = {
			reason: inputReqCancelData,
		}
		console.log(body, 'bodiii')
		dispatch(postReqCancelData(id, body))
	}
	console.log(inputReqCancelData, 'input')
	return (
		<ModalCancel>
			<div className='box-reqcancel'>
				<div className='reqcancel-title'>
					<p>Request Cancellation</p>
					<button className='close-mod' onClick={() => props.setShowCancelModal(false)}>
						<CgClose />
					</button>
				</div>

				<div className='reqcancel-middle'>
					<p className='reqcancel-id'>
						Project id <span>*</span>
					</p>
					<textarea className='box-projectid' placeholder=' #P-0001'></textarea>
				</div>

				<div>
					<p className='reason-cancel'>
						Reason<span>*</span>
					</p>
					<textarea onChange={(e) => setInputReqCancelData(e.target.value)} className='box-reasoncancel' placeholder='e.g Want to change project type'></textarea>
				</div>

				<button
					className='but-cancel'
					onClick={(e) => {
						props.setShowCancelModal(false)
						handleReqCancelData(e)
					}}>
					Submit Request
				</button>
			</div>
		</ModalCancel>
	)
}
