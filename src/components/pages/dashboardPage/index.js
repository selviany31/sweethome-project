//untuk cek render dashboard page
//localhost:3000/dashboard

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Breadcrumb from '../../layouts/Breadcrumb'
import BreadcrumbItem from '../../layouts/BreadcrumbItem'
import Appointments from './Appointments.js'
import Projects from './Projects'
import Favourites from './Favourites'
import Userinfo from './Userinfo'
import { DashboardContainer } from '../../../assets/styles/pages/dashboardPage/index.styles'
import Tab from '../../../components/dashboardPage/Tab'
import './dashboard.css'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import UploadReceipt from '../dashboardPage/UploadReceipt'
import RequestCancel from '../dashboardPage/RequestCancel'
import { getAppointmentData } from '../../../redux/action/DashboardAction'

const DashboardPage = () => {
	//pengaturan navigasi dashboard
	const [navigation, setNavigation] = useState('appointments')
	//pengaturan modal upload receipt
	const [showModal, setShowModal] = useState(false)
	//pengaturan modal upload req cancel
	const [showCancelModal, setShowCancelModal] = useState(false)
	//cari id project buat ngambil data di appointment d taro d card project
	const [idProjectDash, setIdProjectDash] = useState('')

	// console.log(idProjectDash, 'id')
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAppointmentData())
	}, [dispatch])
	return (
		<>
			{showModal && <UploadReceipt setShowModal={setShowModal} idProjectDash={idProjectDash} />}
			{showCancelModal && <RequestCancel setShowCancelModal={setShowCancelModal} idProjectDash={idProjectDash} />}
			<NavBar />
			<DashboardContainer className='dashboard'>
				<Breadcrumb>
					<BreadcrumbItem name='Home' to='/' />
					<BreadcrumbItem name='Dashboard' />
				</Breadcrumb>
				<Userinfo navigasi={navigation} />
				<Tab setNavigation={setNavigation} navigation={navigation} />
				{navigation === 'appointments' && <Appointments />}
				{navigation === 'projects' && <Projects setShowModal={setShowModal} setShowCancelModal={setShowCancelModal} setIdProjectDash={setIdProjectDash} />}
				{navigation === 'favourites' && <Favourites />}
			</DashboardContainer>
			<Footer />
		</>
	)
}

export default DashboardPage
