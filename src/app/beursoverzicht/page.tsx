'use client';
import React from 'react';
import{dranken} from '@/src/utils/dranken';



export default function BeursOverichtPage() {
  const { dranken: drinks } = dranken;

  return (
    <div className="beursoverzicht">
       <a href="https://www.chartjs.org/docs/latest/" target="_blank">https://www.chartjs.org/docs/latest/</a>
    </div>
  );
};