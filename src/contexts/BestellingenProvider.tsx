import {createContext, ReactNode, useCallback, useContext, useMemo, useState} from 'react';
import * as bestellingApi from '@/api/bestellingen';
import Bestelling from "@/models/Bestelling";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {clearBestelling} from "@/redux/slices/bestellingSlice";
import { useDranken } from "@/contexts/DrankenProvider";


interface BestellingContextType {
	bestellingen: Bestelling[];
	error: any;
	loading: boolean;
	createBestelling: any;
}

export const BestellingContext = createContext({} as BestellingContextType);
export const useBestellingen = () => useContext(BestellingContext);

export const BestellingProvider = ({children}: { children: ReactNode }) => {
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	const [initialLoad, setInitialLoad] = useState(false);
	const [bestellingen, setBestellingen] = useState<Bestelling[]>([]);
	const {bestellingItems} = useSelector((state: RootState) => state.bestelling);
	const dispatch = useDispatch()
	const { refreshDranken } = useDranken();



	// const refreshDranken = useCallback(async () => {
	// 	try {
	// 		setError(undefined);
	// 		setLoading(true);
	// 		const data = await drankenApi.getDranken();
	// 		console.log(data)
	// 		console.log(data)
	// 		setDranken(data);
	// 		return data;
	// 	} catch (error) {
	// 		setError(error);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// }, []);
	//
	// useEffect(() => {
	// 	if (!initialLoad) {
	// 		refreshDranken();
	// 		setInitialLoad(true);
	// 	}
	// }, [initialLoad, refreshDranken]);

	const createBestelling = useCallback(async () => {
		setError(undefined);
		setLoading(true);
		try {
			console.log(bestellingItems)
			const data = await bestellingApi.saveBestelling(
				Date.now(),
				bestellingItems
			);
			if (data) {
				console.log(data)

				dispatch(clearBestelling())
				refreshDranken();
				return data;
			}
		} catch (error) {
			console.error(error);
			throw error;
		} finally {
			setLoading(false)
		}
	}, [bestellingItems]);

	const value = useMemo(() => ({
		bestellingen,
		error,
		loading,
		createBestelling,
	}), [bestellingen, error, loading, createBestelling]);

	return (
		<BestellingContext.Provider value={value}>
			{children}
		</BestellingContext.Provider>
	);
};
