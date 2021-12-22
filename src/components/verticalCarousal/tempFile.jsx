import React, { useState, useCallback, useRef } from 'react';
import FlipCard from '../flipCards/flipCards';
import { useInViewport } from 'react-in-viewport';
import './styles.css';
import data from './data.json';
import Slider from 'react-slick';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// // install Swiper modules
// SwiperCore.use([Pagination]);
/* eslint-disable */
const Temp = (props) => {
	const [index, set] = useState(0);
	const onAction = useCallback((action) =>
		set(
			(state) => {
				return action === 'next' ? (state < 4 ? state + 1 : state) : state > 0 ? state - 1 : state;
			},
			[index]
		)
	);
	const myRef = useRef();
	const { inViewport } = useInViewport(myRef, props);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 3,
		// width: 700,
	};
	// const image = images.reverse();
	return (
		<div className='carousalDiv'>
			<div className='colDiv' ref={myRef}>
				{data.images.map((items, j) => (
					<div className='rowDiv' style={{ zIndex: `${100 - j}` }}>
						{/* <Swiper slidesPerView={5} spaceBetween={10}> */}
						<Slider {...settings}>
							{items.map((item, i) => (
								// <SwiperSlide style={{ zIndex: 10 }}>
								<FlipCard
									front={`${item.front}`}
									key={item.mail}
									front={item.front}
									event={item.event}
									name={item.name}
									contact={item.contact}
									mail={item.mail}
									zIndex={100 - j}
									url={item.url}
									order={j}
									label={item.label}
									off={0}
									anime={i + j}
									inViewport={inViewport}
								/>
								// </SwiperSlide>
							))}
							{/* </Swiper> */}
							{/* </Slider> */}
						</Slider>
					</div>
				))}
				{data.images.map((items, j) => (
					<div className='rowDivMobile'>
						{/* <Swiper slidesPerView={5} spaceBetween={10}> */}

						{items.map((item, i) => (
							// <SwiperSlide style={{ zIndex: 10 }}>
							<FlipCard
								key={item.mail}
								front={item.front}
								event={item.event}
								name={item.name}
								contact={item.contact}
								mail={item.mail}
								off={item.off}
								zIndex={100 - j - i}
								order={j}
								label={item.label}
								url={item.url}
								anime={i + j}
								inViewport={inViewport}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Temp;
