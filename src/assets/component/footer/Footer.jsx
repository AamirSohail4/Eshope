import './footer.css';
import card2 from '../../images/smart2.jpg';
import card3 from '../../images/smart3.jpg';
import card4 from '../../images/smart4.jpg';
import { Icon } from '@iconify/react';

export const Footer = () => {
	return (
		<>
			<div className='company-information-section'>
				<div className='company-information-inner-section1'>
					<div className='company-info-heading'>
						<h5>Need Help?</h5>
					</div>
					<div className='company-info-guid'>
						<span>
							Bigsoho - Super Mega Store <br></br>507-Union Trade Centre
							<br></br>France
						</span>
					</div>
					<div className='company-email'>
						<a href=''>bigsoho@exampledemo.com</a>
					</div>
					<div className='company-info-mobile'>
						<span>(+91) 9876-543-210</span>
					</div>
					<div className='company-info-icon-section'>
						<Icon icon='logos:facebook' />
						<Icon icon='bxl:youtube' />
						<Icon icon='mingcute:linkedin-line' />
						<Icon icon='iconoir:twitter' />
						<Icon icon='iconoir:instagram' />
						<Icon icon='mingcute:paypal-line' />
					</div>
				</div>
				<div className='company-information-inner-section2'>
					<div className='company-info-heading'>
						<h5>Need Help?</h5>
					</div>
					<div className='ul-section'>
						<ul>
							<li>Prices drop</li>
							<li>New products</li>
							<li>Best sales</li>
							<li>Contact us</li>
							<li>Sitemap</li>
						</ul>
					</div>
				</div>
				<div className='company-information-inner-section3'>
					<div className='company-info-heading'>
						<h5>Products</h5>
					</div>
					<div className='ul-section'>
						<ul>
							<li>Prices drop</li>
							<li>New products</li>
							<li>Best sales</li>
							<li>Contact us</li>
							<li>Sitemap</li>
						</ul>
					</div>
				</div>

				<div className='company-information-inner-section4'>
					<div className='company-info-heading'>
						<h5>Your Account</h5>
					</div>
					<div className='ul-section'>
						<ul>
							<li>Prices drop</li>
							<li>New products</li>
							<li>Best sales</li>
							<li>Contact us</li>
							<li>Sitemap</li>
						</ul>
					</div>
				</div>
				<div className='company-information-inner-section5'>
					<div className='company-info-heading'>
						<h5>Join Newsleter</h5>
					</div>
					<div className='news-leter-section'>
						<span>
							Subscribe to our latest newsletter to get news about special
							discounts.
						</span>
					</div>
					<div className='serch-section'>
						<input
							type='sear'
							className='footer-serch-bar'
							placeholder='Search Here'
						/>
						<button type='submit' className='btn-serach'>
							Subscribe
						</button>
					</div>
				</div>
			</div>
			<div className='footer-section'>
				<div className='left-footer-section'>
					<ul>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Terms And Condition</li>
						<li>Store</li>
					</ul>
				</div>
				<div className='center-footer-section'>
					<spa>Powered by Shopify © 2023, Bigsoho - Multipurpose Store</spa>
				</div>
				<div className='right-footer-section'>
					<div className='smart-car-footer'>
						<img src={card2} alt='' />
					</div>
					<div className='smart-car-footer'>
						<img src={card3} alt='' />
					</div>
					<div className='smart-car-footer'>
						<img src={card4} alt='' />
					</div>
					<div className='smart-car-footer'>
						<img src={card3} alt='' />
					</div>
				</div>
			</div>
		</>
	);
};
