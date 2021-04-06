import React, { useState, useEffect } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaFileAlt } from 'react-icons/fa'
import { ModalReceipt } from '../../../assets/styles/pages/dashboardPage/UploadReceipt.styles'
import { postReceiptData, paymentProject } from '../../../redux/action/DashboardAction'
import { useDispatch, useSelector } from 'react-redux'

export default function UploadReceipt(props) {
	const dispatch = useDispatch()
	const [selectedFile, setSelectedFile] = useState(null)
	const [imageURL, setImageURL] = useState(null)
	const { receiptData, submitPaymentData } = useSelector((state) => state.dashboard)
	const [inputNote, setInputNote] = useState('')

	// console.log(receiptData, 'receipt')
	console.log(submitPaymentData && submitPaymentData, 'pay')

	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0])
		setImageURL(URL.createObjectURL(e.target.files[0]))
		console.log(e.target.files, 'target')
	}
	// console.log(inputNote, 'input')

	const id = props.idProjectDash
	const fileUploadHandler = (e) => {
		let formData = new FormData()
		formData.append('receipt', selectedFile)
		dispatch(postReceiptData(id, formData))
	}

	const submitHandler = () => {
		const body = {
			receipt: receiptData,
			note: inputNote,
		}
		dispatch(paymentProject(id, body))
		props.setShowModal(false)
	}

	useEffect(() => {
		fileUploadHandler()
		// eslint-disable-next-line
	}, [selectedFile !== null])

	return (
		<ModalReceipt>
			<div className='box-receipt'>
				<div className='receipt-title'>
					<p>Payment Confirmation</p>
					<button className='close-mod' onClick={() => props.setShowModal(false)}>
						<CgClose />
					</button>
				</div>
				<div className='upload-file'>
					<input type='file' id='upload-nike' hidden accept='.jpeg, .png, .jpg' onChange={(e) => fileSelectedHandler(e)} name='file'></input>

					<label className='upload-nike' htmlFor='upload-nike'>
						{imageURL !== null ? (
							<img src={imageURL} alt='receipt' className='image-receipt' />
						) : (
							<>
								<div className='logo-file'>
									<FaFileAlt />
								</div>
								<h3 className='detail-up'>Upload Receipt</h3>
							</>
						)}
					</label>
				</div>

				<div>
					<p className='modal-note'>
						Note<span>*</span>
					</p>
					<div className='add-comment'>
						<textarea onChange={(e) => setInputNote(e.target.value)} placeholder='Write your comment here!'></textarea>
					</div>
				</div>

				<button className='sub-receipt' onClick={submitHandler}>
					Submit Receipt
				</button>
			</div>
		</ModalReceipt>
	)
}
