import { Routes, Route } from 'react-router-dom';
import { Frontendlayout } from '../assets/component/Frontendlayout';
import { Home } from '../pages/Home';
import { Nomatch } from '../pages/Nomatch';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Frontendlayout />}>
				<Route index element={<Home />} />
				<Route path='*' element={<Nomatch />} />
			</Route>
		</Routes>
	);
};
