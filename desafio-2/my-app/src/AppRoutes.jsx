import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Home';

export const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
		</Routes>
	</BrowserRouter>
);

export default AppRoutes;