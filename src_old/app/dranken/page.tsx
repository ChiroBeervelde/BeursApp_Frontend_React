'use client';

import React from 'react';
import {dranken, dranken as mockDranken} from '@/src/utils/dranken';
import Drank from '@/src/models/Drank';
import DrankCard from '@/src/components/DrankCard';
import BestellingSidebar from '@/src/components/BestellingSidebar';
import {useDranken} from "@/src/contexts/DrankenProvider";


export default function DrankenPage() {
// 	const {dranken: mockDrinks} = mockDranken;
//
// 	return (
// 		<div className="dranken">
// 			<div className="dranken-grid">
// 				{mockDrinks.map((drank: Drank) => (
// 					<DrankCard key={drank.id} drank={drank} />
// 				))}
//
// 			</div>
// 			<div className="dranken-sidebar">
// 				<BestellingSidebar />
// 			</div>
// 		</div>
// 	);

	const {dranken: dranken, loading, error} = useDranken();

	if (loading) {
		console.log('loading')
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="dranken">
			<div className="dranken-grid">
				{dranken?.map((drank: Drank) => (
					<DrankCard key={drank.id} drank={drank}/>
				))}

			</div>
			<div className="dranken-sidebar">
				<BestellingSidebar/>
			</div>
		</div>
	);
};