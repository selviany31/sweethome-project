import styled from 'styled-components'

export const ModalCancel = styled.div`
	/* width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center; */

	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	display: flex;
	justify-content: center;
	align-items: center;

	.box-reqcancel {
		width: 660px;
		height: 552px;
		background: #ffffff;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		flex-direction: column;
		padding-left: 30px;

		span {
			color: red;
		}

		.reqcancel-title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 65px;

			p {
				font-family: 'Noto Sans';
				font-style: normal;
				font-weight: bold;
				font-size: 20px;
				color: #000000;
			}
			.close-mod {
				border: none;
				background: none;
				font-size: 20px;
				cursor: pointer;
				&:focus {
					outline: none;
				}
			}
		}

		.reqcancel-middle {
			margin-bottom: 35px;

			.reqcancel-id {
				font-family: 'Noto Sans';
				font-style: normal;
				font-weight: bold;
				font-size: 14px;
				color: #373737;
				margin-bottom: 10px;

				span {
					color: red;
				}
			}
			.box-projectid {
				height: 55px;
				width: 288px;
				background: rgba(248, 248, 248, 1);
				border-radius: 4px;
				outline-style: bold;
				font-family: 'Noto Sans';
				font-size: 16px;
				color: #373737;
				padding-top: 15px;
			}
		}

		.reason-cancel {
			font-family: 'Noto Sans';
			font-style: normal;
			font-weight: bold;
			font-size: 14px;
			color: #373737;
			margin-bottom: 10px;
		}

		.box-reasoncancel {
			height: 181px;
			width: 591px;
			margin-bottom: 20px;
		}

		.but-cancel {
			width: 275px;
			height: 55px;
			background: #f2d555;
			box-shadow: 0px 4px 10px rgba(33, 68, 87, 0.2);
			font-family: 'Inter';
			font-style: normal;
			font-weight: bold;
			border: none;
			align-self: center;
			cursor: pointer;
			&:focus {
				outline: none;
			}
		}
	}
`
