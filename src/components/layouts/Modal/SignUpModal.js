import React, { useRef, useState } from 'react'
import background from '../../pages/homePage/assets/background.png'
import './SignUpModal.css'
import { VscClose } from 'react-icons/vsc'
import { FaGoogle } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const SignUpModal = ({ showModal, setShowModal }) => {
	//* ----------CONFIG REGISTER---------
	const [regData, setRegData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	})
	const history = useHistory()
	const handleChangeSignUp = (e) => {
		setRegData({
			...regData,
			[e.target.name]: e.target.value,
		})
		setErrormsg('')
	}

	const [errormsg, setErrormsg] = useState('')
	const handleSubmitSignUp = (e) => {
		e.preventDefault()
		const body = {
			firstname: regData.firstname,
			lastname: regData.lastname,
			email: regData.email,
			password: regData.password,
		}
		axios
			.post('https://sweethome-api-v1.herokuapp.com/api/v1/register', body)
			.then((response) => {
				console.log(`ini signup response`, response)
				if (response.status === 200) {
					window.location.reload(true)
					history.push('/')
				}
			})
			.catch((err) => {
				setErrormsg('Signup failed! Email already taken.')
			})
	}

	// console.log(regData)

	//*-------------END CONFIG REGISTER----------------

	const modalRef = useRef()
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false)
		}
	}
	return (
		<div>
			{showModal ? (
				<div className='signup-background' onClick={closeModal} ref={modalRef}>
					<div className='signup-container'>
						<img src={background} alt='background' className='signup-img' />
						<h4 className='signup-welcome'>Get best offer for your dream home</h4>
						<p className='signup-p'>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. Risus et fermentum in risus nibh praesent netus bibendum</p>

						<div className='signup-content'>
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
							<h4>Sign Up</h4>

							{/* <h5 className='cross'>&#10005;</h5> */}

							<p>
								Already have an account? <span>Login</span>
							</p>

							<form onChange={handleChangeSignUp} onSubmit={handleSubmitSignUp}>
								<label className='signup-fname'>First Name</label>
								<input name='firstname' type='text' placeholder='Justin' className='signup-fname-input' />
								<label className='signup-lname'>Last Name</label>
								<input name='lastname' type='text' placeholder='Junaedi' className='signup-lname-input' />
								<label className='signup-email'>Email</label>
								<input name='email' type='email' placeholder='e.g justinjunaedi@gmail.com' className='signup-email-input' />
								<label className='signup-password'>Password</label>
								<input name='password' type='password' placeholder='&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;' className='signup-password-input' />
								{<p className='signup-error-msg'>{errormsg}</p>}
								<button className='signup-button'>Sign Up</button>
							</form>
							<hr className='signup-line-hr' />
							<div className='google-button'>
								<button className='google-btn'>
									<FaGoogle
										style={{
											margin: 0,
											top: '14.03px',
											position: 'absolute',
											left: '38.17px',
											width: '13.67px',
											height: '13.67px',
											marginRight: '20px',
										}}
									/>
									&nbsp; &nbsp; &nbsp; &nbsp;Google
								</button>
							</div>
							<div className='facebook-button'>
								<button className='facebook-btn'>
									<ImFacebook
										style={{
											margin: 0,
											top: '14.03px',
											position: 'absolute',
											left: '36px',
											width: '13.67px',
											height: '13.67px',
											marginRight: '20px',
										}}
									/>
									&nbsp; &nbsp; &nbsp; &nbsp;Facebook
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	)
}
export default SignUpModal
