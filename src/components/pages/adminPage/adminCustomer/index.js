import React from 'react'
import './adminCustomer.css'
import { VscChevronRight } from 'react-icons/vsc'
import { BiSortUp } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import CardCustomer from './CardCustomer'

const AdminCustomer = () => {
	return (
		<div className='adm-cust-list'>
			<div className='adm-cust-head'>
				<h3>Customers</h3>
				<p className='adm-new-breadcrumb'>
					<a href='/' style={{ textDecoration: 'none', color: '#828282' }}>
						Home
					</a>{' '}
					<VscChevronRight
						style={{
							verticalAlign: 'middle',
							marginRight: '0.5%',
							fontSize: '18px',
							color: '#828282',
						}}
					/>
					<span style={{ color: '#214457', fontWeight: 'bold' }}>Customers</span>
				</p>
			</div>
			<div className='cust-list-full'>
				<div className='cust-filter-sort'>
					<p className='fs-sort-cust'>
						<BiSortUp
							style={{
								verticalAlign: 'middle',
								marginRight: '15%',
								fontSize: '18px',
								color: '#C5C7CD',
							}}
						/>
						Sort
					</p>
					<p className='fs-filter-cust'>
						<FaFilter
							style={{
								verticalAlign: 'middle',
								marginRight: '15%',
								fontSize: '14px',
								color: '#C5C7CD',
							}}
						/>
						Filter
					</p>
				</div>
				<div className='cl-titles'>
					<p style={{ paddingRight: '60%' }}>Customer</p>
					<p>Last Activity</p>
				</div>
				<hr className='pl-hr' />
				<CardCustomer />
			</div>
		</div>
	)
}

export default AdminCustomer