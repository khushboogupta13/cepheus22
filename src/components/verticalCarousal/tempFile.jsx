import React, { useState, useCallback, CSSProperties, useEffect, useRef } from 'react';
import FlipCard from '../flipCards/flipCards';
import { useInViewport } from 'react-in-viewport';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// install Swiper modules
SwiperCore.use([Pagination]);

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
	const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 5, slidesToScroll: 1, width: 700 };
	// const image = images.reverse();
	return (
		<div className='carousalDiv'>
			<div className='colDiv' ref={myRef}>
				{images.map((items, j) => (
					<div className='rowDiv' style={{ position: 'relative' }}>
						{/* <Swiper slidesPerView={5} spaceBetween={10}> */}
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
					</div>
				))}
			</div>
		</div>
	);
};

export default Temp;