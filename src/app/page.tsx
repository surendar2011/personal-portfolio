import React from 'react';
import type { Metadata } from 'next';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the portfolio of Surendar S, a Full Stack Developer. Explore my work, skills, and projects.",
};

const HomePage = () => {
    return (
        <>
            <Hero backgroundType="animation" />
            <footer className="text-center p-8 mt-auto">
                <p className="text-sm text-gray-500">Copyright 2025 My Portfolio. All rights reserved.</p>
            </footer>
        </>
    );
}

export default HomePage;

// write mulitple times !