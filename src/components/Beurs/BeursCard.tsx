import Drank from '@/models/Drank';
import { useEffect } from 'react';
import { useDranken } from "@/contexts/DrankenProvider";

type BeursCardProps = {
    drank: Drank;
}

function BeursCard({ drank }: BeursCardProps) {
    const { dranken: dranken, loading, error, refreshDranken } = useDranken();

    useEffect(() => {
        const interval = setInterval(() => {
            // This function will be executed every 2 minutes
            console.log('This will run every 2 minutes!');
            refreshDranken();
        }, 2 * 60 * 1000); // 2 minutes in milliseconds

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once after initial render


    return (
        <div className="card">
            <div className="card-header">
                <h2>{drank.naam}</h2>
            </div>
            <div className="card-footer">
                <p>Prijs: ${drank.huidigePrijs}</p>
            </div>
        </div>
    )
}

export default BeursCard;