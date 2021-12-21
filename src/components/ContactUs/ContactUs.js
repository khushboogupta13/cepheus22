import React from 'react';
import Temp from '../verticalCarousal/tempFile';
import './ContactUs.css';
import contact from './Contact us.svg';

const ContactUs = () => {
	return (
		<div className='contactUs' id='contactUs'>
			<div
				className='headingContainer mod'
				// style={{  }}
			>
				<img src={contact} alt='' className='heading_c' />
			</div>
			<Temp />
		</div>
	);
};
/* eslint-disable */
export default ContactUs;
