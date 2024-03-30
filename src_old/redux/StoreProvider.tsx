'use client'

import React, { ReactNode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";

interface Props {
    children: ReactNode;
}
  
function StoreProvider({ children }: Props) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}  
  
export default StoreProvider;
