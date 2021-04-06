import styled from 'styled-components'

export const UserContainer = styled.div`
	display: flex;
	flex-direction: column;

	.dashboard_title_nic {
		padding: 12px 0 14 git px 0;
		margin-bottom: 20px;
		margin-top: 10px;
	}

	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 15px 0;

		width: 100%;
		h1 {
			margin-top: 10px;
		}

		h3 {
			margin: 0;
			font-weight: bold;
			font-size: 24px;
			color: #000000;
		}

		p {
			margin: 0;
			font-size: 18px;
			color: #000000;
		}

		.user-detail {
			display: flex;
			flex-direction: row;

			.link {
				color: #214457;
			}
		}

		button {
			width: 283px;
			height: 56px;
			background: #214457;
			font-weight: bold;
			font-size: 16px;
			color: #ffffff;
			display: flex;
			align-items: center;
			justify-content: center;

			.plus {
				margin-right: 10px;
				font-size: 30px;
				margin-top: 4px;
			}
		}
	}

	.pict {
		margin-right: 25px;
		.pro-pic-nike {
			width: 89px;
			height: 89px;
			border-radius: 50%;
			border: 1px solid #214457;
			box-sizing: border-box;
		}
	}

	.cont-left-part {
	}
`
