import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProject from '../../dashboardPage/CardProject'
import { getProjectData } from '../../../redux/action/DashboardAction'
import Spinner from '../../../components/dashboardPage/Spinner'

export default function Projects(props) {
	const dispatch = useDispatch()
	const { projectData, reqCancelData } = useSelector((state) => state.dashboard)

	console.log(projectData, 'data')

	useEffect(() => {
		dispatch(getProjectData())
	}, [dispatch, reqCancelData])

	console.log(reqCancelData, 'req')

	return (
		<div>
			{projectData === null && <Spinner />}
			{projectData && projectData.length === 0 && <p>Data Not Available</p>}
			{projectData &&
				projectData.length !== 0 &&
				projectData.map((item) => (
					<CardProject key={item._id} data={item} setShowModal={props.setShowModal} setShowCancelModal={props.setShowCancelModal} setIdProjectDash={props.setIdProjectDash} />
				))}
		</div>
	)
}
