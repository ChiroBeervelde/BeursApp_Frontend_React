'use client'
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BestellingItem from "../models/BestellingItem";
import { Bars } from 'react-loader-spinner'


function BestellingSidebar() {
  const {loading, bestellingItems, totalPrice} = useSelector((state: RootState) => state.bestelling); 

  return (
    <div className='bestelling-sidebar'>
      {loading ? (
        <Bars
        height="20"
        width="20"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      ) : bestellingItems.length === 0 ? (
        <>
          <div className="bestelling-sidebar-header">
            Bestelling is leeg
          </div>
        </>
      ) : (
        <>
          <div className="bestelling-sidebar-header">
            Bestelling
          </div>
          <div className="bestelling-sidebar-body">
            Aantal items: {bestellingItems.reduce((a: number, c: BestellingItem) => a + c.aantal, 0)}
            {bestellingItems.map((item: BestellingItem) => (
              <div key={item.id} className="bestelling-sidebar-item">
                {item.id}
              </div>
            ))}
          </div>
          <div className="bestelling-sidebar-footer">
            <div className="bestelling-sidebar-total">
              Totaal: €{totalPrice.toFixed(2)}
            </div>
          </div> 
          </>
      )}
    </div>
  );
  }
  
  export default BestellingSidebar;