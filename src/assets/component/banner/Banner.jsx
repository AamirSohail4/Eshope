import './banner.css';
import { Slider } from '../slider/bannerSlider/Slider';
import dic1 from '../../images/sub-banner-1.jpg';
import dic2 from '../../images/sub-banner-2.jpg';
import dic3 from '../../images/sub-banner-3.jpg';

export const Banner = () => {
	return (
		<>
			<div className='divider'></div>
			<div className='heero-banner'>
				<div className='banner-content'>
					<div className='banner-sliderdata'>
						<Slider />
					</div>
					<div className='banner-promotiondata'>
						<div className='banner-promotiondata_leftside'>
							<img src={dic1} alt='image' />
							<div className='hero-center-banner'>
								<div className='subbaner-custom'>
									<div className='discount_title'>25% Discount</div>
									<div className='slide-banner-title'>
										Cosmic Byte Gs430<br></br>Wired Headset
									</div>
								</div>
							</div>
						</div>
						<div className='banner-promotiondata_rightside'>
							<div className='discont-promotions'>
								<img src={dic2} alt='image' />
								<div className='subbanner-custom'>
									<div className='discount_title'>20% Discount</div>
									<div className='slide-banner-title'>
										New Lounge<br></br> Chair
									</div>
									<div className='text-button'>
										<div className='button cms__btn'>
											<a href='/collections/all'>Shop Now</a>
										</div>
									</div>
								</div>
							</div>
							<div className='discont-promotions'>
								<img src={dic3} alt='image' />
								<div className='subbanner-custom'>
									<div className='discount_title'>20% Discount</div>
									<div className='slide-banner-title'>
										New Lounge<br></br> Chair
									</div>
									<div className='text-button'>
										<div className='button cms__btn'>
											<a href='/collections/all'>Shop Now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
