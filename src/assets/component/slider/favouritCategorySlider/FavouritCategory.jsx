import './favourit.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import img5 from '../../../images/shirt.jpg';

export const FavouritCategory = () => {
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
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
			>
				<SwiperSlide></SwiperSlide>
			</Swiper>
		</>
	);
};
