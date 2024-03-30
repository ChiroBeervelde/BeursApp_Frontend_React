'use client';

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/chiro_beer/ChiroBeerveldeBeer_bier.svg"
          alt="Chiro Beer"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold mt-4">Chiro Beervelde - Beursavond</h1>
      </div>
    </main>
  )
}
