import React from 'react'
import { FavContainer } from '../../assets/styles/components/dashboardPage/FavouriteCard.styles'
// import Image from '../pages/projectPage/img/img_card_project.jpg'
import { IoTime } from 'react-icons/io5'
import { AiFillDollarCircle } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function FavouriteCard(props) {
	return (
		<FavContainer>
			<div className='logo-cont'>
				<div className='love'>
					<MdFavorite />
				</div>
				<div className='white-background'></div>
				<img src={props.data.showcase.gallery[0]?.photo} alt='fav project' />
			</div>
			<div className='des'>
				<div className='theme-room'>
					<Link to={`/detail/${props.data.showcase._id}`}>
						<h3>{props.data.showcase?.name}</h3>
					</Link>
					<div className='logos'>
						<IoTime />
						<span>2 Weeks</span>
					</div>
				</div>
				<div className='loc'>
					<h4>{props.data.showcase?.address}</h4>
					<div className='logos'>
						<AiFillDollarCircle />
						<span>Rp. 70,000,000</span>
					</div>
				</div>
			</div>
		</FavContainer>
	)
}
