import React from 'react'
import { useSelector } from 'react-redux'
import ProjectItem from './ProjectItem'
import { ProjectContainer } from '../../assets/styles/components/dashboardPage/ProjectDetails.styles'
import { BiErrorCircle } from 'react-icons/bi'
import TableProject from './TableProject'
import moment from 'moment'

export default function ProjectDetails(props) {
	//ngambil data dari redux, get appointment data
	const { appointmentData } = useSelector((state) => state.dashboard)
	console.log(appointmentData, 'tes')

	// console.log(props.details, 'details')
	//buat ngambil id appointment
	const appointmentId = props.details && props.details.appointment
	// console.log(appointmentId)

	//filter data yg sama berdasarkan id project dan appointment yg sama
	const filterData = appointmentData && appointmentData.filter((item) => item._id === appointmentId)[0]
	//console.log(filterData, 'filter')

	return (
		<ProjectContainer>
			<div className='pro-top'>
				<div className='i-box'>
					<span className='i-logo'>
						<BiErrorCircle />
					</span>
					<span className='i-note'>Transfer to Bank BI: 000202110 (sweethome) and upload your payment receipt below.</span>
				</div>
				<div className='nike-top-middle'>
					<div className='nike-pro-left'>
						<div className='pro-detail'>
							<ProjectItem title='Project ID' detail={props.details.ticket} />
							<ProjectItem title='Building Type' detail={filterData && filterData.buildType.name} />
							<div>
								<ProjectItem title='Related Appoinment' detail={filterData && filterData.ticket} />
								<div className='pro-date'>
									{moment(filterData && filterData.date).format('DD MMMM YYYY')} | {filterData && filterData.timeslot.start} am - {filterData && filterData.timeslot.end}{' '}
									pm
								</div>
							</div>
						</div>
						<div>
							<ProjectItem title='Address' detail='Palm Beach, Pakuwon City, Surabaya' />
						</div>
					</div>
					<div className='nike-pro-right'>
						<button
							className='upload'
							onClick={() => {
								props.setShowModal(true)
								props.setIdProjectDash(props.details._id)
							}}>
							Upload Receipt
						</button>

						<span
							className='req'
							onClick={() => {
								props.setShowCancelModal(true)
								props.setIdProjectDash(props.details._id)
							}}>
							Request cancellation
						</span>
					</div>
				</div>
			</div>
			<TableProject spesific={props.details} />
		</ProjectContainer>
	)
}
