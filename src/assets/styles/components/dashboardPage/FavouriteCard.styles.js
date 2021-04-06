import styled from 'styled-components'

export const FavContainer = styled.div`
	background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 51.22%, #ffffff 75.08%);
	height: 325px;
	width: 501px;
	margin-right: 10px;
	margin-bottom: 50px;

	img {
		width: 501px;
	}
	.des {
		display: flex;
		flex-direction: column;
		width: 470px;
		position: absolute;
		margin-top: -70px;
		margin-left: 10px;
		margin-right: 20px;
	}
	.theme-room {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}
	.theme-room a {
		text-decoration: none;
	}

	.loc {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		font-family: 'Noto Sans';
		font-weight: bold;
		font-size: 16px;
		color: #373737;
	}

	h4 {
		font-size: 14px;
		color: #373737;
		font-family: 'Noto Sans';
		font-weight: normal;
	}

	span {
		font-weight: normal;
		font-size: 14px;
		color: #999999;
		margin-left: 10px;
		align-items: center;
	}

	.logos {
		display: flex;
		align-items: center;
	}

	.white-background {
		width: 501px;
		height: 335px;
		background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 51.22%, #ffffff 75.08%);
		position: absolute;
		box-shadow: 0px 4px 10px 0 rgb(33 68 87 / 20%);
		margin-bottom: 5%;
	}

	.white-background:hover {
		box-shadow: 0px 8px 20px 0 rgba(33, 68, 87, 0.5);
	}

	.love {
		height: 36px;
		width: 36px;
		border-radius: 50%;
		position: absolute;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #dd5571;
		margin: 10px 10px;
	}

	.logo-cont {
		display: flex;
		justify-content: flex-end;
	}

	.spin-fav {
		display: flex;
		justify-content: center;
	}
`
