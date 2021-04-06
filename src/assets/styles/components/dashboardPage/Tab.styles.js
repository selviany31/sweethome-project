import styled from 'styled-components'

export const TabContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 3rem;
	margin-bottom: 3rem;
`

export const NavItem = styled.div`
	margin-right: 50px;
	font-size: 18px;
	color: ${(props) => (props.active ? ' #214457' : '#999999')};
	font-weight: ${(props) => props.active && 'bold'};
	cursor: pointer;
`
