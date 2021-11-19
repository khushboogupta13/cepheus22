import React, { useState } from 'react';

import './flipCard.css';

const FlipCard = (props) => {
	const [flipped, set] = useState(false);
	return (
		<div
			className='flip-card'
			onMouseEnter={() => setTimeout(() => set(true), 100)}
			onMouseLeave={() => setTimeout(() => set(false), 200)}
			style={{ zIndex: !flipped ? `${props.zIndex}` : '1000' }}>
			<div className={flipped ? 'flip-card-inner flipped' : 'flip-card-inner'}>
				<div className={`flip-card-front ${flipped ? 'flip' : ''}`}>
					<img src={props.front} alt='Avatar' className='avatar__image' />
				</div>
				<div className='flip-card-back'>
					<img src={props.back} alt='Avatar' className='avatar__image' />
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
