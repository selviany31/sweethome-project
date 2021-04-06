import React, { useEffect, useState } from 'react'
import { getLocation, getProjectType } from '../../../../../redux/action/AdminProjectAction'
import { useDispatch, useSelector } from 'react-redux'

function PackageCard({ packages, setPackages }) {
	const dispatch = useDispatch()
	const locationData = useSelector((state) => state.adminProject.location)
	const projectTypeData = useSelector((state) => state.adminProject.projectType)

	useEffect(() => {
		dispatch(getLocation())
		dispatch(getProjectType())
	}, [dispatch])

	const [projectDetail, setProjectDetail] = useState({
		duration: '',
		area: '',
		price: '',
		location: '',
		projectType: '',
	})

	useEffect(() => {
		setPackages(packages.concat(projectDetail))
		// eslint-disable-next-line
	}, [projectDetail])

	// console.log(projectDetail)

	return (
		<div>
			<div className='loc-type'>
				<div className='loc-select'>
					<p style={{ fontWeight: 'bold', fontSize: '14px' }}>
						Location<span style={{ color: '#DD5571' }}>*</span>
					</p>
					<select defaultValue={'DEFAULT'} onChange={(e) => setProjectDetail({ ...projectDetail, location: JSON.parse(e.target.value) })}>
						<option value='DEFAULT' disabled>
							Please select...
						</option>
						{locationData.length === 0
							? null
							: locationData.data.map((loc, index) => (
								<option value={JSON.stringify(loc)} key={index}>
									{loc.name}
								</option>
							))}
					</select>
				</div>
				<div className='pro-type'>
					<p style={{ fontWeight: 'bold', fontSize: '14px' }}>
						Project Type<span style={{ color: '#DD5571' }}>*</span>
					</p>
					<select defaultValue={'DEFAULT'} onChange={(e) => setProjectDetail({ ...projectDetail, projectType: JSON.parse(e.target.value) })}>
						<option value='default' disabled>
							Please select...
						</option>
						{projectTypeData.length === 0
							? null
							: projectTypeData.data.map((type, index) => (
								<option value={JSON.stringify(type)} key={index}>
									{type.name}
								</option>
							))}
					</select>
				</div>
			</div>
			<div className='work-area-price'>
				<div className='work-area'>
					<div>
						<p style={{ fontWeight: 'bold', fontSize: '14px' }}>
							Work Duration (weeks)<span style={{ color: '#DD5571' }}>*</span>
						</p>
						<input type='text' placeholder='e.g 2' onChange={(e) => setProjectDetail({ ...projectDetail, duration: JSON.parse(e.target.value) })} />
					</div>
					<div>
						<p style={{ fontWeight: 'bold', fontSize: '14px' }}>
							Area (m2)<span style={{ color: '#DD5571' }}>*</span>
						</p>
						<input type='text' placeholder='e.g 30' onChange={(e) => setProjectDetail({ ...projectDetail, area: JSON.parse(e.target.value) })} />
					</div>
				</div>
				<div className='wap-price'>
					<p style={{ fontWeight: 'bold', fontSize: '14px' }}>
						Price (Rp)<span style={{ color: '#DD5571' }}>*</span>
					</p>
					{/* <NumberFormat placeholder='e.g 10,000,000' onChange={(e) => setProjectDetail({ ...projectDetail, price: JSON.parse(e.target.value) })} thousandSeparator={true} /> */}
					<input type='text' placeholder='e.g 10,000,000' onChange={(e) => setProjectDetail({ ...projectDetail, price: JSON.parse(e.target.value) })} />
				</div>
			</div>
		</div>
	)
}

export default PackageCard
