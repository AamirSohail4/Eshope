// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './brandslider.css';
import img1 from '../../../images/brands/br1.avif';
import img2 from '../../../images/brands/br2.avif';
import img3 from '../../../images/brands/br3.avif';
import img4 from '../../../images/brands/br4.avif';
import img5 from '../../../images/brands/br5.avif';
// import required modules
import { Navigation } from 'swiper/modules';

export const BrandSlider = () => {
	return (
		<div className='brandslider'>
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
						slidesPerView: 6,
						spaceBetween: 80,
					},
				}}
			>
				<SwiperSlide>
					<img src={img2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img5} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img1} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img2} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img3} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img4} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={img5} alt='' />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
