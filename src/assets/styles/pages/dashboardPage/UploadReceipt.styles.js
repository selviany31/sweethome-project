import styled from 'styled-components'

export const ModalReceipt = styled.div`
	/* width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	position: absolute;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: auto; */

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
	.box-receipt {
		width: 660px;
		height: 612px;
		background: #ffffff;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		.receipt-title {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

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
	}

	.upload-file {
		height: 112px;
		background: #eceeef;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.logo-file {
			border: none;
			font-size: 20px;
		}

		.detail-up {
			font-family: 'Noto Sans';
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			color: #000000;
		}

		.upload-nike {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			cursor: pointer;
		}

		.image-receipt {
			width: 100px;
			height: 100px;
		}
	}

	.modal-note {
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: bold;
		font-size: 14px;
		color: #373737;
	}

	span {
		color: red;
	}

	textarea & .add-comment {
		height: 181px;
		border: 1px solid #999999;
		box-sizing: border-box;
		border-radius: 4px;
		font-family: Noto Sans;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #999999;
	}

	.sub-receipt {
		width: 275px;
		height: 55px;
		background: #f2d555;
		box-shadow: 0px 4px 10px rgba(33, 68, 87, 0.2);
		font-family: 'Inter';
		font-style: normal;
		font-weight: bold;
		border: none;
		align-self: center;
		margin-bottom: 35px;
		cursor: pointer;
		&:focus {
			outline: none;
		}
	}
`
