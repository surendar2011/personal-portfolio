import React from "react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Surendar S, a passionate Full Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
};

const AboutPage = () => (
    <section className="max-w-2xl mx-auto p-4 min-h-screen bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
            Hello! I'm Surendar. S, a passionate Full Stack Developer dedicated to building beautiful and efficient web applications.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
            With several years of experience in frontend and backend development, I enjoy creating projects that make a difference for my clients and end users alike.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
            I'm always eager to learn new technologies and tackle exciting challenges in the world of web development.
        </p>
        <h2 className="text-lg font-bold mt-4 text-gray-900 dark:text-white">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li className="mb-2">HTML &amp; CSS</li>
            <li className="mb-2">JavaScript (ES6+)</li>
            <li className="mb-2">React &amp; Next.js</li>
            <li className="mb-2">Node.js &amp; Express</li>
            <li className="mb-2">MongoDB</li>
            <li className="mb-2">Git &amp; GitHub</li>
        </ul>
        <div className="mt-4">
            <img
                src="/images/Profile-pic.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
            />
        </div>
    </section>
);

export default AboutPage;