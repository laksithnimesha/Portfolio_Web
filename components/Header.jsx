import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

import Nav from './Nav';
import MobileNav from './MobileNav';
const header = () => {
  return (
    <header className="py-8 xl:py-12 bg-header">
        <div className="container mx-auto flex justify-between items-center">
            {/*logo*/}
            <Link href="/">
             <h1 className="text-4xl font-semibold font-mono">
                Laksi<span className="text-luke">.</span>
             </h1>
            </Link>
            {/*desktop nav*/}
            <div className="hidden xl:flex item-center gap-8">
             <Nav />
             <Link href="/contact">
               <Button>Hire me</Button>
             </Link>
            </div>

            {/*mobile nav*/}
            <div className="xl:hidden">
               <MobileNav />
                
            </div>
        </div>
    </header>   );
  
}

export default header
