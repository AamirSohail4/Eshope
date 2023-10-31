import './allProductSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import img1 from '../../../images/shirt.jpg';

export const AllProductSlider = () => {
	return (
		<div className='products-section'>
			<h2>All Fresh Latest Products Daily!</h2>

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
						spaceBetween: 10,
					},
				}}
			>
				<SwiperSlide>
					<div className='product-cart'>
						<div className='product-img'>
							<img src={img1} alt='' />
						</div>
						<div className='product-description'>
							<span className='product-title'>product title</span>
							<div className='rating-star'>*****</div>
							<div className='price-section'>
								<span className='title-price'>$:300</span>
								<span>
									<del>$2200</del>
								</span>
							</div>
							<div className='add-to_cartbutton'>
								<button type='submit'>AddtoCart</button>
							</div>
							<div className='hear-icons'>
								<div className='icon-box-pro'>
									<span>
										<i className='fa-regular fa-heart'></i>
									</span>
								</div>
								<div className='icon-box-pro'>
									<span>
										<i className='fa-solid fa-retweet'></i>
									</span>
								</div>
								<div className='icon-box-pro'>
									<span>
										<i
											className='fa-solid fa-arrows-to-circle'
											id='arrow-circule'
										></i>
									</span>
								</div>
							</div>
							<div className='off-price'>
								<span>-$30%</span>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
