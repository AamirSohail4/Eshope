import './allproduct.css';
import img1 from '../../assets/images/d.jpg';
export const AllProducts = () => {
	return (
		<>
			<div className='all-product-section'>
				<div className='main-heading-all-contents'>
					<h2>All products Availbe Section</h2>
				</div>
				<div className='all-product-content-section'>
					<div className='all-product-product-cart'>
						<div className='product-img'>
							<img src={img1} alt='' />
						</div>
						<div className='product-info-section'>
							<span className='pro-title'>product title</span>
							<div className='rating-star'>*****</div>
							<div className='price'>
								<span className='title-price'>$:300</span>
								<span>
									<del>$2200</del>
								</span>
							</div>
							<div className='add-to-cartbtn-btns'>Add To Cart</div>
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
				</div>
			</div>
		</>
	);
};
