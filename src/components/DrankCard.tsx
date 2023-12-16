import { useDispatch } from 'react-redux';
import Drank from '../models/Drank';
import Image from 'next/image';
import { addToBestelling } from '../redux/slices/bestellingSlice';
import { useEffect } from 'react';

type DrankCardProps = {
  drank: Drank;
}

function DrankCard({ drank }: DrankCardProps) {

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
  const divStyle = {
    color: 'blue',
    height: '25px', // You can use color names, hex codes, rgb values, etc.
  };
 
  return (
    <div className='drank-card'>
      <div color='blue'>
      <div className='drank-card-header bg-red-500'>
        <h2 className='drank-card-name'>{drank.naam}</h2>
      </div>
      </div>
      <Image
        src={drank.afbeelding}
        alt={drank.naam}
        width={200}
        height={200} 
      />
      <p className="text-red-500 tekst-9xl font-bold">
        <span className="font-semibold">Current Price:</span> {drank.currentPrijs}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Previous Price:</span> {drank.previousPrijs}
      </p>
      <p className="text-sm mb-1">
        {drank.alcoholisch ? 'Alcoholic' : 'Non-alcoholic'}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Category:</span> {drank.categorie}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Color:</span> {drank.kleur}
      </p>
      <button className='drank-card-button' onClick={addToBestellingHandler}>Add to cart</button>
    </div>
    )
}

export default DrankCard;