import React from 'react'
import './ReviewCard.css'
import samplePic from './assets/designer.png'

function ReviewCard() {
	return (
		<div className='cust-review-container'>
			<img src={samplePic} alt='cust' className='cust-img' />
			<div className='cust-review-text'>
				<p className='cust-review-p'>
					Odio tortor tincidunt risus aliquet malesuada semper. Vestibulum id faucibus aliquam ut bibendum praesent nibh. Fames sed pulvinar sagittis non leo tortor, quis.
					Volutpat nec diam ac venenatis commodo scelerisque arcu venenatis. Sem euismod urna ac dignissim eros.
				</p>
				<p className='cust-review-project-name'>
					Kitchen Make Over <span>&mdash;</span> <span style={{ fontWeight: '200', fontSize: '14px', color: '#999999' }}>Priyanka Saklitinov</span>
				</p>
			</div>
		</div>
	)
}

export default ReviewCard
