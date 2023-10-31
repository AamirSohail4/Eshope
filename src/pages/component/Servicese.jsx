import img1 from '../../assets/images/service1_64x.png';
import img2 from '../../assets/images/service2_64x.png';
import img3 from '../../assets/images/service1_64x.png';
import './servicese.css';
export const Servicese = () => {
	return (
		<section>
			<div className='servvices-content'>
				<div className='service-img'>
					<img src={img1} />
				</div>
				<div className='service-description'>
					<div className='service-title'>Worldwide Shipping</div>
					<div className='service-subtitle'>
						Contrary to popular belief Lorem Ipsum not simply random text
					</div>
				</div>
			</div>
			<div className='servvices-content'>
				<div className='service-img'>
					<img src={img2} />
				</div>
				<div className='service-description'>
					<div className='service-title'>24/7 Support Services</div>
					<div className='service-subtitle'>
						Contrary to popular belief Lorem Ipsum not simply random text
					</div>
				</div>
			</div>
			<div className='servvices-content'>
				<div className='service-img'>
					<img src={img3} />
				</div>
				<div className='service-description'>
					<div className='service-title'>Offers And Discounts</div>
					<div className='service-subtitle'>
						Contrary to popular belief Lorem Ipsum not simply random text
					</div>
				</div>
			</div>
		</section>
	);
};
