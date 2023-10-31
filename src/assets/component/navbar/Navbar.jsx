import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../../images/logo.png';
import '../style/navbar.css';
import { Sidebar } from '../sidebar/Sidebar';

export const Navbar = () => {
	const [sidbarshow, setsidbarShow] = useState(false);
	const handleSidbar = () => {
		setsidbarShow(!sidbarshow);
	};
	return (
		<header>
			{/* <!----Header top Section--> */}
			<div className='header-top-section'>
				<div className='header-top-leftside'>
					<ul>
						<li>
							<Link to='#'>
								<span>
									<Icon icon='ic:baseline-location-on' />
								</span>
								Find Store
							</Link>
						</li>
						<li>
							<Link to='#'>
								<span>
									<Icon icon='fa:envelope-o' />
								</span>
								admin@gmail.com
							</Link>
						</li>
						<li>
							<Link to='#'>Offers&amp;Value</Link>
						</li>
						<li>
							<Link to='#'>Everyday Savers</Link>
						</li>
					</ul>
				</div>
				<div className='header-top-righttside'>
					<div className='dropdown' id='link-store'>
						<button className='dropbtn'>
							Store Link<i className='fa-solid fa-caret-down' id='dropdown'></i>
						</button>
						<div className='dropdown-content' id='dropdown-center'>
							<ul>
								<li>
									<Link to='#'>
										<span>
											<i className='fa-solid fa-location-dot'></i>
										</span>
										Find Store
									</Link>
								</li>
								<li>
									<Link to='#'>
										<span>
											<i className='fa-solid fa-envelope'></i>
										</span>
										admin@gmail.com
									</Link>
								</li>
								<li>
									<Link to='#'>Offers&amp;Value</Link>
								</li>
								<li>
									<Link to='#'>Everyday Savers</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='dropdown'>
						<button className='dropbtn'>
							English<i className='fa-solid fa-caret-down' id='dropdown'></i>
						</button>
						<div className='dropdown-content' id='dropdown-left'>
							<Link to='#'>Urdu</Link>
							<Link to='#'>Germen</Link>
							<Link to='#'>Franch</Link>
						</div>
					</div>
					<div className='dropdown'>
						<button className='dropbtn'>
							Currancy<i className='fa-solid fa-caret-down' id='dropdown'></i>
						</button>
						<div className='dropdown-content' id='dropdown-right'>
							<Link to='#'>USD</Link>
							<Link to='#'>CAT</Link>
							<Link to='#'>PKRY</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <!----Header middle Section--> */}
			<div className='header-middle-section'>
				<div className='header-middle-leftsid'>
					<div className='header-img'>
						<img src={logo} alt='logo' />
					</div>
				</div>
				<div className='header-middle-2endsid'>
					<div className='input-felid'>
						<input id='header-serchbar' placeholder='serch Here Pleae' />
						<button type='submit' id='search-button'>
							Search
						</button>
					</div>
				</div>
				<div className='header-middle-last'>
					<div className='contect-info-section'>
						<span>Need Help?</span>
						<span id='contno'>(+92)98484-494848-343</span>
					</div>
					<div className='Sinup-info-section'>
						<span>My Account</span>
						<span id='sinuplink'>Sin In/Sing Up</span>
					</div>
				</div>
				<div className='header-middle-righttsid'>
					<div className='icon-box'>
						<span>
							<Icon icon='fa6-solid:arrow-right-arrow-left' />
						</span>
						<div className='count-boxt'>0</div>
					</div>
					<div className='icon-box'>
						<span>
							<Icon icon='mdi:heart-outline' />
						</span>
						<div className='count-boxt'>0</div>
					</div>
					<div className='icon-box'>
						<span>
							<Icon icon='fa6-solid:cart-arrow-down' />
						</span>
						<div className='count-boxt'>0</div>
					</div>
				</div>
			</div>
			{/* <!----Header bottom Section--> */}
			<div className='header-bottom-section'>
				<div className='header-bottom-leftsid'>
					<span className='bars'>
						<Icon icon='fa6-solid:bars-staggered' onClick={handleSidbar} />
					</span>

					{sidbarshow && (
						<Sidebar handleSidbar={handleSidbar} sidbarshow={sidbarshow} />
					)}
					<div className='sidbar-section'>
						<button className='dropbtn' id='header-botoom'>
							<span id='boot-header'>Browse All Category</span>
							<Icon
								icon='ant-design:caret-down-filled'
								onClick={handleSidbar}
							/>
						</button>
					</div>
				</div>
				<div className='header-bottom-middleside'>
					<ul>
						<li>
							<a>Home</a>
						</li>
						<li>
							<a>
								<div className='dropdown_newarivalss'>
									<span className='dropdown-parent'>
										<span id='boot-header'>New Arivals</span>
										<Icon icon='ant-design:caret-down-filled' />
									</span>
								</div>
							</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
						<li>
							<a>Apparel</a>
						</li>
						<li>
							<a>More</a>
						</li>
					</ul>
				</div>
				<div className='header-bottom-righttsid'>
					<marquee>
						<a className='list-menu__item' href='/pages/about-us'>
							Free Express International Delivery
						</a>
					</marquee>
				</div>
			</div>
		</header>
	);
};
