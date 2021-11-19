import React, { useState, useCallback, CSSProperties, useEffect } from 'react';
import FlipCard from '../flipCards/flipCards';
import './styles.css';

const Temp = ({ images }) => {
	const [index, set] = useState(0);
	const onAction = useCallback((action) =>
		set(
			(state) => {
				return action === 'next' ? (state < 4 ? state + 1 : state) : state > 0 ? state - 1 : state;
			},
			[index]
		)
	);
	return (
		<div className='carousalDiv'>
			<div className='colDiv'>
				{images.map((items, i) => (
					<div className='rowDiv'>
						{items.map((item) => (
							<FlipCard front={`${item.front}`} back={`${item.back}`} zIndex={100 - i} />
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Temp;
