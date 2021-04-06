import React, { useEffect, useState } from 'react'
import displayPicture from './displayPicture.png'
import './SideBar.css'
import { RiPieChart2Fill, RiCalendarEventFill, RiSettings4Fill } from 'react-icons/ri'
import { IoCart, IoPerson } from 'react-icons/io5'
import { BsImage } from 'react-icons/bs'
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAdmin } from '../../../../redux/action/Login'

const SideBar = () => {
	// data to display admin profile on sidebar
	const adminData = useSelector((state) => state.loginReducer.data)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDataAdmin())
	}, [dispatch])
	// console.log(adminData)

	// getting the id from url param
	const { tab } = useParams()
	useEffect(() => {
		if (tab === 'overview') {
			setOverview(true)
		} else if (tab === 'appointment') {
			setAppointment(true)
		} else if (tab === 'project') {
			setProject(true)
		} else if (tab === 'showcase') {
			setShowcase(true)
		} else if (tab === 'customer') {
			setCustomers(true)
		} else if (tab === 'setting') {
			setSetting(true)
		}
	}, [tab])

	// tabs
	const [overview, setOverview] = useState(false)
	const handleOverview = () => {
		setOverview(true)
		setAppointment(false)
		setProject(false)
		setShowcase(false)
		setCustomers(false)
		setSetting(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	const [appointment, setAppointment] = useState(false)
	const handleAppointment = () => {
		setAppointment(true)
		setOverview(false)
		setProject(false)
		setShowcase(false)
		setCustomers(false)
		setSetting(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	const [project, setProject] = useState(false)
	const handleProject = () => {
		setProject(true)
		setOverview(false)
		setAppointment(false)
		setShowcase(false)
		setCustomers(false)
		setSetting(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	const [showcase, setShowcase] = useState(false)
	const handleShowcase = () => {
		setShowcase(true)
		setProject(false)
		setOverview(false)
		setAppointment(false)
		setCustomers(false)
		setSetting(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	const [customers, setCustomers] = useState(false)
	const handleCustomers = () => {
		setCustomers(true)
		setProject(false)
		setOverview(false)
		setAppointment(false)
		setShowcase(false)
		setSetting(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	const [setting, setSetting] = useState(false)
	const handleSetting = () => {
		setSetting(!setting)
		setCustomers(false)
		setProject(false)
		setOverview(false)
		setAppointment(false)
		setShowcase(false)
		setContent(false)
		setTimeslot(false)
		setAdmin(false)
	}

	// setting dropdown
	const [content, setContent] = useState(false)
	const handleContent = () => {
		setContent(true)
		setTimeslot(false)
		setAdmin(false)
	}

	const [timeslot, setTimeslot] = useState(false)
	const handleTimeslot = () => {
		setTimeslot(true)
		setContent(false)
		setAdmin(false)
	}

	const [admin, setAdmin] = useState(false)
	const handleAdmin = () => {
		setAdmin(true)
		setTimeslot(false)
		setContent(false)
	}

	return (
		<div className='sidebar'>
			<div className='admin-profile'>
				<img src={displayPicture} alt='profile-pic' className='profile-pic' />
				<div className='name-role'>
					<p className='admin-name'>{adminData?.name}</p>
					<div className='admin-role'>Admin</div>
				</div>
			</div>
			<div className='admin-tabs'>
				<Link to={`/admin/overview`} style={{ textDecoration: 'none', color: '#ffffff' }}>
					<p className={overview ? `adm-tab-active` : `adm-overview`} onClick={handleOverview}>
						<RiPieChart2Fill
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: overview ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Overview
					</p>
				</Link>

				<Link to='/admin/appointment' style={{ textDecoration: 'none', color: '#ffffff' }}>
					<p className={appointment ? `adm-tab-active` : `adm-appointments`} onClick={handleAppointment}>
						<RiCalendarEventFill
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: appointment ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Appointments
					</p>
				</Link>

				<Link to='/admin/project' style={{ textDecoration: 'none', color: '#ffffff' }}>
					<p className={project ? `adm-tab-active` : `adm-projects`} onClick={handleProject}>
						<IoCart
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: project ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Projects
					</p>
				</Link>

				<Link to='/admin/showcase' style={{ textDecoration: 'none', color: '#ffffff' }}>
					<p className={showcase ? `adm-tab-active` : `adm-showcase`} onClick={handleShowcase}>
						<BsImage
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: showcase ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Showcase
					</p>
				</Link>

				<Link to='/admin/customer' style={{ textDecoration: 'none', color: '#ffffff' }}>
					<p className={customers ? `adm-tab-active` : `adm-customers`} onClick={handleCustomers}>
						<IoPerson
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: customers ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Customers
					</p>
				</Link>

				{/* <Link
          to="/admin/setting/content"
          style={{ textDecoration: "none", color: "#ffffff" }}
        > */}
				<div className={setting ? `admin-setting-special` : `adm-setting`}>
					<p className={setting ? `adm-tab-active` : `adm-setting`} onClick={handleSetting}>
						<RiSettings4Fill
							style={{
								fontSize: '16px',
								marginRight: '27px',
								color: setting ? `#f2d555` : `#C4C4C4`,
								verticalAlign: 'middle',
							}}
						/>
						Settings
						{setting ? (
							<VscChevronUp
								style={{
									fontSize: '20px',
									marginLeft: '15px',
									color: setting ? `#f2d555` : `#C4C4C4`,
									verticalAlign: 'middle',
								}}
							/>
						) : (
							<VscChevronDown
								style={{
									fontSize: '20px',
									marginLeft: '15px',
									color: setting ? `#f2d555` : `#C4C4C4`,
									verticalAlign: 'middle',
								}}
							/>
						)}
					</p>
					{setting ? (
						<div className='setting-dropdown'>
							<Link to='/admin/setting' style={{ textDecoration: 'none', color: '#999999' }}>
								<p className={content ? `setting-dropdown-active` : `adm-setting`} onClick={handleContent}>
									Content
								</p>
							</Link>
							<Link to='/admin/setting/timeslot' style={{ textDecoration: 'none', color: '#999999' }}>
								<p className={timeslot ? `setting-dropdown-active` : `adm-setting`} onClick={handleTimeslot}>
									Timeslot
								</p>
							</Link>
							<Link to='/admin/setting/admin-list' style={{ textDecoration: 'none', color: '#999999' }}>
								<p className={admin ? `setting-dropdown-active` : `adm-setting`} onClick={handleAdmin}>
									Admin
								</p>
							</Link>
						</div>
					) : (
						''
					)}
				</div>
				{/* </Link> */}
			</div>
		</div>
	)
}

export default SideBar
