import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../dashboardPage/Card'
// import { getAppointmentData } from '../../../redux/action/DashboardAction'
import Spinner from '../../../components/dashboardPage/Spinner'

export default function Appointments() {
	// const dispatch = useDispatch()
	const { appointmentData } = useSelector((state) => state.dashboard)

	console.log(appointmentData, 'data')
	// useEffect(() => {
	// 	dispatch(getAppointmentData())
	// }, [dispatch])
	return (
		<div>
			{appointmentData === null && <Spinner />}
			{appointmentData && appointmentData.length === 0 && <p>Data Not Available</p>}
			{appointmentData && appointmentData.length !== 0 && appointmentData.map((item) => <Card key={item._id} data={item} />)}
		</div>
	)
}
