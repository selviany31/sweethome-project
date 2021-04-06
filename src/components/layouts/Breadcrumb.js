import React from 'react'
import { CgHome } from 'react-icons/cg'
import { Container } from '../../assets/styles/components/layout/Breadcrumb.styles'

export default function Breadcrumb(props) {
	return (
		<Container className='breadcrumb'>
			<span className='logo'>
				<CgHome size={20} style={{ color: '#828282', marginRight: '10px' }} link='true' to='/' />
			</span>
			{props.children}
		</Container>
	)
}
