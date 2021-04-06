import './style.css'
import { Line } from 'react-chartjs-2'
import SweetHomeLogo from '../../../layouts/assets/SweetHome.png'
import { useHistory, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getOverview from '../../../../redux/action/OverviewAction'
import Spinner from '../../../dashboardPage/Spinner'
import moment from 'moment'

const AdminOverview = () => {
	const data = useSelector((state) => state.getOverviewDataReducer.overviewData)
	const dispatch = useDispatch()

	const today = moment().format('DD MMMM YYYY')
	const tomorrow = moment().add(1, 'days').format('DD MMMM YYYY')
	const afterTomorrow = moment().add(2, 'days').format('DD MMMM YYYY')

	const history = useHistory()

	const dataAppointment = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	const dataProject = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

	data.thisYearAppointment?.map((item) => (dataAppointment[item._id - 1] = item.count))
	data.thisYearProject?.map((item) => (dataProject[item._id - 1] = item.count))

	const handleSignOut = () => {
		localStorage.clear()
		history.push('/')
	}
	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'AM' : 'PM'
	}

	useEffect(() => {
		dispatch(getOverview) // eslint-disable-next-line
	}, [])

	return (
		<div className='overview-container'>
			<div className='admin-navbar'>
				<Link to='/'>
					<img src={SweetHomeLogo} alt='SweetHomeLogo' className='navbar-logo' />
				</Link>
				<button className='col-2-border' onClick={handleSignOut}>
					Logout
				</button>
			</div>

			{data.length === 0 ? (
				null || (
					<div className='spinner-container'>
						<Spinner />
					</div>
				)
			) : (
				<div>
					<div className='upcoming-appointment-container'>
						<h2 className='overview-title'>Upcoming Appointment</h2>
						<div className='upcoming-appointment-date'>
							<div className='upcoming-appointment-date-1'>
								<h3 className='upcoming-appointment-date-todaytitle'>TODAY - {today} </h3>
								{data.today?.length === 0 ? (
									<h4>No Appointment For Today</h4>
								) : (
									data.today?.map((item, index) => {
										return (
											<div key={index} className='content-overview-adm'>
												<div style={{ display: 'flex' }}>
													<p>
														{item.timeslot?.start}
														{handleFormatTime(item.timeslot?.start)} - {item.timeslot?.end}
														{handleFormatTime(item.timeslot?.end)}
													</p>{' '}
													<span>
														{item.user?.firstname} {item.user?.lastname}
													</span>
												</div>
												<p className='overview-project'>
													{item.serviceType?.name} | {item.locations[0]?.name}
												</p>
												<hr />
											</div>
										)
									})
								)}
							</div>
							<div className='upcoming-appointment-date-2'>
								<h3 className='upcoming-appointment-date-title'>{tomorrow}</h3>
								{data.tommorow?.length === 0 ? (
									<h4>No Appointment For Today</h4>
								) : (
									data.tommorow?.map((item, index) => {
										return (
											<div key={index} className='content-overview-adm'>
												<div style={{ display: 'flex' }}>
													<p>
														{item.timeslot?.start}
														{handleFormatTime(item.timeslot?.start)} - {item.timeslot?.end}
														{handleFormatTime(item.timeslot?.end)}&nbsp;
													</p>{' '}
													<span>
														{item.user?.firstname} {item.user?.lastname}
													</span>
												</div>
												<p className='overview-project'>
													{item.serviceType?.name} | {item.locations[0]?.name}
												</p>
												<hr />
											</div>
										)
									})
								)}
							</div>
							<div className='upcoming-appointment-date-3'>
								<h3 className='upcoming-appointment-date-title'>{afterTomorrow}</h3>
								{data.theDayAfterTommorow?.length === 0 ? (
									<h4>No Appointment For Today</h4>
								) : (
									data.theDayAfterTommorow?.map((item, index) => {
										return (
											<div key={index} className='content-overview-adm'>
												<div style={{ display: 'flex' }}>
													<p>
														{item.timeslot?.start}
														{handleFormatTime(item.timeslot?.start)} - {item.timeslot?.end}
														{handleFormatTime(item.timeslot?.end)}
													</p>{' '}
													<span>
														{item.user?.firstname} {item.user?.lastname}
													</span>
												</div>
												<p className='overview-project'>
													{item.serviceType?.name} | {item.locations[0]?.name}
												</p>
												<hr />
											</div>
										)
									})
								)}
							</div>
						</div>
					</div>
					<div className='chart-oveview-container'>
						<h2 className='overview-title'>This Years’s trends</h2>
						<div className='chart-overview-container'>
							<div className='chart-data'>
								<Line
									data={{
										labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
										datasets: [
											{
												label: 'Appointment',
												data: dataAppointment,
												borderColor: ['rgba(33, 68, 87, 1)'],
												fill: [false],
												pointHoverBackgroundColor: ['rgba(66, 192, 215, 1)'],
											},
											{
												label: 'Order',
												data: dataProject,
												borderColor: ['rgba(242, 213, 85, 1)'],
												fill: [false],
												pointHoverBackgroundColor: ['rgba(66, 192, 215, 1)'],
											},
										],
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default AdminOverview
