import './brandbaner.css';
import img1 from '../../images/cms-banner-1.jpg';
import img2 from '../../images/cms-banner-2.jpg';
import img3 from '../../images/cms-banner-3.jpg';
export const Brandbaner = () => {
	return (
		<div className='brand_banner'>
			<div className='product-banner-section'>
				<div className='sub-banner-product'>
					<div className='sub-banner-img'>
						<img src={img1} alt='' />
					</div>
					<div className='subbanner-customs-products'>
						<div className='discount_title'>Super Furniture</div>
						<div className='slide-banner-title'>
							Special Offer<br></br>40% Off
						</div>
						<div className='text-button'>
							<a href='/collections/all'>Shop Now</a>
						</div>
					</div>
				</div>
				<div className='sub-banner-product'>
					<div className='sub-banner-img'>
						<img src={img2} alt='' />
					</div>
					<div className='subbanner-customs-products'>
						<div className='discount_title'>Up To 35% Off</div>
						<div className='slide-banner-title'>
							Improved Smart<br></br>
							Speaker
						</div>
						<div className='text-button'>
							<a href='/collections/all'>Shop Now</a>
						</div>
					</div>
				</div>
				<div className='sub-banner-product'>
					<div className='sub-banner-img'>
						<img src={img3} alt='' />
					</div>
					<div className='subbanner-customs-products'>
						<div className='discount_title'>Flat 30% Off</div>
						<div className='slide-banner-title'>
							Huarache Mens<br></br>
							Shoes
						</div>
						<div className='text-button'>
							<a href='/collections/all'>Shop Now</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
