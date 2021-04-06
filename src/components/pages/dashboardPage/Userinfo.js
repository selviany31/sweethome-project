import React from 'react'
// import imageUser from '../../../assets/images/Ellipse4.png'
import { UserContainer } from '../../../assets/styles/pages/dashboardPage/Userinfo.styles'
import { Link } from 'react-router-dom'
import { GoPlus } from 'react-icons/go'
import { useSelector } from 'react-redux'
// import './dashboard.css'

export default function Userinfo(props) {
	const dataUser = useSelector((state) => state.loginReducer.data)
	console.log(dataUser)

	return (
		<UserContainer>
			<h1 className='dashboard_title_nic'>Welcome Home!</h1>
			<div className='container'>
				<div className='user-detail'>
					<div className='pict'>
						<img className='pro-pic-nike' src={dataUser.photo} alt='pict' />
					</div>
					<div>
						<h3>
							{dataUser?.firstname} {dataUser?.lastname}
						</h3>
						<p>{dataUser?.email}</p>
						<Link to='' className='link'>
							Settings
						</Link>
					</div>
				</div>
				<div className='cont-left-part'>
					{props.navigasi === 'appointments' && (
						<Link to='/appointment' style={{ textDecoration: 'none' }}>
							<button style={{ cursor: 'pointer' }}>
								<span className='plus'>
									<GoPlus />
								</span>
								Create Appointments
							</button>
						</Link>
					)}
				</div>
			</div>
		</UserContainer>
	)
}
