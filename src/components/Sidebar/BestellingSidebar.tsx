'use client'
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/redux/store";
import BestellingItem from "@/models/BestellingItem";
import BestellingSidebarItem from "./BestellingSidebarItem";
import {useEffect} from "react";
import {dispatch} from "preline/src/utils";
import {useBestellingen} from "@/contexts/BestellingenProvider";
import { clearBestelling } from "@/redux/slices/bestellingSlice";


function BestellingSidebar() {
  const {loading, bestellingItems, totalPrice} = useSelector((state: RootState) => state.bestelling);
  const { createBestelling } = useBestellingen();
  const dispatch = useDispatch()

  useEffect(() => {
    async function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        await createBestelling()
      }
      if (event.key === 'Escape') {
        dispatch(clearBestelling())
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, bestellingItems]);

  return (
    <div className='bestelling-sidebar'>
      {loading ? (
          <div
              className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
              role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
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
            <div className="bestelling-sidebar-total">
              Totaal: €{totalPrice.toFixed(2)}
            </div>
            <div className="bestelling-sidebar-body">
              Aantal items: {bestellingItems.reduce((a: number, c: BestellingItem) => a + c.aantal, 0)}
              {bestellingItems.map((item: BestellingItem) => (
                  <div key={item.id}>
                    <BestellingSidebarItem {...item} />
                  </div>
              ))}
            </div>
          </>
      )}
    </div>
  );
}

export default BestellingSidebar;