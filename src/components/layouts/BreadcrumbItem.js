import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { Container, BreadcrumbName } from '../../assets/styles/components/layout/Breadcrumbitem.styles'

export default function BreadcrumbItem(props) {
	return !props.to ? (
		<BreadcrumbName className='breadcrumb-name'>{props.name}</BreadcrumbName>
	) : (
		<Container>
			<Link className='link' to={props.to}>
				{props.name}
			</Link>
			<span className='dash-arrow'>
				<HiOutlineChevronRight />
			</span>
		</Container>
	)
}
