import styled from 'styled-components'

export const SpinnerContainer = styled.div`
	display: flex;
	justify-content: center;

	.loader {
		border: 8px solid #f3f3f3; /* Light grey */
		border-top: 8px solid #214457; /* Blue */
		border-radius: 50%;
		width: 60px;
		height: 60px;
		animation: spin 2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
