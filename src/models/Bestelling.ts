import BestellingItem from "@/models/BestellingItem";

export default interface Bestelling {
	bestelDatum: number;
	bestellingItems: BestellingItem[];
}