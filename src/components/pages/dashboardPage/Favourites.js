import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavProject } from '../../../assets/styles/pages/dashboardPage/Favorites.styles'
import FavouriteCard from '../../dashboardPage/FavouriteCard'
import { getFavouriteData } from '../../../redux/action/DashboardAction'
import Spinner from '../../../components/dashboardPage/Spinner'

export default function Favourites() {
	const dispatch = useDispatch()
	const { favouriteData } = useSelector((state) => state.dashboard)

	console.log(favouriteData, 'fav')

	useEffect(() => {
		dispatch(getFavouriteData())
	}, [dispatch])
	return (
		<FavProject>
			{favouriteData === null && (
				<div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
					<Spinner />
				</div>
			)}
			{favouriteData && favouriteData.length === 0 && <p>Data Not Available</p>}
			{favouriteData && favouriteData.length !== 0 && favouriteData.map((item, index) => <FavouriteCard key={index} data={item} />)}
			{/* <FavouriteCard />
			<FavouriteCard />
			<FavouriteCard /> */}
		</FavProject>
	)
}
