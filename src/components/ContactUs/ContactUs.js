import React from 'react';
import Temp from '../verticalCarousal/tempFile';
import data from './data.json';
import './ContactUs.css';
import contact from './Contact us.svg';

const ContactUs = () => {
	return (
		<div className='contactUs' id='contactUs'>
			<div
				className='headingContainer mod'
				// style={{  }}
			>
				<img src={contact} alt='' />
			</div>
			<Temp images={data.images} />
		</div>
	);
};
/* eslint-disable */
export default ContactUs;
