import {useDispatch} from 'react-redux';
import Drank from '@/models/Drank';
import {addToBestelling} from '@/redux/slices/bestellingSlice';
import {useEffect} from 'react';

type DrankCardProps = {
	drank: Drank;
}

function DrankCard({drank}: DrankCardProps) {

	const dispatch = useDispatch()

	const addToBestellingHandler = () => {
		dispatch(addToBestelling(drank))
	}

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === drank.hotkey) {
				dispatch(addToBestelling(drank))
			}
		}

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [drank, dispatch]);

	return (
		<div className='drank-card'>
			<div className='drank-card-content'>
				<div className={`drank-card-header`}>
					<h2 className='drank-card-name'>{drank.naam} - {drank.hotkey}</h2>
				</div>
				<img className='drank-card-image' src={drank.afbeelding} alt={drank.naam}/>
				<p className={`${drank.vorigePrijs > drank.huidigePrijs ? "text-green-500" : "text-red-500"}`}>
					<span className="font-semibold tekst-9xl">Current Price:</span> {drank.huidigePrijs}
				</p>
			</div>
			<button className='drank-card-button' onClick={addToBestellingHandler}>Add to cart</button>
		</div>
	)
}

export default DrankCard;