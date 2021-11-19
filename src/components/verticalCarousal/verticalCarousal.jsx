import React, { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Next } from './chevronDown.svg';
import { ReactComponent as Prev } from './chevronUp.svg';
import './styles.css';
import FlipCard from '../flipCards/flipCards';

const VerticalCarousel = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	// Used to determine which items appear above the active item
	const halfwayIndex = Math.ceil(images.length / 2);
	// Usd to determine the height/spacing of each item
	const itemHeight = 52;
	// Used to determine at what point an item is moved from the top to the bottom
	const shuffleThreshold = halfwayIndex * itemHeight;

	// Used to determine which items should be visible. this prevents the "ghosting" animation
	const visibleStyleThreshold = shuffleThreshold / 2;

	const determinePlacement = (itemIndex) => {
		// If these match, the item is active
		if (activeIndex === itemIndex) return 0;
		if (itemIndex >= halfwayIndex) {
			if (activeIndex > itemIndex - halfwayIndex) {
				return (itemIndex - activeIndex) * itemHeight;
			} else {
				return -(images.length + activeIndex - itemIndex) * itemHeight;
			}
		}
		if (itemIndex > activeIndex) {
			return (itemIndex - activeIndex) * itemHeight;
		}
		if (itemIndex < activeIndex) {
			if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
				return (images.length - (activeIndex - itemIndex)) * itemHeight;
			}
			return -(activeIndex - itemIndex) * itemHeight;
		}
	};

	const handleClick = (direction) => {
		setActiveIndex((prevIndex) => {
			if (direction === 'next') {
				if (prevIndex + 1 > images.length - 1) {
					return 0;
				}
				return prevIndex + 1;
			}
			if (prevIndex - 1 < 0) {
				return images.length - 1;
			}
			return prevIndex - 1;
		});
	};

	return (
		<div className='container'>
			<section className='outer-container'>
				<div className='carousel-wrapper'>
					<button type='button' className='carousel-button prev' onClick={() => handleClick('prev')}>
						<Prev />
					</button>

					<div
						className='carousel'
						onWheel={(e) => {
							setTimeout(() => handleClick('prev'), 500);
						}}>
						{/* <div className='leading-text'><p>{leadingText}</p></div> */}
						<div className='slides'>
							<div className='carousel-inner'>
								{images.map((item, i) => (
									<button
										type='button'
										onClick={() => setActiveIndex(i)}
										className={cn('carousel-item', {
											active: activeIndex === i,
											visible: Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
										})}
										key={item.id}
										style={{
											transform: `translateY(${determinePlacement(i)}px)`,
										}}>
										<FlipCard front={`${item.front}`} back={`${item.back}`} />
									</button>
								))}
							</div>
						</div>
					</div>
					<button type='button' className='carousel-button next' onClick={() => handleClick('next')}>
						<Next />
					</button>
				</div>
			</section>
		</div>
	);
};
export default VerticalCarousel;
