'use client';
import React from 'react';
import {dranken as mockDranken} from '@/utils/dranken';
import Drank from '@/models/Drank';
import DrankCard from '@/components/Dranken/DrankCard';
import BestellingSidebar from '@/components/Sidebar/BestellingSidebar';
import {useDranken} from "@/contexts/DrankenProvider";


export default function DrankenPage() {
	const {dranken: mockDrinks} = mockDranken;

	// return (
	// 	<div className="dranken">
	// 		<div className="dranken-grid">
	// 			{mockDrinks.map((drank: Drank) => (
	// 				<DrankCard key={drank.id} drank={drank}/>
	// 			))}
	//
	// 		</div>
	// 		<div className="dranken-sidebar">
	// 			<BestellingSidebar/>
	// 		</div>
	// 	</div>
	// );

	const {dranken: dranken, loading, error} = useDranken();

	if (loading) {
		return (
			<div
				className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
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
					<DrankCard key={drank.id} drank={drank}/>
				))}
			</div>
			<div className="dranken-sidebar">
				<BestellingSidebar/>
			</div>
		</div>
	);
};