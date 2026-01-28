'use client';

import { useEffect, useState } from "react";

const scenarios = [
  {
    name: 'Zillow Real Estate Listing',
    description: '664 PII entities automatically detected and replaced',
    folder: 'zillow-listing'
  },
  {
    name: 'LinkedIn Profile',
    description: 'Professional profile with personal details anonymized',
    folder: 'linkedin-profile'
  },
  {
    name: 'Wikipedia Article',
    description: 'Historical article with dates, names, and locations protected',
    folder: 'wikipedia-san-francisco-blackout'
  },
  {
    name: 'SFGate News Article',
    description: 'News content with personal information anonymized',
    folder: 'sfgate-united-article'
  },
  {
    name: 'Tax Calculator',
    description: 'Financial data and calculations protected',
    folder: 'calculator-net-tax'
  }
];

export default function DemoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentSlide(index);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-white dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
            Live Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            See It In Action
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {scenarios[currentSlide].description}
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
              {scenarios[currentSlide].name}
            </h3>
          </div>

          <div className="relative px-4 md:px-16">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">Before: Original Screenshot</h3>
                </div>
                <div className="aspect-[4/3] bg-white dark:bg-zinc-900 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-zinc-900/5 dark:ring-white/10">
                  <img 
                    src={`https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/test/screenshots/${scenarios[currentSlide].folder}/01-original.png`}
                    alt={`Before SafeSnap - ${scenarios[currentSlide].name}`}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">After: Protected with SafeSnap</h3>
                </div>
                <div className="aspect-[4/3] bg-white dark:bg-zinc-900 rounded-2xl border-2 border-green-500 shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-green-500/20">
                  <img 
                    src={`https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/test/screenshots/${scenarios[currentSlide].folder}/03-protected.png`}
                    alt={`After SafeSnap - ${scenarios[currentSlide].name}`}
                    className="w-full h-full object-contain" 
                  />
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-indigo-600 dark:hover:border-purple-600 hover:scale-110 transition-all shadow-xl"
              aria-label="Previous scenario"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 hover:border-indigo-600 dark:hover:border-purple-600 hover:scale-110 transition-all shadow-xl"
              aria-label="Next scenario"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-10">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === currentSlide
                    ? 'bg-indigo-600 dark:bg-purple-600 text-white shadow-lg shadow-indigo-500/30 dark:shadow-purple-500/30'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700'
                }`}
              >
                {scenario.name}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {scenarios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-12 bg-indigo-600 dark:bg-purple-600'
                    : 'w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
                }`}
                aria-label={`Go to ${scenarios[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
