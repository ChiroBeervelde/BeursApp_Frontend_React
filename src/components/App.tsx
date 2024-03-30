'use client'

import React, { ReactNode, use, useEffect } from 'react';
import Header from './Header';
import { hideLoading } from '../redux/slices/bestellingSlice';
import { useDispatch } from 'react-redux';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {

    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(hideLoading());
    // }, [dispatch]);

    return (
        <div className="app">
            <div>
                <Header />
                <main>{children}</main>
            </div>
        </div>
    )
}

export default App;
