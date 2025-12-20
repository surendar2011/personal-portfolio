import React from 'react';

const HomePage = () => {
    return (
        <section className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio Surendar. S</h1>
            <p className="mb-4">I am a Full stack developer</p>
            <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View Projects</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Contact Me</button>
            </div>
        </section>
    );
}

export default HomePage;