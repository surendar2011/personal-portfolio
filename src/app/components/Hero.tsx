'use client';

import React from 'react';
import Link from 'next/link';

interface HeroProps {
  backgroundType?: 'animation' | 'image' | 'video';
  backgroundImage?: string;
  backgroundVideo?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  backgroundType = 'animation',
  backgroundImage,
  backgroundVideo 
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundType === 'animation' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
            <div className="absolute inset-0">
              {/* Animated gradient orbs - Light Mode */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
            </div>
          </div>
        )}
        
        {backgroundType === 'image' && backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          </div>
        )}
        
        {backgroundType === 'video' && backgroundVideo && (
          <>
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
          </>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
          Welcome to My Portfolio Surendar. S
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200 transition-colors">
          I am a Full stack developer
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/projects" 
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md inline-block transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-6 py-3 rounded-md inline-block transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

