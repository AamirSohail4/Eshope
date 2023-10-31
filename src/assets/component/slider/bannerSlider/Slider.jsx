import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import slid1 from '../../../images/slider-main-1.jpg';
import slid2 from '../../../images/slider-main-2.webp';

export const Slider = () => {
	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				modules={[Navigation]}
				className='mySwiper'
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 1,
						spaceBetween: 30,
					},
				}}
			>
				<SwiperSlide>
					<img src={slid1} alt='' />
					<div className='main-slider-content'>
						<span>Starting At Only $500</span>
						<h2 className='banner__heading h0'>
							Made New Design<br></br>
							For Fashion
						</h2>
						<div className='banner-buttons'>
							<button className='button'>Shop Now</button>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slid2} alt='' />
					<div className='main-slider-content'>
						<span>Starting At Only $3500</span>
						<h2 className='banner__heading h0'>
							Made New Design<br></br>
							For Camra
						</h2>
						<div className='banner-buttons'>
							<button className='button'>Shop Now</button>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
