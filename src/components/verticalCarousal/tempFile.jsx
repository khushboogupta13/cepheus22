import React, { useState, useCallback, useRef } from 'react';
import FlipCard from '../flipCards/flipCards';
import { useInViewport } from 'react-in-viewport';
import './styles.css';
import Slider from 'react-slick';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Pagination } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// // install Swiper modules
// SwiperCore.use([Pagination]);
/* eslint-disable */
const Temp = (props) => {
	const { images } = props;
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
		slidesToShow: 5,
		slidesToScroll: 1,
		// width: 700,
	};
	// const image = images.reverse();
	return (
		<div className='carousalDiv'>
			<div className='colDiv' ref={myRef}>
				{images.map((items, j) => (
					<div className='rowDiv' style={{ zIndex: `${100 - j}` }}>
						{/* <Swiper slidesPerView={5} spaceBetween={10}> */}
						<Slider
							{...settings}
							{...{
								responsive: [
									{
										breakpoint: 768,
										settings: {
											slidesToShow: 4,
											slidesToScroll: 1,
											infinite: false,
											dots: false,
										},
									},
								],
							}}>
							{items.map((item, i) => (
								// <SwiperSlide style={{ zIndex: 10 }}>
								<FlipCard
									front={`${item.front}`}
									back={`${item.back}`}
									zIndex={100 - j}
									order={j}
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
				{images.map((items, j) => (
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
								zIndex={100 - j - i}
								order={j}
								anime={i + j}
								inViewport={inViewport}
							/>
							// </SwiperSlide>
						))}
						{/* </Swiper> */}
						{/* </Slider> */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Temp;
