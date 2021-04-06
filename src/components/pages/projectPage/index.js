import { useState } from 'react'
import './style/project.scss'
// import CardProject from './CardProject'
// import FilterProject from './FilterProject'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import ProjectList from './ProjectList'
import { getShowcaseList } from '../../../redux/action/ShowcaseAction'
import { useSelector, useDispatch } from 'react-redux'
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

const ProjectPage = () => {
	const dispatch = useDispatch()
	const getShowcases = useSelector((state) => state.showcaseReducer.showcases)

	console.log(getShowcases)
	const [activeNum, setActiveNum] = useState('')
	const [pages, setPages] = useState(1)
	const pagination = (page) => {
		setPages(page)
	}
	console.log(activeNum, getShowcases.activePage)

	const items = []

	for (let i = 1; i <= getShowcases.totalPage; i++) {
		items.push(
			<button
				onClick={() => {
					setActiveNum(i)
					dispatch(getShowcaseList(i))
				}}
				className='pagination'>
				{i}
			</button>
		)
	}

	return (
		<div>
			<NavBar />
			<div className='container'>
				<div className='title'>
					<div>
						<h1>Nisi, pellentesque ullamcorper enim libero, fusce sit nulla maecenas.</h1>{' '}
					</div>
					<div>
						<h3> Nisi, pellentesque ullamcorper enim libero, fusce sit nulla maecenas.</h3>
					</div>
				</div>

				{/* <div className='content_project'>
					<FilterProject />
					<CardProject />
				</div> */}

				<div>
					<ProjectList pageNum={pages} />
				</div>

				<div className='box_pagination'>
					{/* <button className='prev_next'>&lt;</button>
					<button className='pagination'>1</button>
					<button className='pagination'>2</button>
					<button className='pagination'>3</button>
					<button className='pagination'>4</button>
					<button className='pagination'>5</button>
					<button className='prev_next'>&gt;</button>
					<h3> </h3> */}
					<button className='pgn-btn'>
						<VscChevronLeft onClick={() => pagination(pages > 1 ? pages - 1 : 1)} style={{ color: '#000000', fontSize: '20px' }} />
					</button>
					{items}
					<button className='pgn-btn'>
						<VscChevronRight onClick={() => pagination(pages + 1)} style={{ color: '#000000', fontSize: '20px' }} />
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProjectPage
