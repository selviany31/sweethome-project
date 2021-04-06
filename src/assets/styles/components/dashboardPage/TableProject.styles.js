import styled from 'styled-components'

export const TableContainer = styled.div`
	.nike-table {
		width: 100%;
		margin-top: 10px;
		font-family: 'Noto Sans JP';
		padding: 20px 30px 0px 20px;
	}

	tr {
		text-align: left;
	}

	td,
	th {
		border-bottom: 1.5px solid #dfe0eb;
		padding: 10px 0;
	}

	td {
		font-weight: normal;
		font-size: 14px;
		color: #373737;
	}

	th {
		font-weight: bold;
		font-size: 14px;
		color: #9fa2b4;
		letter-spacing: 0.2px;
	}

	.nike-pro-type {
		font-weight: bold;
		font-size: 14px;
		color: #373737;
		font-family: 'Noto Sans JP';
	}

	.nike-total {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		background: #eceeef;
		border-radius: 0px 0px 4px 0px;
		padding: 10px;
	}

	.total-duration {
		width: 400px;
		font-size: 16px;
		color: #000000;
	}

	.total-amount {
		width: 320px;
		font-size: 16px;
		color: #000000;
	}

	.span-title {
		font-weight: bold;
		font-size: 16px;
		color: #000000;
	}
`
