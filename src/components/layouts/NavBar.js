import React, { useState } from 'react'
import SweetHomeLogo from './assets/SweetHome.png'
import './NavBar.css'
import Login from './Modal/LogIn'
import Signup from './Modal/SignUp'
import { Link } from 'react-router-dom'
import Hero from './Hero'
// import { useSelector } from 'react-redux'

const NavBar = () => {
	const [scroll, setScroll] = useState(false)

	const changeBackground = () => {
		if (window.scrollY > 100) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	}

	window.addEventListener('scroll', changeBackground)

	//
	// const token = localStorage.getItem('tokenUser')
	// const userData = useSelector((state) => state.loginState.authdata)
	// console.log(userData)
	// console.log(token)

	return (
		<div className={scroll ? 'navbar active' : 'navbar'}>
			<div className='logo-div'>
				<Link to='/'>
					<img src={SweetHomeLogo} alt='SweetHomeLogo' className='navbar-logo' />
				</Link>
			</div>
			<div className='navbar-menu'>
				<h6 className={scroll ? 'col-1 active' : 'nav-col-1'}>Our Services</h6>
				<Link to='/project' style={{ textDecoration: 'none' }}>
					<h6 className={scroll ? 'col-1 active' : 'nav-col-1'}>Showcase</h6>
				</Link>
				{localStorage.getItem('tokenUser') != null ? (
					<Hero />
				) : (
					<div className='log-sign-div'>
						<h6 className={scroll ? 'col-2-border active' : 'col-2-border'}>
							<Login />
						</h6>
						<h6 className='nav-col-2'>
							<Signup />
						</h6>
					</div>
				)}
			</div>
		</div>
	)
}

export default NavBar
