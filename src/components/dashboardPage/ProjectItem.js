import React from 'react'
import { ProjectContainer } from '../../assets/styles/components/dashboardPage/ProjectItem.styles'

export default function ProjectItem(props) {
	return (
		<ProjectContainer>
			<div className='item-title'>{props.title}</div>
			<div className='item-detail'>{props.detail}</div>
		</ProjectContainer>
	)
}
