'use client';
import React, { useEffect } from 'react';
import { dranken as mockDranken } from '@/utils/dranken';
import { Bar } from 'react-chartjs-2';
import Drank from '@/models/Drank';
import { useDranken } from "@/contexts/DrankenProvider";
import backgroundImage from '../../../public/images/chiro_beer/ChiroBeerveldeBeer_bier.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import BeursCard from '@/components/Beurs/BeursCard';


export default function BeursOverichtPage() {
  const { dranken: mockDrinks } = mockDranken;
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

  if (loading) {
    return (
      <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="dranken">
      <div className="dranken-grid">
        {dranken?.map((drank: Drank) => (
          <BeursCard key={drank.id} drank={drank} />
        ))}
      </div>
    </div>
  );
};