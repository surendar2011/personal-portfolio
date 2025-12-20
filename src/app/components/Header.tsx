import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;