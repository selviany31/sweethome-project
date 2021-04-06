import React from 'react'
import AppoinmentItem from './AppoinmentItem'
import { Detail, Container } from '../../assets/styles/components/dashboardPage/AppointmentDetails.styles'

export default function AppointmentDetails(props) {
	//buat ngambil data inspectionArea
	const inspectionArea = props.detail.locations.map((item) => item.name).join()
	console.log(inspectionArea)

	//format separator
	const formatBudget = (budget) => {
		const reverse = budget.toString().split('').reverse().join('')
		let ribuan = reverse.match(/\d{1,3}/g)
		const joinRibuan = ribuan.join(',').split('').reverse().join('')
		return joinRibuan
	}

	return (
		<Container>
			<div className='left'>
				AppointmentDetails
				<Detail>
					<AppoinmentItem title='Building Type' data={props.detail.buildType.name} />
					<AppoinmentItem title='Service Type' data={props.detail.serviceType.name} />
				</Detail>
				<Detail>
					<AppoinmentItem title='Estimated Work Duration' data={`${props.detail.duration} Month`} />
					<AppoinmentItem title='Budget' data={`Rp ${formatBudget(props.detail.budget)}`} />
				</Detail>
				<AppoinmentItem title='Address' data={props.detail.address} />
				<AppoinmentItem title='Inspection Area' data={inspectionArea} />
			</div>

			<div className='right'>
				Note
				<div className='notes'>{props.detail.note}</div>
			</div>
		</Container>
	)
}
