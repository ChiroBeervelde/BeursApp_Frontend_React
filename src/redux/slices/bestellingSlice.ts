import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Drank from "@/src/models/Drank";
import BestellingItem from "@/src/models/BestellingItem";

interface BestellingState {
  loading: boolean;
  bestellingItems: BestellingItem[];
  totalPrice: number;
}

const initialState: BestellingState = {
  loading: true,
  bestellingItems: [],
  totalPrice: 0,
};

const bestellingSlice = createSlice({
  name: "bestelling",
  initialState,
  reducers: {
    addToBestelling: (state, action: PayloadAction<Drank>) => {
      const item : Drank= action.payload;
      const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === item.id);
      if (existItem) {
        existItem.aantal++;
    } else {
      const newItem: BestellingItem = {
        id: item.id,
        naam: item.naam,
        prijsPerArtikel: item.currentPrijs,
        aantal: 1,
        totaalPrijs: item.currentPrijs,
      };
      state.bestellingItems.push(newItem);
      }
      state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs * item.aantal, 0)
      localStorage.setItem('bestelling', JSON.stringify(state));
    },
    removeFromBestelling: (state, action) => {
      const item : Drank= action.payload;
      const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === item.id);
      if (existItem) {
        existItem.aantal++;
        if (existItem.aantal === 0) {
          state.bestellingItems = state.bestellingItems.filter((bestellingItem: BestellingItem) => bestellingItem.id !== existItem.id);
        }
      } 
      state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs * item.aantal, 0)
      localStorage.setItem('bestelling', JSON.stringify(state));
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { addToBestelling, removeFromBestelling, hideLoading } = bestellingSlice.actions;
export default bestellingSlice.reducer;