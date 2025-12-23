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
            <footer className="text-center p-8 mt-auto bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">Copyright 2025 My Portfolio. All rights reserved.</p>
            </footer>
        </>
    );
}

export default HomePage;

// write mulitple times !