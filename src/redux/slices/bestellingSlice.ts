import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import Drank from "@/src/models/Drank";
import BestellingItem from "@/src/models/BestellingItem";

interface BestellingState {
	[x: string]: any;

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
			const item: Drank = action.payload;
			const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === item.id);
			if (existItem) {
				existItem.aantal++;
				existItem.totaalPrijs = existItem.prijsPerArtikel * existItem.aantal;
			} else {
				const newItem: BestellingItem = {
					id: item.id,
					naam: item.naam,
					prijsPerArtikel: item.huidigePrijs,
					aantal: 1,
					totaalPrijs: item.huidigePrijs,
				};
				state.bestellingItems.push(newItem);
			}
			state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs, 0)
			localStorage.setItem('bestelling', JSON.stringify(state));
		},
		increaseQuantityBestellingItem: (state, action: PayloadAction<number>) => {
			const itemId: number = action.payload;
			const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === itemId);
			if (existItem) {
				existItem.aantal++;
				existItem.totaalPrijs = existItem.prijsPerArtikel * existItem.aantal;
			}
			state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs, 0)
			localStorage.setItem('bestelling', JSON.stringify(state));
		},
		removeFromBestelling: (state, action: PayloadAction<Drank>) => {
			const item: Drank = action.payload;
			const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === item.id);
			if (existItem) {
				existItem.aantal--;
				existItem.totaalPrijs = existItem.prijsPerArtikel * existItem.aantal;
				if (existItem.aantal === 0) {
					state.bestellingItems = state.bestellingItems.filter((bestellingItem: BestellingItem) => bestellingItem.id !== existItem.id);
				}
			}
			state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs, 0)
			localStorage.setItem('bestelling', JSON.stringify(state));
		},
		decreaseQuantityBestellingItem: (state, action: PayloadAction<number>) => {
			const itemId: number = action.payload;
			const existItem = state.bestellingItems.find((bestellingItem: BestellingItem) => bestellingItem.id === itemId);
			if (existItem) {
				existItem.aantal--;
				existItem.totaalPrijs = existItem.prijsPerArtikel * existItem.aantal;
				if (existItem.aantal === 0) {
					state.bestellingItems = state.bestellingItems.filter((bestellingItem: BestellingItem) => bestellingItem.id !== existItem.id);
				}
			}
			state.totalPrice = state.bestellingItems.reduce((acc, item: BestellingItem) => acc + item.totaalPrijs, 0)
			localStorage.setItem('bestelling', JSON.stringify(state));
		},
		hideLoading: (state) => {
			state.loading = false;
		},
	},
});

export const {
	addToBestelling,
	increaseQuantityBestellingItem,
	removeFromBestelling,
	decreaseQuantityBestellingItem,
	hideLoading
} = bestellingSlice.actions;
export default bestellingSlice.reducer;