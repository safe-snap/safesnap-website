'use client';

import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Read theme from DOM (already set by layout script)
    const currentTheme = document.documentElement.className || 'dark';
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
  };

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev + 1) % scenarios.length);
    // Resume after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
    // Resume after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setCurrentSlide(index);
    // Resume after 10 seconds
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="SafeSnap" width={40} height={40} />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SafeSnap
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link 
              href="/about"
              className="text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-purple-500 font-medium"
            >
              About
            </Link>
            <a 
              href="https://github.com/safe-snap/safesnap-chrome-extension" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16 text-center">
        <Image src="/logo.svg" alt="SafeSnap" width={120} height={120} className="mx-auto mb-6" priority />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          SafeSnap
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">
          Share screenshots without exposing PII
        </p>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
          Privacy-first Chrome extension that automatically detects and protects personally identifiable information in screenshots.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://chromewebstore.google.com/detail/safesnap/mafoblkngbhcejlgkclnhjhancgmbggh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Add to Chrome
          </a>
          <a 
            href="https://github.com/safe-snap/safesnap-chrome-extension" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border-2 border-zinc-300 dark:border-zinc-700 hover:border-indigo-600 dark:hover:border-purple-600 font-medium transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Demo Carousel */}
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
            {/* Current Scenario Name */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {scenarios[currentSlide].name}
              </h3>
            </div>

            {/* Carousel */}
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

              {/* Navigation Arrows */}
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

            {/* Scenario Indicators */}
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

            {/* Progress Indicators */}
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

      {/* Extension Interface */}
      <section className="container mx-auto px-6 py-16 bg-zinc-50 dark:bg-zinc-900/50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple & Intuitive Interface</h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
          A clean, easy-to-use extension popup that puts privacy protection at your fingertips
        </p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 mb-4 inline-block">
              <img 
                src="https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/screenshots/popup-standalone-protect.png"
                alt="SafeSnap Protect Tab"
                className="w-64 h-auto rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Protect</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              One-click PII protection with real-time detection stats
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 mb-4 inline-block">
              <img 
                src="https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/screenshots/popup-standalone-settings.png"
                alt="SafeSnap Settings Tab"
                className="w-64 h-auto rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Settings</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Customize which PII types to detect and protect
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 mb-4 inline-block">
              <img 
                src="https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/screenshots/popup-standalone-about.png"
                alt="SafeSnap About Tab"
                className="w-64 h-auto rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Learn more about SafeSnap and access resources
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="w-12 h-12 mb-4 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Comprehensive Protection</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Detects 11+ types of PII: names, addresses, emails, phone numbers, money amounts, dates, and more.
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="w-12 h-12 mb-4 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Local Processing</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              All PII detection happens in your browser. No external servers, no data collection.
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="w-12 h-12 mb-4 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">One-Click Protection</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Click the extension, protect PII, and take a screenshot. No complex setup needed.
            </p>
          </div>
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Consistency</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Same input always produces the same replacement within a session.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">© 2026 SafeSnap Community. Released under MIT License.</p>
          <div className="flex gap-6 justify-center text-sm">
            <a href="https://github.com/safe-snap/safesnap-chrome-extension" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-purple-500">
              GitHub
            </a>
            <a href="https://github.com/safe-snap/safesnap-chrome-extension/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-purple-500">
              License
            </a>
            <a href="https://github.com/safe-snap/safesnap-chrome-extension/blob/main/docs/DEMONSTRATION.md" target="_blank" rel="noopener noreferrer"
               className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-purple-500">
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
