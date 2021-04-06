import React from 'react'
import { TableContainer } from '../../assets/styles/components/dashboardPage/TableProject.styles'

export default function TableProject(props) {
	const formatBudget = (budget) => {
		const reverse = budget.toString().split('').reverse().join('')
		let ribuan = reverse.match(/\d{1,3}/g)
		const joinRibuan = ribuan.join(',').split('').reverse().join('')
		return joinRibuan
	}

	return (
		<TableContainer>
			<table className='nike-table'>
				<thead>
					<tr>
						<th>Project Type</th>
						<th>Area</th>
						<th>Work Duration</th>
						<th>Total</th>
					</tr>
				</thead>

				<tbody>
					{props.spesific.packages.map((item) => (
						<tr key={item._id}>
							<td className='nike-pro-type'>{item.projectType.name}</td>
							<td>{item.location.name} </td>
							<td>{item.duration} Week(s)</td>
							<td>Rp.{formatBudget(item.price)}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className='nike-total'>
				<div className='total-duration'>
					<span className='span-title'>Duration</span> {props.spesific.totalDuration} Week(s)
				</div>
				<div className='total-amount'>
					<span className='span-title'>Total</span> Rp. {formatBudget(props.spesific.totalPrice)}
				</div>
			</div>
		</TableContainer>
	)
}
