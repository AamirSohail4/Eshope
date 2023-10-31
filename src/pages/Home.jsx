import './style.css';
import { Banner } from '../assets/component/banner/Banner';

import { Sidebar } from '../assets/component/sidebar/Sidebar';
import { Servicese } from './component/Servicese';
import { FavouritCategory } from '../assets/component/slider/favouritCategorySlider/FavouritCategory';
import { AllProductSlider } from '../assets/component/slider/allProductSlider/AllProductSlider';
import { Brandbaner } from '../assets/component/banner/Brandbaner';
import { AllProducts } from './component/AllProducts';
import { BrandSlider } from '../assets/component/slider/BrandSlider/BrandSlider';

export const Home = () => {
	return (
		<>
			<Banner />
			<Sidebar />
			<Servicese />
			<FavouritCategory />
			<AllProductSlider />
			<Brandbaner />
			<AllProducts />
			<BrandSlider />
			<div className='divider'></div>
		</>
	);
};
