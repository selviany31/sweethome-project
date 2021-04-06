import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
// import { IconContext } from 'react-icons'
import google from './assets/google_badge.png'
import apple from './assets/appstore_badge.svg'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='get-started'>
				<div className='col-1'>
					<h1>Ready to Get Started?</h1>
					<p className='col-1-p'>Pellentesque odio sed dui quis mauris nulla sagittis mauris lacus.</p>
					<p className='col-1-qn'>
						Have questions? <span>check our FAQs</span>{' '}
					</p>
				</div>
				<div className='col-2'>
					<div className='column-2'>
						<div className='idea'>
							<p className='col-2-title'>Idea</p>
							<p className='col-2-p'>Living Room</p>
							<p className='col-2-p'>Kitchen</p>
							<p className='col-2-p'>Bedroom</p>
							<p className='col-2-p'>Garden</p>
						</div>

						<div className='sweetOffice'>
							<p className='col-2-title'>
								SweetOffice<span className='tm'>&trade;</span>
							</p>
							<p className='col-2-p'>For Office</p>
							<p className='col-2-p'>For School</p>
							<p className='col-2-p'>FAQ</p>
						</div>

						<div className='resources'>
							<p className='col-2-title'>Resources</p>
							<p className='col-2-p'>Contact Us</p>
							<p className='col-2-p'>About</p>
							<p className='col-2-p'>Careers</p>
						</div>
					</div>
					<div className='stores'>
						<img src={google} alt='playstore' className='playstore' />
						<img src={apple} alt='appstore' className='appstore' />
					</div>
				</div>
			</div>
			<div className='copyright'>
				<p className='copyright-p'>Copyright, SweetHome 2021, All Right Reserved</p>
				{/* <IconContext.Provider
          value={{
            style: {
              fontSize: "16px",
              color: "#000000",
              paddingRight: "16px",
              paddingTop: "30px",
            },
          }}
        > */}
				<div className='icons'>
					<ImFacebook
						style={{
							fontSize: '16px',
							color: '#000000',
							marginRight: '16px',
							marginTop: '30px',
						}}
					/>
					<FaInstagram
						style={{
							fontSize: '16px',
							color: '#000000',
							marginRight: '16px',
							marginTop: '30px',
						}}
					/>
					<FaLinkedinIn
						style={{
							fontSize: '16px',
							color: '#000000',
							marginRight: '16px',
							marginTop: '30px',
						}}
					/>
				</div>
				{/* </IconContext.Provider> */}
			</div>
		</div>
	)
}

export default Footer
