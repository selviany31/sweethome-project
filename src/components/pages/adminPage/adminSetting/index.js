import React from 'react'
import { Route } from 'react-router-dom'
import Content from './settingTabs/contents'
import Timeslot from './settingTabs/contents/timeslot'
import DetailTimeslot from './settingTabs/contents/timeslot/DetailTimeslot'
import AdminList from './settingTabs/contents/admin'

export default function adminSetting() {
	return (
		<div>
			<Route exact path='/admin/setting/timeslot/:name/:id' component={DetailTimeslot} />
			<Route exact path='/admin/setting/admin-list' component={AdminList} />
			<Route exact path='/admin/setting/timeslot' component={Timeslot} />
			<Route exact path='/admin/setting' component={Content} />
		</div>
	)
}
