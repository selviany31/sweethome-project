import React from 'react'
import Picture1 from './assets/picture1.png'
import './index.css'
import mission2 from './assets/mission2.png'
import mission3 from './assets/mission3.png'
import mission4 from './assets/mission4.png'
// import background from './assets/background.png'
import idea from './assets/idea.png'
import slider1 from './assets/slider1.png'
import quote from './assets/quote.svg'
import designer from './assets/designer.png'
import Footer from '../../layouts/Footer'
import NavBar from '../../layouts/NavBar'
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IconContext } from "react-icons";
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReviewCard from './ReviewCard'
// import { useDispatch, useSelector } from 'react-redux'
// import { getShowcaseList } from '../../../redux/action/ShowcaseAction'
// import { imageDummy } from '../detailProject/ImageDummy'
// import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const HomePage = () => {
	// const dispatch = useDispatch()
	// const showcaseData = useSelector((state) => state.showcaseReducer.showcase)
	// console.log(showcaseData)

	// console.log(imageDummy)

	// const imgSlide = imageDummy.map((img) => {
	// 	return <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={img} />
	// })

	// useEffect(() => {
	// 	dispatch(getShowcaseList())
	// }, [dispatch])

	return (
		<div className='home'>
			<NavBar />
			<div className='pic-1'>
				<div className='pic-1-white'></div>
				<div className='pic-1-grey'></div>
				<div className='pic-1-text'>
					<h1 className='h1-normal'>
						We help to find
						<br />
						the best solution for your
					</h1>
					<h1 className='h1-bold'>better home living</h1>
					<p>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. Risus et fermentum in risus nibh praesent netus bibendum</p>
				</div>
				<div className='pic-1-light-grey'></div>
				<img src={Picture1} alt='furniture' className='pic-1-img' />
			</div>
			<div className='mission'>
				<div className='mission-1'>
					<h4>What we do</h4>
				</div>
				<div className='mission-2'>
					<img src={mission2} alt='icon' />
					<h5>Plan</h5>
					<p className='m2-p-bold'>Rhoncus sed at nulla odio.</p>
					<p className='m2-p-normal'>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. Risus et fermentum in risus nibh praesent netus bibendum</p>
				</div>
				<div className='mission-3'>
					<img src={mission3} alt='icon' />
					<h5>Collaborate</h5>
					<p className='m3-p-normal'>Rhoncus sed at nulla odio.</p>
				</div>
				<div className='mission-4'>
					<img src={mission4} alt='icon' />
					<h5>Execute</h5>
					<p className='m3-p-normal'>Rhoncus sed at nulla odio.</p>
				</div>
			</div>

			<div className='works'>
				<div className='works-content'>
					<h1>Our Work</h1>
					<p className='works-p-bold'>Apartment Living Room Redesign</p>
					<p className='works-p-normal'>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. Risus et fermentum in risus nibh praesent netus bibendum</p>

					<Link to='/detail' style={{ textDecoration: 'none' }}>
						<p className='works-details'>See Details</p>
					</Link>
				</div>
				<div className='works-slider'>
					<img src={slider1} alt='slider' />
					<img src={slider1} alt='slider' />
					<img src={slider1} alt='slider' />
				</div>
			</div>

			<div className='ideas'>
				<img src={idea} alt='idea' />
				<div className='curated'>
					<p className='curated-p'>Get curated renovation idea for your</p>
					<div className='dropdown'>
						<button className='dropbtn'>Kitchen</button>

						<div className='dropdown-content'>
							<Link to={'/project'}>Living Room</Link>
							<Link to={'/project'}>Dining Room</Link>
							<Link to={'/project'}>Bedroom</Link>
							<Link to={'/project'}>Bathroom</Link>
							<Link to={'/project'}>Study/Office</Link>
							<Link to={'/project'}>Outdoor</Link>
						</div>
					</div>
					<button className='btn-see-all'>See All</button>
				</div>
			</div>
			<div className='info'>
				<div className='reviews'>
					<h4 className='review-h4'>What our Customers Love About Us</h4>
					<div className='hp-review-container'>
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
						<ReviewCard />
					</div>
				</div>
				<div className='designer'>
					<h4 className='designer-h4'>Meet Our Designer</h4>
					<div className='designer-wrapper'>
						<div>
							<img src={designer} alt='designer' className='designer-img' />
							<img src={quote} alt='icon' className='quote-icon' />
						</div>
						<div>
							<h4 className='designer-quote'>“Designing home is like designing future”</h4>
							<p className='designer-p'>
								Odio tortor tincidunt risus aliquet malesuada semper. Vestibulum id faucibus aliquam ut bibendum praesent nibh. Fames sed pulvinar sagittis non leo tortor,
								quis. Volutpat nec diam ac venenatis commodo scelerisque arcu venenatis. Sem euismod urna ac egestas dignissim eros.
							</p>
							<h5 className='designer-name'>Gloria Suherman</h5>
							<p className='designer-title'>Senior Interior Designer</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default HomePage
