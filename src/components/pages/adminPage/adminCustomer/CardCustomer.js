import React from 'react'
import './CardCustomer.scss'
import * as ActionCustomerList from '../../../../redux/action/CustomerAction'
// import profPic from '../layout/displayPicture.png'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'moment'
import Spinner from '../../../../components/dashboardPage/Spinner'

//ini untuk card customer
const CardCustomer = () => {
	const dispatch = useDispatch()
	const getCustomers = useSelector((state) => state.customerReducer.customers)
	const fetchingCustomerList = () => {
		dispatch(ActionCustomerList.getCustomerList())
	}

	useEffect(() => {
		fetchingCustomerList()
		// eslint-disable-next-line
	}, [dispatch])
	// console.log(getCustomers)
	return (
		<div className='customer_card' key='_id'>
			{getCustomers.length === 0 ? (
				<div className='spinner-container'>
					<Spinner />
				</div>
			) : (
				getCustomers.data.map((customer) => {
					return (
						<div className='customer_card_detail' key={customer._id}>
							<div>
								<img src={customer.photo} alt={customer._id} />
							</div>
							<div>
								<p>
									{customer.firstname} {customer.lastname}
								</p>
								<span>{customer.email}</span>
							</div>
							<div>
								<label>{Moment(customer.activity).format('DD MMMM YYYY, HH:MM A')}</label>
							</div>
						</div>
					)
				})
			)}
		</div>
	)
}
export default CardCustomer
