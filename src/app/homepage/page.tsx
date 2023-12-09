"use client"; // This is a client component 👈🏽

import Drank from '../../models/Drank';
import DrankCard from '../../components/DrankCard';
import Bestelling from '../../models/Bestelling';
import { useEffect, useState } from 'react';
import BestellingCard from '@/src/components/BestellingCard';
import { init } from 'next/dist/compiled/webpack/webpack';

export default function HomePage() {

  const [bestelling, setBestelling] = useState<Bestelling>({
    id: 0,
    bestellingsItem: [{id: 0, drank: Cola, aantal: 1, totaalPrijs: 2.5}],
    totaalPrijs: 0
  });

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "f") {
        console.log("f");
        // Do something when the "f" key is pressed
      } else if (event.key === "j") {
        // Do something when the "j" key is pressed
      } else if (event.key === "l") {
        // Do something when the "l" key is pressed
      } else if (event.key === "s") {
        // Do something when the "s" key is pressed
      } else if (event.key === "h") {
        // Do something when the "h" key is pressed
      } else if (event.key === "c") {
        // Do something when the "c" key is pressed
      } else if (event.key === "o") {
        // Do something when the "o" key is pressed
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div>TEST HOMEPAGE</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {dranken.map((drank) => (
        <DrankCard key={drank.id} drank={drank} />
      ))}
    </div>
    <BestellingCard bestelling={bestelling} ></BestellingCard>
    </div>
  );
}

const Cola : Drank = {
  id: 1,
  naam: "Cola",
  currentPrijs: 2.5,
  previousPrijs: 2.25,
  categorie: "frisdrank",
  alcoholisch: false,
  kleur: "#000000",
  afbeelding: null,
  hotkey: "c"
}

const StellaArtois : Drank = {
  id: 2,
  naam: "Stella Artois",
  currentPrijs: 3.5,
  previousPrijs: 3.25,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#ffff00",
  afbeelding: null,
  hotkey: "a"
}

const Duvel : Drank = {
  id: 3,
  naam: "Duvel",
  currentPrijs: 4.5,
  previousPrijs: 4.25,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#ff0000",
  afbeelding: null,
  hotkey: "d"
}

const Fanta : Drank = {
  id: 4,
  naam: "Fanta",
  currentPrijs: 2.25,
  previousPrijs: 2,
  categorie: "frisdrank",
  alcoholisch: false,
  kleur: "#ff6600",
  afbeelding: null,
  hotkey: "f"
}

const Jupiler : Drank = {
  id: 5,
  naam: "Jupiler",
  currentPrijs: 3.75,
  previousPrijs: 3.5,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#ffcc00",
  afbeelding: null,
  hotkey: "j"
}

const Leffe : Drank = {
  id: 6,
  naam: "Leffe",
  currentPrijs: 4.75,
  previousPrijs: 4.5,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#663300",
  afbeelding: null,
  hotkey: "l"
}

const Sprite : Drank = {
  id: 7,
  naam: "Sprite",
  currentPrijs: 2.25,
  previousPrijs: 2,
  categorie: "frisdrank",
  alcoholisch: false,
  kleur: "#00ff00",
  afbeelding: null,
  hotkey: "s"
}

const Hoegaarden : Drank = {
  id: 8,
  naam: "Hoegaarden",
  currentPrijs: 4,
  previousPrijs: 3.75,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#ffffff",
  afbeelding: null,
  hotkey: "h"
}

const Chaudfontaine : Drank = {
  id: 9,
  naam: "Chaudfontaine",
  currentPrijs: 2.75,
  previousPrijs: 2.5,
  categorie: "water",
  alcoholisch: false,
  kleur: "#0000ff",
  afbeelding: null,
  hotkey: "c"
}

const Orval : Drank = {
  id: 10,
  naam: "Orval",
  currentPrijs: 5,
  previousPrijs: 4.75,
  categorie: "bier",
  alcoholisch: true,
  kleur: "#ff9900",
  afbeelding: null,
  hotkey: "o"
}

export const dranken = [Cola, StellaArtois, Duvel, Fanta, Jupiler, Leffe, Sprite, Hoegaarden, Chaudfontaine, Orval];



