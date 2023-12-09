'use client';
import React from 'react';
import{dranken} from '@/src/utils/dranken';
import Drank from '@/src/models/Drank';
import DrankCard from '@/src/components/DrankCard';
import BestellingSidebar from '@/src/components/BestellingSidebar';


export default function DrankenPage() {
  const { dranken: drinks } = dranken;

  return (
    <div className="dranken">
      <div className="dranken-grid">
        {drinks.map((drank: Drank) => (
          <DrankCard key={drank.id} drank={drank} />
        ))}
        
      </div>
      <div className="dranken-sidebar">
        <BestellingSidebar />
      </div>
    </div>
  );
};