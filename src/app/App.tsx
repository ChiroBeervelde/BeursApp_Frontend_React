'use client'

import React, {ReactNode, use, useEffect} from 'react';
import Header from '../components/Header/header';
import {hideLoading} from '../redux/slices/bestellingSlice';
import {useDispatch} from 'react-redux';
import {DrankenProvider} from "@/contexts/DrankenProvider";
import {BestellingProvider} from "@/contexts/BestellingenProvider";

interface AppProps {
	children: ReactNode;
}

function App({children}: AppProps) {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(hideLoading());
	}, [dispatch]);

	const shouldHideHeader = () => {
		return location.pathname === '/beursoverzicht';
	};

	return (
		<DrankenProvider>
			<BestellingProvider>
			<div className="app">
				<div>
					{!shouldHideHeader() && <Header />}
					<main>{children}</main>
				</div>
			</div>
			</BestellingProvider>
		</DrankenProvider>
	)
}

export default App;
