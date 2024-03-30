import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <header>
            <nav className="header">
                <div className="header-main">
                    <Link href="/" className="header-home-link">
                        <Image src="/images/chiro_beer/ChiroBeerveldeBeer_bier.svg" alt="Chiro Beer" className="header-image" width={200} height={200}/>
                        <p>Beursavond</p>
                    </Link>
                    <Link href="/dranken" className="header-dranken-link">
                     <p>Dranken</p>
                    </Link>
                    <Link href="/beursoverzicht" className="header-dranken-link">
                        <p>Beursoverzicht</p>
                    </Link>
                </div>
            </nav>        
        </header>
    );
};

export default Header;
