import React, { useRef, useState } from 'react'
import './AdminUploadReceipt.css'
import { VscClose } from 'react-icons/vsc'
import { postReceiptUpload, putProjectStatus } from '../../../../../redux/action/AdminProjectAction'
import { useDispatch } from 'react-redux'
import { FaFileAlt, FaCheckCircle } from 'react-icons/fa'
import { ImFilesEmpty } from 'react-icons/im'
import { useHistory, useParams } from 'react-router-dom'

export default function UploadReceipt({ showModal, setShowModal }) {
	const modalRef = useRef()
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false)
		}
	}

	// setup file upload
	const history = useHistory()
	const { id } = useParams()
	const dispatch = useDispatch()

	const [selectedFile, setSelectedFile] = useState(null)
	const [imageURL, setImageURL] = useState(null)

	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0])
		setImageURL(URL.createObjectURL(e.target.files[0]))
	}

	const fileUploadHandler = () => {
		let formData = new FormData()
		formData.append('receipt', selectedFile)
		dispatch(postReceiptUpload(id, formData))
	}

	const handleChangeStatus = (value) => {
		const body = {
			status: value,
		}
		dispatch(putProjectStatus(id, body))
	}

	console.log(`selectedFile`, selectedFile)

	return (
		<div>
			{showModal ? (
				<div className='modal-background' onClick={closeModal} ref={modalRef}>
					<div className='payment-modal-container'>
						<p className='pmt-confirm-text'>Payment Confirmation</p>
						<VscClose
							style={{
								cursor: 'pointer',
								position: 'absolute',
								top: '20px',
								right: '20px',
								width: '32px',
								height: '32px',
								padding: 0,
								zIndex: 10,
								color: '#373737',
							}}
							onClick={() => setShowModal((prev) => !prev)}
						/>

						<div className='receipt-upload-file'>
							<input type='file' id='upload' hidden onChange={fileSelectedHandler} />
							<label className='custom_upload_file' htmlFor='upload'>
								{!imageURL ? (
									<FaFileAlt style={{ position: 'absolute', fontSize: '24px', left: '283px', top: '29px' }} />
								) : (
									<FaCheckCircle style={{ position: 'absolute', fontSize: '24px', left: '283px', top: '29px' }} />
								)}
								{!imageURL ? <p>Upload Receipt</p> : <p>Receipt Uploaded!</p>}
							</label>
						</div>

						{imageURL ? (
							<div className='pmt-preview-container'>
								<div className='pmt-receipt-preview-empty'>
									<img src={imageURL} alt='' />
								</div>
							</div>
						) : (
							<div className='pmt-preview-container'>
								<div className='pmt-receipt-preview'>
									<ImFilesEmpty style={{ position: 'absolute', fontSize: '28px', top: '50px' }} />
									<p>No file selected</p>
								</div>
							</div>
						)}

						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<button
								className='pmt-submit-receipt'
								value='On Going'
								disabled={!imageURL}
								onClick={() => {
									fileUploadHandler()
									handleChangeStatus('On Going')
									history.push('/admin/project')
								}}>
								Submit Receipt
							</button>
						</div>
					</div>
				</div>
			) : null}
		</div>
	)
}
