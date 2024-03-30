import {
	createContext,
	useState,
	useEffect,
	useCallback,
	useContext,
	useMemo,
	ReactNode
} from 'react';
import * as drankenApi from '@/api/drank';
import Drank from "@/models/Drank";

interface DrankenContextType {
	dranken: Drank[];
	error: any;
	loading: boolean;
}

export const DrankenContext = createContext<DrankenContextType>({} as DrankenContextType);
export const useDranken = () => useContext(DrankenContext);

export const DrankenProvider = ({ children }: { children: ReactNode }) => {
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(false);
	const [initialLoad, setInitialLoad] = useState(false);
	const [dranken, setDranken] = useState<Drank[]>([]);

	const refreshDranken = useCallback(async () => {
		try {
			setError(undefined);
			setLoading(true);
			const data = await drankenApi.getDranken();
			console.log(data)
			console.log(data)
			setDranken(data);
			return data;
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (!initialLoad) {
			refreshDranken();
			setInitialLoad(true);
		}
	}, [initialLoad, refreshDranken]);

	const value = useMemo(() => ({
		dranken,
		error,
		loading,
	}), [dranken, error, loading]);

	return (
		<DrankenContext.Provider value={value}>
			{children}
		</DrankenContext.Provider>
	);
};
