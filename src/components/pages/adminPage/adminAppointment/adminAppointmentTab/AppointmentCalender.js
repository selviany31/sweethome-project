import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAdminAppointmentCalender } from '../../../../../redux/action/AdminAppointment'
import { Inject, ScheduleComponent, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'
import moment from 'moment'

export default function AppointmentCalender() {
	const dispatch = useDispatch()

	const calenderData = useSelector((state) => state.adminAppointment.adminAppointmentCalender)

	useEffect(() => {
		dispatch(getAdminAppointmentCalender())
	}, [dispatch])

	const handleFormatTime = (format) => {
		return parseInt(format.split(':')[0]) < 12 && parseInt(format.split(':')[0]) > 6 ? 'AM' : 'PM'
	}

	const mapCalender = calenderData.map((item) => {
		return {
			Subject: `${item.user.firstname} ${item.user.lastname}`,
			StartTime: new Date(`${moment(item.date).format('YYYY-MM-DD')}, ${item.timeslot?.start} ${handleFormatTime(item.timeslot?.start)}`),
			EndTime: new Date(`${moment(item.date).format('YYYY-MM-DD')}, ${item.timeslot?.end} ${handleFormatTime(item.timeslot?.end)}`),
		}
	})

	return (
		<div className='adm-appointment-calender'>
			<ScheduleComponent height='700px' eventSettings={{ dataSource: mapCalender }}>
				<ViewsDirective>
					<ViewDirective option='Month' />
				</ViewsDirective>
				<Inject services={[Month]} />
			</ScheduleComponent>
		</div>
	)
}
