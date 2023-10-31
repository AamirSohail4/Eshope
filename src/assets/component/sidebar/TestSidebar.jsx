import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
export const TestSidebar = () => {
	return (
		<div className='category_sidbar'>
			<div className='sidbar_header'>
				<h3>Brows All Category</h3>
				<span>
					<Icon icon='fa6-solid:x' />
				</span>
			</div>
			<div className='sidbar_body'>
				<ul>
					<li>
						<Link to=''>Fashion</Link>
					</li>
					<li>
						<Link to=''>Health </Link>
					</li>
					<li>
						<Link to=''>Electronics</Link>
					</li>
					<li>
						<Link to=''>Furniture</Link>
					</li>
					<li>
						<Link to=''>Jewelery</Link>
					</li>
					<li>
						<Link to=''>Sports Wear</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
