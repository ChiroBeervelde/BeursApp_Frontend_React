'use client'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BestellingItem from "../models/BestellingItem";
import BestellingSidebarItem from "./BestellingSidebarItem";


function BestellingSidebar() {
  const {loading, bestellingItems, totalPrice} = useSelector((state: RootState) => state.bestelling); 

  return (
    <div className='bestelling-sidebar'>
      {loading ? (
          <div>Loading...</div>
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
          <div className="bestelling-sidebar-body" style={{maxHeight: '500px', overflowY: 'auto'}}>
            Aantal items: {bestellingItems.reduce((a: number, c: BestellingItem) => a + c.aantal, 0)}
            {bestellingItems.map((item: BestellingItem) => (
              <div key={item.id}>
                <BestellingSidebarItem {...item} />      
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