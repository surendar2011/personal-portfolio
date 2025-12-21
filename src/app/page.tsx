import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the portfolio of Surendar S, a Full Stack Developer. Explore my work, skills, and projects.",
};

const HomePage = () => {
    return (
        <section className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio Surendar. S</h1>
            <p className="mb-4">I am a Full stack developer</p>
            <div className="flex gap-4">
                <Link href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block">View Projects</Link>
                <Link href="/contact" className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block">Contact Me</Link>
            </div>
        </section>
    );
}

export default HomePage;

// write mulitple times !