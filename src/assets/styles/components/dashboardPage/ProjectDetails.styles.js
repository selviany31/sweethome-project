import styled from 'styled-components'

export const ProjectContainer = styled.div`
	.i-box {
		background: #eceeef;
		border-radius: 4px;
		width: 400px;
		height: 57px;
		display: flex;
		align-items: center;
		margin: 0px 0 35px 0;
		padding: 5px;
	}

	.i-logo {
		font-size: 20px;
		margin-right: 10px;
		font-weight: bold;
		color: black;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.i-note {
		font-size: 12px;
		color: #000000;
	}

	.pro-detail {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-bottom: 5px;
	}

	.pro-date {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		font-size: 12px;
		color: #214457;
	}

	.nike-pro-left {
		display: flex;
		flex-direction: column;
		width: 50%;
	}

	.upload {
		box-shadow: 0px 4px 10px rgba(33, 68, 87, 0.2);
		background: #214457;
		width: 229px;
		height: 55px;
		font-weight: bold;
		font-size: 16px;
		color: #ffffff;
		text-align: center;
		cursor: pointer;
	}

	.nike-pro-right {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
	}

	.nike-pro-right > span {
		display: block;
	}

	.nike-top-middle {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.req {
		font-size: 14px;
		text-decoration-line: underline;
		color: #999999;
		margin-top: 10px;
		cursor: pointer;
	}

	.pro-top {
		padding: 20px 30px 20px 20px;
	}
`
