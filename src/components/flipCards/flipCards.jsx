import React, { useState } from 'react';
import './flipCard.css';
// import { Swiper, SwiperSlide } from 'swiper/react';

const FlipCard = (props) => {
	const [flipped, set] = useState(false);
	const { event, name, contact, mail, url } = props;
	return (
		<div
			className={`flip-card ${props.inViewport ? 'enter' : 'not-enter'}`}
			onMouseEnter={() => setTimeout(() => set(true), 100)}
			onMouseLeave={() => setTimeout(() => set(false), 200)}
			style={{
				display: props.off ? 'none' : 'flex',
				zIndex: !flipped ? `${props.zIndex}` : '1000',
				animationDelay: `${props.anime * 80}ms`,
			}}>
			<div className={flipped ? 'flip-card-inner flipped' : 'flip-card-inner'}>
				<div className={`flip-card-front ${flipped ? 'flip' : ''}`}>
					<img src={process.env.PUBLIC_URL + '/' + props.front} alt='Avatar' className='avatar__image' />
				</div>
				<div className='flip-card-back'>
					{/* <img src={props.back} alt='Avatar' className='avatar__image' /> */}
					<div
						style={{
							display: 'flex',
							background: 'black',
							alignItems: 'center',
							justifyContent: 'space-between',
							height: '35%',
							width: '100%',
						}}>
						<h1 className={'member__name'}>{name}</h1>
						<img className='circle-img' src={process.env.PUBLIC_URL + '/' + url} alt='avatar_img' />
					</div>
					<div
						style={{
							height: '65%',
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							flexDirection: 'column',
						}}>
						<p
							className='details'
							style={{
								fontSize: '0.8vw',
							}}>
							{event}
						</p>
						<br />
						<p
							className='details'
							style={{
								fontSize: '0.6vw',
							}}>
							{contact}
						</p>
						<p
							className='details'
							style={{
								fontSize: '0.45vw',
							}}>
							{mail}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlipCard;
