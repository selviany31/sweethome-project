import styled from 'styled-components'

export const CardContainer = styled.div`
	border-left: 10px solid ${(props) => props.border};
	box-shadow: 0px 4px 10px rgba(33, 68, 87, 0.2);
	background: #ffffff;
	border-radius: 4px;
	margin-bottom: 20px;

	.top-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20px 30px 20px 20px;
	}

	.top-label {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 10px;

		.label {
			font-weight: bold;
			font-size: 14px;
			color: #ffffff;
			background: ${(props) => props.color};
			border-radius: 100px;
			width: 163px;
			height: 29px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20px;
		}
		.created-date {
			font-size: 12px;
			color: #c5c7cd;
			letter-spacing: 0.1px;
			display: flex;
			justify-content: center;
			flex-direction: center;
		}
	}

	.down-label {
		display: flex;
		flex-direction: row;

		.date {
			font-size: 16px;
			color: #214457;
			font-weight: bold;
			margin-right: 5px;
			font-size: 16px;
		}
	}

	.toogle {
		font-size: 35px;
	}
`
