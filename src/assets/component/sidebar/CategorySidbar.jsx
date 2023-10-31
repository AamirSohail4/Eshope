import './test.css';
import { Link } from 'react-router-dom';

export const CategorySidbar = () => {
	const openNav = () => {
		document.getElementById('mySidepanel').style.width = '250px';
	};

	function closeNav() {
		document.getElementById('mySidepanel').style.width = '0';
	}
	return (
		<div className='mystye'>
			<h3>sidbar</h3>

			<div id='mySidepanel' className='sidepanel'>
				<Link to='' className='closebtn' onClick={closeNav}>
					×
				</Link>
				<a href='#'>About</a>
				<a href='#'>Services</a>
				<a href='#'>Clients</a>
				<a href='#'>Contact</a>
			</div>

			<button className='openbtn' onClick={openNav}>
				☰ Toggle Sidepanel
			</button>
			<h2>Collapsed Sidepanel</h2>
			<p>Click on the hamburger menu/bar icon to open the sidepanel.</p>
		</div>
	);
};
