import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as ActionAppointment from '../../../../redux/action/postAppointment'
import { useSelector, useDispatch } from 'react-redux'
import NumberFormat from 'react-number-format'
import '../Appointment.css'

export default function EnquiryDetails() {
	const history = useHistory()
	const [enquiryData, setEnquiryData] = useState({
		duration: '',
		area: '',
		budget: '',
		address: '',
		note: '',
		buildType: '',
		serviceType: '',
		locations: [],
		styles: [],
	})

	const dispatch = useDispatch()

	const buildingType = useSelector((state) => state.appointmentReducer.buildType)
	const serviceType = useSelector((state) => state.appointmentReducer.serviceType)
	const inspectArea = useSelector((state) => state.appointmentReducer.inspectArea)
	const preferredStyle = useSelector((state) => state.appointmentReducer.prefStyle)
	const fetchBuildingType = () => {
		dispatch(ActionAppointment.getBuildingType())
		dispatch(ActionAppointment.getServiceType())
		dispatch(ActionAppointment.getInspectionArea())
		dispatch(ActionAppointment.getPreferredStyle())
	}
	useEffect(fetchBuildingType, [dispatch])

	const handleSubmitEnquiry = (e) => {
		e.preventDefault()
		const body = {
			duration: enquiryData.duration,
			area: enquiryData.area,
			budget: enquiryData.budget,
			address: enquiryData.address,
			note: enquiryData.note,
			buildType: enquiryData.buildType,
			serviceType: enquiryData.serviceType,
			locations: enquiryData.locations,
			styles: enquiryData.styles,
		}
		dispatch(ActionAppointment.postEnquiryDetail(body)).then(() => history.push(`/appointment/appointment-date/${enquiryData.serviceType._id}`))
	}

	return (
		<div className='container-wrapper'>
			<form className='enquiry-wrapper'>
				<div>
					<label className='enquiry-label'>
						Building Type<span>*</span>
					</label>{' '}
					<br />
					<select
						defaultValue={'DEFAULT'}
						onChange={(e) => setEnquiryData({ ...enquiryData, buildType: JSON.parse(e.target.value) })}
						className='enquiry-select'
						title='select'
						required>
						<option value='DEFAULT' disabled>
							Please select
						</option>
						{buildingType.length === 0
							? null
							: buildingType.data.map((build, index) => {
									return (
										<option key={index} value={JSON.stringify(build)}>
											{build.name}
										</option>
									)
							  })}
					</select>
				</div>
				<div>
					<label className='enquiry-label'>
						Service Type<span>*</span>
					</label>{' '}
					<br />
					<select defaultValue={'DEFAULT'} onChange={(e) => setEnquiryData({ ...enquiryData, serviceType: JSON.parse(e.target.value) })} className='enquiry-select' required>
						<option value='DEFAULT' disabled>
							Please select
						</option>
						{serviceType.length === 0
							? null
							: serviceType.data.map((service, index) => {
									return (
										<option key={index} value={JSON.stringify(service)}>
											{service.name}
										</option>
									)
							  })}
					</select>
				</div>
				<div>
					<label className='enquiry-label'>
						Estimated Work Duration<span>*</span>
					</label>{' '}
					<br />
					<div className='appointment-border-input'>
						<input onChange={(e) => setEnquiryData({ ...enquiryData, duration: e.target.value })} type='text' placeholder='e.g 3' className='enquiry-input' required />
						<hr />
						<span> Week(s)</span>
					</div>
				</div>
				<div>
					<label className='enquiry-label'>
						Budget<span>*</span>
					</label>{' '}
					<br />
					<div className='appointment-border-input'>
						<span> Rp </span> <hr />
						<NumberFormat
							thousandSeparator={true}
							style={{ border: '0px', width: '100%' }}
							onChange={(e) => setEnquiryData({ ...enquiryData, budget: e.target.value })}
							type='text'
							placeholder='e.g 10000000'
							className='enquiry-input'
							required
						/>
					</div>
				</div>
				<div>
					<label className='enquiry-label'>
						Area Size<span>*</span>
					</label>{' '}
					<br />
					<div className='appointment-border-input'>
						<input onChange={(e) => setEnquiryData({ ...enquiryData, area: e.target.value })} type='text' placeholder='e.g 100' className='enquiry-input' required />
						<hr />
						<span> m2</span>
					</div>
				</div>
			</form>
			<div>
				<label className='enquiry-label'>
					Address<span>*</span>
				</label>{' '}
				<br />
				<textarea
					onChange={(e) => setEnquiryData({ ...enquiryData, address: e.target.value })}
					cols='175'
					rows='6'
					placeholder='e.g One East Residences 7-16&#10;Jl. Raya Kertajaya Indah No. 79&#10;Surabaya Jawa Timur'
					required
				/>
			</div>
			<div className='filter-preferred'>
				<div className='filter-wrapper'>
					<div className='filter-title'>
						<span className='enquiry-label'>Inspection Area</span>
						<span>You may select more than one</span>
					</div>
					<div className='filter-btn-wrapper'>
						{inspectArea.length === 0
							? null
							: inspectArea.data.map((area, index) => {
									return (
										<button
											key={index}
											onClick={(e) => setEnquiryData({ ...enquiryData, locations: enquiryData.locations.concat(JSON.parse(e.target.value)) })}
											className={enquiryData.locations.find((loc) => loc._id === area._id) ? 'filter-btn-active' : 'filter-btn'}
											value={JSON.stringify(area)}>
											{area.name}
										</button>
									)
							  })}
					</div>
				</div>
				<div className='filter-wrapper'>
					<div className='filter-title'>
						<span className='enquiry-label'>Preferred Style</span>
						<span>You may select more than one</span>
					</div>
					<div className='filter-btn-wrapper'>
						{preferredStyle.length === 0
							? null
							: preferredStyle.data.map((style, index) => {
									return (
										<button
											key={index}
											onClick={(e) => setEnquiryData({ ...enquiryData, styles: enquiryData.styles.concat(JSON.parse(e.target.value)) })}
											className={enquiryData.styles.find((item) => item._id === style._id) ? 'filter-btn-active' : 'filter-btn'}
											value={JSON.stringify(style)}>
											{style.name}
										</button>
									)
							  })}
					</div>
				</div>
			</div>
			<div>
				<label className='enquiry-label'>Note</label> <br />
				<textarea onChange={(e) => setEnquiryData({ ...enquiryData, note: e.target.value })} cols='50' rows='6' placeholder='Write your request here' />
			</div>
			<div className='btn-wrapper'>
				<button
					disabled={!enquiryData.serviceType || !enquiryData.buildType || !enquiryData.duration || !enquiryData.budget || !enquiryData.address || !enquiryData.area}
					onClick={handleSubmitEnquiry}
					className='btn-submit'>
					Next {'  -->'}
				</button>
			</div>
		</div>
	)
}
