import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	.dash-arrow {
		margin: 4px 4px 0px;
		font-size: 14px;
	}

	.link {
		font-size: 16px;
		color: #828282;
		text-decoration: none;
	}

	.logo {
		margin-right: 10px;
	}
`

export const BreadcrumbName = styled.span`
	font-weight: bold;
	font-size: 16px;
	color: #214457;
`
