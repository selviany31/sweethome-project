import React, { useState } from 'react'
import './adminProject.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiSortUp } from 'react-icons/bi'
import { FaFilter } from 'react-icons/fa'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import ProjectCard from '../adminProject/projectCard/projectCard'

export default function AdminProject() {
	// setup pagination
	const [pages, setPages] = useState(1)
	const pagination = (page) => {
		setPages(page)
	}

	// console.log(pages)

	return (
		<div className='adm-project'>
			<div className='project-list-head'>
				<h3>Orders</h3>
				<form action=''>
					<input type='text' placeholder='Search..' className='pl-searchbar' />
				</form>
			</div>
			<div className='project-list'>
				<div className='pl-top'>
					<Link to='/admin/project/new' style={{ marginLeft: '3.5%', marginTop: '2.5%' }}>
						<button className='pl-btn-new'>
							<AiOutlinePlus
								style={{
									verticalAlign: 'middle',
									marginRight: '5%',
									fontSize: '18px',
								}}
							/>{' '}
							Create New
						</button>
					</Link>
					<div className='filter-sort'>
						<p className='fs-sort'>
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
						<p className='fs-filter'>
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
				</div>
				<div className='pl-titles'>
					<p style={{ width: '21rem' }}>Customer</p>
					<p style={{ width: '12.75rem' }}>Package</p>
					<p style={{ width: '9rem' }}>Price</p>
					<p style={{ width: '12rem' }}>Est. Completion Date</p>
					<p>Status</p>
				</div>
				<hr className='pl-hr' />
				<ProjectCard id={pages} />
				<div className='project-pagination'>
					<p className='row-per-page'>Rows per page: 10</p>
					<div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
						<p className='pgn-btn'>
							<VscChevronLeft onClick={() => pagination(pages > 1 ? pages - 1 : 1)} style={{ color: '#9FA2B4', fontSize: '20px' }} />
						</p>
						<p className='pagination-current-page'>Page {pages}</p>
						<p className='pgn-btn'>
							<VscChevronRight onClick={() => pagination(pages + 1)} style={{ color: '#9FA2B4', fontSize: '20px' }} />
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
