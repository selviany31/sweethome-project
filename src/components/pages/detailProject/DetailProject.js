import './DetailProject.scss'
import { useState, useEffect } from 'react'
import Rectangle from '../../assets/images/Rectangle.png'
import Modal from 'react-modal'
import ImageGallery from './ImageGallery'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import { getShowcaseDetail } from '../../../redux/action/ShowcaseAction'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/dashboardPage/Spinner'
import Breadcrumb from '../../../components/layouts/Breadcrumb'
import BreadcrumbItem from '../../../components/layouts/BreadcrumbItem'
import NumberFormat from 'react-number-format'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DetailProject = ({ match }) => {
	const dispatch = useDispatch()

	let renderImg = 'https://image.freepik.com/free-vector/home-interior-background-theme_23-2148612103.jpg'

	const [modalIsOpen, setIsOpen] = useState(false)
	const [viewImage, setViewImage] = useState('')

	const showcaseDetail = useSelector((state) => state.showcaseReducer.showcaseDetail)
	const userData = useSelector((state) => state.loginReducer.data)

	const imageViewer = () => {
		if (modalIsOpen === false) {
			setViewImage('View All Images')
		} else if (modalIsOpen === true) {
			setViewImage(' ')
		}
	}

	useEffect(() => {
		imageViewer()
		dispatch(getShowcaseDetail(match.params.id))
		// eslint-disable-next-line
	}, [dispatch, modalIsOpen])

	return showcaseDetail === 0 ? (
		null || (
			<div className='spinner-container'>
				<Spinner />
			</div>
		)
	) : (
		<div>
			<NavBar />
			<Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} shouldCloseOnOverlayClick={false} className='gallery-modal' overlayClassName='gallery-modal-overlay'>
				<div>
					<ImageGallery setIsOpen={setIsOpen} />
				</div>
			</Modal>
			<div className='detail-project-container'>
				<Breadcrumb>
					<BreadcrumbItem name='Home' to='/' />
					<BreadcrumbItem name='Showcase' to='/project' />
					<BreadcrumbItem name={showcaseDetail.project?.appointment.buildType.name} />
				</Breadcrumb>

				<div className='detail-project-title'>
					<div className='detail-project-title-1'>
						<h1>{showcaseDetail?.name}</h1>
						<h3>{showcaseDetail?.address}</h3>
					</div>
					<div className='detail-project-title-2' style={!localStorage.getItem('tokenUser') ? { display: 'none' } : { display: 'flex' }}>
						<button className='favorite'>
							{showcaseDetail.favorites?.find((fav) => fav.user === userData._id) ? (
								<MdFavorite size={20} color='#DD5571' />
							) : (
								<MdFavoriteBorder size={20} color='#262F56' />
							)}
						</button>
						<p style={showcaseDetail.favorites?.find((fav) => fav.user === userData._id) ? { display: 'none' } : { display: 'block' }}>Add to favourite</p>
					</div>
				</div>
				{showcaseDetail.length === 0 ? (
					null || (
						<div className='spinner-container' style={{ height: '100vh', width: '100vw', left: '0' }}>
							<Spinner />
						</div>
					)
				) : (
					<div className='detail-project-content-container'>
						<div className='image-area'>
							<div className='main-image' onClick={() => setIsOpen(true)}>
								<img src={!showcaseDetail.gallery[0]?.photo ? renderImg : showcaseDetail.gallery[0].photo} alt='main img' />
							</div>
							<div className='small-image' onClick={() => setIsOpen(true)}>
								<div className='image1'>
									<img src={!showcaseDetail.gallery[1]?.photo ? renderImg : showcaseDetail.gallery[1].photo} alt='img1' />
								</div>
								<div className='image2' onClick={() => setIsOpen(true)}>
									<img src={!showcaseDetail.gallery[2]?.photo ? renderImg : showcaseDetail.gallery[2].photo} alt='img2' />
								</div>
								<div className='all-image'>
									<img src={!showcaseDetail.gallery[3]?.photo ? renderImg : showcaseDetail.gallery[3].photo} alt='all-img' />
									<div className='all-image-layer1'></div>
									<h3 onClick={() => setIsOpen(true)}>{viewImage}</h3>
								</div>
							</div>
						</div>

						<div className='description-area'>
							<div className='description-project'>
								<div>
									<div>
										<h4>Property Type</h4>
										<p>{showcaseDetail.project?.appointment.buildType.name}</p>
									</div>
									<div>
										<h4>Area Size</h4>
										<p>
											{showcaseDetail.project?.totalArea}m<sup>2</sup>
										</p>
									</div>
								</div>
								<div>
									<div>
										<h4>Cost</h4>
										<p>
											<NumberFormat value={showcaseDetail.project?.appointment.budget} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
										</p>
									</div>
									<div>
										<h4>Renovation Duration</h4>
										<p>{showcaseDetail.project?.totalDuration} Weeks</p>
									</div>
								</div>
								<div>
									<h4>Style</h4>
									{!showcaseDetail.styles
										? null
										: showcaseDetail.styles?.map((item, index) => {
												return <span key={index}>-{item.name} </span>
										  })}
								</div>
							</div>
							<div className='spesification-project'>
								<div>
									<h4>Work Included</h4>
								</div>
								<div className='spesification-project-item'>
									{!showcaseDetail.projectTypes === 0
										? null
										: showcaseDetail.projectTypes?.map((type, index) => {
												return <li key={index}>{type.name}</li>
										  })}
								</div>
							</div>
							<div className='quote-container'>
								<img src={Rectangle} alt='button' />
								<h4>Let our professional designer visualize your dream house</h4>
								<button>Get Free Quotes</button>
							</div>
						</div>
					</div>
				)}
			</div>

			<Footer />
		</div>
	)
}

export default DetailProject
