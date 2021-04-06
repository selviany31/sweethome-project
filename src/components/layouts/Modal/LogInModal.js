import React, { useRef, useState } from 'react'
import background from '../../pages/homePage/assets/background.png'
import './LogInModal.css'
import { VscClose } from 'react-icons/vsc'
import { FaGoogle } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const LogInModal = ({ showModal, setShowModal }) => {
	//* --------START LOGIN SETUP----------
	const [logData, setLogData] = useState({
		email: '',
		password: '',
	})

	const history = useHistory()
	const [errorMsg, setErrorMsg] = useState('')

	const handleChangeLogin = (e) => {
		setLogData({
			...logData,
			[e.target.name]: e.target.value,
		})
		setErrorMsg('')
	}

	const handleLogin = (e) => {
		e.preventDefault()
		const body = {
			email: logData.email,
			password: logData.password,
		}
		const postLogin = async () => {
			await axios
				.post('https://sweethome-api-v1.herokuapp.com/api/v1/login', body)
				.then((response) => {
					localStorage.setItem('tokenUser', response.data.data.token)
					localStorage.setItem('roleUser', response.data.data.role)
					history.push('/')
				})
				.catch((error) => {
					console.log(error.message)
					setErrorMsg('Invalid email or password.')
				})
		}
		postLogin()
	}

	//* ---------END LOGIN SETUP-----------

	//* ---------START VALIDATION---------

	//* ---------END VALIDATION---------

	const modalRef = useRef()
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false)
		}
	}
	return (
		<div>
			{showModal ? (
				<div className='modal-background' onClick={closeModal} ref={modalRef}>
					<div className='modal-container'>
						<img src={background} alt='background' className='modal-img' />
						<h4 className='login-welcome'>Welcome Back!</h4>
						<p className='login-p'>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. Risus et fermentum in risus nibh praesent netus bibendum</p>

						<div className='modal-content'>
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
							<h4>Login</h4>

							<p>
								Don’t have an account? <span>Signup</span>
							</p>
							<form onChange={handleChangeLogin} onSubmit={handleLogin}>
								<label className='modal-email'>Email</label>
								<input name='email' type='email' placeholder='e.g justinjunaedi@gmail.com' className='email-input' />
								<label className='modal-password'>Password</label>
								<input name='password' type='password' placeholder='&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;' className='password-input' />
								{<p className='error-msg-login'>{errorMsg}</p>}
								<button className='login-button' type='submit'>
									Login
								</button>
							</form>
							<hr className='line-hr' />
							<div className='google-button'>
								<Link to={{ pathname: 'https://sweethome-api-v1.herokuapp.com/api/v1/google' }} target='_blank'>
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
								</Link>
							</div>
							<div className='facebook-button'>
								<Link to={{ pathname: 'https://sweethome-api-v1.herokuapp.com/api/v1/facebook' }} target='_blank'>
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
								</Link>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default LogInModal
