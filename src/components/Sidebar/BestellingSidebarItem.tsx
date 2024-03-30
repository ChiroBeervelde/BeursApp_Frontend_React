'use client'

import { useDispatch } from "react-redux";
import BestellingItem from "@/models/BestellingItem";
import { decreaseQuantityBestellingItem, increaseQuantityBestellingItem } from "@/redux/slices/bestellingSlice";

function BestellingSidebarItem( item : BestellingItem) {

    const dispatch = useDispatch()

    const decreaseQuantityBestellingHandler = () => {
        dispatch(decreaseQuantityBestellingItem(item.id));
    }
    
    const increaseQuantityBestellingHandler = () => {
        dispatch(increaseQuantityBestellingItem(item.id));
    }

  return (
    <div className='bestelling-sidebar-item'>
        <div className='bestelling-sidebar-item-name'>
            <div className='bestelling-sidebar-item-name'>{item.naam}</div>
        </div>
        <div className='bestelling-sidebar-item-aantal'>
            <button className='bestelling-sidebar-item-subtract-button' onClick={decreaseQuantityBestellingHandler}>-</button>
            <div className='bestelling-sidebar-item-aantal'>{item.aantal}</div>
            <button className='bestelling-sidebar-item-add-button' onClick={increaseQuantityBestellingHandler}>+</button>
        </div>
        <div className="bestelling-sidebar-item-prijs">
            <div className="bestelling-sidebar-item-prijs-label">Totaal: </div>
            <div className='bestelling-sidebar-item-prijs-total'>€{item.totaalPrijs}</div>
        </div>
    </div>
  )
}

export default BestellingSidebarItem;