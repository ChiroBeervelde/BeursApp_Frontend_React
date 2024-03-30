import {axios} from ".";
import BestellingItem from "@/models/BestellingItem";

export const saveBestelling = async (bestelDatum: number, bestellingItems: BestellingItem[]) => {
	const {data} = await axios({
		method: 'post',
		url: `bestellingen`,
		data: {
			bestelDatum,
			bestellingItems
		},
	});
	return data;
};