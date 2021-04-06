import React, { useEffect } from 'react'
import './Hero.css'
// import axios from 'axios'
import profPic from '../layouts/assets/displayPicture.png'
import { useHistory, Link } from 'react-router-dom'
import { getDataUser, getDataAdmin } from '../../redux/action/Login'
import { useSelector, useDispatch } from 'react-redux'

const Hero = () => {
	const dispatch = useDispatch()
	// const [data, setData] = useState([])

	const dataUser = useSelector((state) => state.loginReducer.data)
	useEffect(() => {
		// const getData = async () => {
		// 	await axios
		// 		.get(`https://sweethome-api-v1.herokuapp.com/api/v1/profile`, {
		// 			headers: {
		// 				Authorization: myToken,
		// 			},
		// 		})
		// 		.then((response) => {
		// 			// console.log(`response hero`, response)
		// 			setData(response.data.data)
		// 			// dispatch({ type: LOG_IN, payload: response })
		// 			// window.location.reload(true)
		// 		})
		// 		.catch((err) => {
		// 			console.log(err.message)
		// 		})
		// }
		// get profile user & admin
		localStorage.getItem('roleUser') === 'USER' ? dispatch(getDataUser()) : dispatch(getDataAdmin())
	}, [dispatch])

	console.log(dataUser)

	const history = useHistory()
	const handleSignOut = () => {
		localStorage.clear()
		history.push('/')
		// window.location.reload(true)
	}

	const roleUser = localStorage.getItem('roleUser')
	// console.log(roleUser)

	// console.log(`local store`, localStorage.getItem('tokenUser'))

	// const data = useSelector((state) => state.loginReducer.data).data.data
	// console.log(data)

	const profileImg = dataUser?.photo
	console.log(profileImg)

	return (
		<div className='hero-logged-in'>
			<li className='hero-dropdown'>
				<div className='hero-profile-container'>
					<img src={!profileImg ? profPic : profileImg} className='img-profile-hero' alt='' />

					<h2 className='hero-dropbtn'>My Account</h2>
				</div>
				<div className='hero-dropdown-content'>
					{roleUser === 'USER' ? (
						<Link to='/dashboard' style={{ textDecoration: 'none' }}>
							<p>Profile</p>
						</Link>
					) : null}
					{roleUser === 'ADMIN' ? (
						<Link to='/admin/overview' style={{ textDecoration: 'none' }}>
							<p>Admin</p>
						</Link>
					) : null}
					<p>Setting</p>

					<p onClick={handleSignOut}>Log Out</p>
				</div>
			</li>
		</div>
	)
}

export default Hero
