import React from 'react'
import './style/ProjectList.scss'
import { Link } from 'react-router-dom'
import clock from './img/Clock_small.png'
import coin from './img/Coin_small.png'
import search_icon from './img/search.png'
import * as ActionShowcase from '../../../redux/action/ShowcaseAction'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import Spinner from '../../../components/dashboardPage/Spinner'
import NumberFormat from 'react-number-format'
// import DummyImg from './img/logo sweethome 2.jpg'

const ProjectList = ({ value, pageNum }) => {
	let renderImg = 'https://image.freepik.com/free-vector/home-interior-background-theme_23-2148612103.jpg'
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')
	const [checkboxClick, setCheckboxClick] = useState('')
	const [isActive, setIsActive] = useState(true)
	// const [page, setPage] = useState(1)
	console.log(isActive)

	const userData = useSelector((state) => state.loginReducer.data)

	console.log(pageNum)

	const handleLocationClick = () => {
		dispatch(ActionShowcase.getShowcaseByLocation(checkboxClick))
	}

	const handleStyleClick = () => {
		dispatch(ActionShowcase.getShowcaseByStyle(checkboxClick))
	}
	const removeFilter = () => {
		setCheckboxClick('')
		setIsActive(false)
		dispatch(ActionShowcase.getShowcaseList())
	}
	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(ActionShowcase.getShowcaseSearchList(search))
	}

	const getShowcases = useSelector((state) => state.showcaseReducer.showcases)
	const getShowcaseLocations = useSelector((state) => state.showcaseReducer.locations)
	const getShowcaseStyles = useSelector((state) => state.showcaseReducer.styles)

	const handleFavorite = (id) => {
		dispatch(ActionShowcase.postFavorite(id))

		dispatch(ActionShowcase.getShowcaseList())
	}

	const handleDelFavorite = (id) => {
		dispatch(ActionShowcase.deleteFavorite(id)).then(() => dispatch(ActionShowcase.getShowcaseList()))
	}

	console.log(getShowcases.totalPage)

	const fetchingShowcase = () => {
		dispatch(ActionShowcase.getShowcaseSearchList(value))
		dispatch(ActionShowcase.getShowcaseLocationList())
		dispatch(ActionShowcase.getShowcaseStyleList())
	}
	useEffect(() => {
		fetchingShowcase()
		// fetchingShowcaseCategory()
		// eslint-disable-next-line
	}, [dispatch])

	useEffect(() => {
		if (search === '') {
			dispatch(ActionShowcase.getShowcaseList(pageNum))
		}
	}, [search, dispatch, pageNum])

	return (
		<div className='project_list_container'>
			<div className='col-1'>
				<div className='col-1a'>
					{!checkboxClick ? (
						<h3>All Project</h3>
					) : (
						<p
							onClick={() => {
								removeFilter()
							}}>
							Remove Filter{' '}
						</p>
					)}
				</div>
				<div className='col-1b'>
					<form action='' onSubmit={handleSubmit}>
						<input type='seacrh' placeholder='Search...' className='search_bar' onChange={handleChange} />
						<button>
							<img src={search_icon} alt='search_icon' />
						</button>
					</form>
				</div>
			</div>

			{getShowcases.length === 0 ? (
				null || (
					<div className='spinner_project_list'>
						<Spinner />
					</div>
				)
			) : (
				<div className='col-2'>
					{/* CATEGORY FILTER */}
					<div className='col-2a'>
						<div className='col-2a-1'>
							<h3>Location</h3>
							<div>
								{getShowcaseLocations.length === 0
									? null
									: getShowcaseLocations.data.map((location, index) => {
											return (
												<label
													className='checkbox'
													key={index}
													onClick={() => {
														setCheckboxClick(location._id)
														setIsActive(true)
													}}>
													<input type='checkbox' checked={location._id === checkboxClick} onChange={handleLocationClick} />
													<span>{location.name}</span>
												</label>
											)
									  })}
							</div>
						</div>
						<div className='col-2a-2'>
							<h3>Styles</h3>
							{getShowcaseStyles.length === 0
								? null
								: getShowcaseStyles.data.map((style, index) => {
										return (
											<div
												key={index}
												onClick={() => {
													setCheckboxClick(style._id)
													setIsActive(true)
												}}>
												<label className='checkbox'>
													<input type='checkbox' checked={style._id === checkboxClick} onChange={handleStyleClick} />
													<span>{style.name}</span>
												</label>
											</div>
										)
								  })}
						</div>
					</div>
					{/* END CATEGORY FILTER */}

					{/* PROJECT LIST CARD */}
					<div className='col-2b'>
						{getShowcases.length !== 0
							? getShowcases.data.map((showcase) => {
									return (
										<div className='card' key={showcase._id}>
											<img src={!showcase.gallery[0]?.photo ? renderImg : showcase.gallery[0]?.photo} alt='project_img' />
											<div className='gradient_card'>
												<div className='button_fav' style={!localStorage.getItem('tokenUser') ? { display: 'none' } : { display: 'block' }}>
													<button
														onClick={() => {
															handleDelFavorite(showcase._id)
															dispatch(ActionShowcase.getShowcaseList())
														}}
														className='favorite'
														style={showcase.favorites.find((fav) => fav.user === userData._id) ? { display: 'block' } : { display: 'none' }}>
														<MdFavorite size={25} color='#DD5571' />
													</button>
													<button
														onClick={() => handleFavorite(showcase._id)}
														className='favorite'
														style={showcase.favorites.find((fav) => fav.user === userData._id) ? { display: 'none' } : { display: 'block' }}>
														<MdFavoriteBorder size={25} color='#262F56' />
													</button>
												</div>

												<div className='bot_left'>
													<Link to={`/detail/${showcase._id}`}>
														<h3>{showcase.name}</h3>
													</Link>
													<p>{showcase.address}</p>
												</div>
												{showcase.project !== undefined && showcase.project !== null ? (
													<div className='bot_right'>
														<img src={clock} alt='clock' style={{ width: '15px' }} />
														<span>{showcase.project?.totalDuration} Weeks</span>
													</div>
												) : null}
												{showcase.project !== undefined && showcase.project !== null ? (
													<div className='bot_right2'>
														<img src={coin} alt='clock' style={{ width: '15px' }} />
														<span>
															<NumberFormat value={showcase.project?.totalPrice} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} />
														</span>
													</div>
												) : null}
											</div>
										</div>
									)
							  })
							: null}
					</div>
					{/* END PROJECT LIST CARD */}
				</div>
			)}
		</div>
	)
}

export default ProjectList
