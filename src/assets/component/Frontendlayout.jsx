import './style/frontendlayout.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar/Navbar';
import { Footer } from './footer/Footer';
export const Frontendlayout = () => {
	return (
		<div className='main-frontendlayout'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};
