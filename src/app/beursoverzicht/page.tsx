'use client';
import React from 'react';
import{dranken} from '@/src/utils/dranken';
import { Bar } from 'react-chartjs-2';
import Drank from '@/src/models/Drank';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


export default function BeursOverichtPage() {
  const { dranken: drinks } = dranken;

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = drinks.map((drank:Drank) => drank.naam);
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: drinks.map((drank:Drank) => drank.currentPrijs),
        backgroundColor: drinks.map((drank:Drank) => drank.kleur),
      }
    ],
  };

  return (
    <div className="beursoverzicht">
       <a href="https://www.chartjs.org/docs/latest/" target="_blank">https://www.chartjs.org/docs/latest/</a>
       <Bar options={options} data={data} />
    </div>
  );
};