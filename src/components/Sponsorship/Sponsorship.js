import './Sponsorship.css';
import leftImage from './asset/leftSponsorImage.svg';
import rightImage from './asset/rightSponsorImage.svg';
import heading from './asset/sponsorText.svg';
import React from 'react';
/* eslint-disable */
const Sponsorship = () => {
	return (
		<div className='sponsors' id='sponsors'>
			<div className='headingContainer'>
				<img src={heading} />
			</div>
			<div className='imagesContainer'>
				<div className='lImage'>
					<img src={leftImage} />
				</div>
				<div className='rImage'>
					<img src={rightImage} />
				</div>
			</div>
		</div>
	);
};

export default Sponsorship;
