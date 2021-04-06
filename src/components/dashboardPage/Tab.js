import React from 'react'
import { TabContainer, NavItem } from '../../assets/styles/components/dashboardPage/Tab.styles'

export default function Tab(props) {
	const tabItems = [
		{ id: 1, name: 'Appointments', nav: 'appointments' },
		{ id: 2, name: 'Projects', nav: 'projects' },
		{ id: 3, name: 'Favourites', nav: 'favourites' },
	]

	return (
		<TabContainer>
			{tabItems.map((item) => (
				<NavItem
					key={item.id}
					onClick={(e) => {
						e.preventDefault()
						props.setNavigation(item.nav)
					}}
					active={props.navigation === item.nav}>
					{item.name}
				</NavItem>
			))}
		</TabContainer>
	)
}
