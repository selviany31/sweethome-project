import React from 'react'
import './adminShowcase.scss'
import search_icon from '../../projectPage/img/search.png'
import sort_icon from './img/sort_icon.png'
import filter_icon from './img/filter_icon.png'
import points_icon from './img/3point_icon.png'
import arrow_left_icon from './img/arrow - left.png'
import arrow_right_icon from './img/arrow - right.png'
import * as ActionShowcase from '../../../../redux/action/ShowcaseAction'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Spinner from '../../../dashboardPage/Spinner'

const AdminShowcase = () => {
	const dispatch = useDispatch()
	const getShowcasesAdmin = useSelector((state) => state.showcaseReducer.showcasesAdmin)
	const fetchShowcaseAdmin = () => {
		dispatch(ActionShowcase.getShowcaseAdminList())
	}

	useEffect(() => {
		fetchShowcaseAdmin()
		// eslint-disable-next-line
	}, [dispatch])

	return (
		<div className='showcase_background'>
			<div className='showcase_container'>
				<div className='showcase_header'>
					<h3>Show Case</h3>
					<div className='showcase_box_search'>
						<input type='search' className='showcase_search' placeholder='Search..' />
						<img src={search_icon} alt='search_icon' />
					</div>
				</div>

				<div className='showcase_content'>
					<div className='showcase_btn_srt_fltr'>
						<Link to='/admin/showcase/create-showcase'>
							<button className='btn_create_showcase'> + &nbsp; &nbsp; Create New</button>
						</Link>
						<div className='showcase_srt_btn'>
							<img src={sort_icon} alt='' />
							<span>Sort</span>
						</div>
						<div className='showcase_fltr_btn'>
							<img src={filter_icon} alt='' />
							<span>Filter</span>
						</div>
					</div>

					<div className='showcase_title_detail'>
						<span>Name</span>
						<span>Type</span>
						<span>Created</span>
						<span>Showcase</span>
					</div>

					{getShowcasesAdmin.length === 0 ? (
						<div className='spinner-container'>
							<Spinner />
						</div>
					) : (
						getShowcasesAdmin.data.map((showcaseAdmin) => {
							return (
								<div className='showcase_field_detail' key={showcaseAdmin._id}>
									<div>
										<a href='/detail' target='_blank'>
											{showcaseAdmin.name}
										</a>
										<p>Created at {Moment(showcaseAdmin.createdAt).format('DD MMMM YYYY, HH:MM A')}</p>
									</div>
									<div>
										<span>{showcaseAdmin.showcaseType.name}</span>
										{showcaseAdmin.project === undefined ? (
											<>
												<p> </p>
											</>
										) : (
											<>
												<p>{showcaseAdmin.project.ticket}</p>
											</>
										)}
									</div>
									<div>
										{showcaseAdmin.admin === undefined ? <span>unknown</span> : <span>{showcaseAdmin.admin.name}</span>}
										<p>{Moment(showcaseAdmin.createdAt).format('DD MMMM YYYY, HH:MM A')}</p>
									</div>
									<div>
										<input type='checkbox' id={showcaseAdmin._id} />
										<label htmlFor={showcaseAdmin._id}></label>
									</div>
									<div>
										<img src={points_icon} alt='3 points' />
									</div>
								</div>
							)
						})
					)}

					<div className='showcase_pagination'>
						<div>
							<p>Rows per page:</p>
							<span>8</span>
							<p>1-8 of 1240</p>
							<button>
								{' '}
								<img src={arrow_left_icon} alt='arrow_left_icon' />{' '}
							</button>
							<button>
								{' '}
								<img src={arrow_right_icon} alt='arrow_right_icon' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdminShowcase
