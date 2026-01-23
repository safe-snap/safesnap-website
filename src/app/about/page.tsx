'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Read theme from DOM (already set by layout script)
    const currentTheme = document.documentElement.className || 'dark';
    if (currentTheme !== theme) {
      setTheme(currentTheme);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
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

      {/* About Content */}
      <main className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About SafeSnap
        </h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4">Why We Built This</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              SafeSnap was born from a common problem: teams needed to share screenshots for bug reports and documentation,
              but couldn&apos;t risk exposing customer data or sensitive information.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy-First Design</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              All processing happens locally in your browser—no servers, no cloud processing, no data collection.
              The extension is fully open source, so you can verify exactly what it does.
            </p>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4">Perfect For</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
              QA teams, product managers, developers, and compliance teams who need to share screenshots safely without GDPR/CCPA violations.
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-lg space-y-2">
              <li>QA engineers reporting bugs with production data</li>
              <li>Product managers sharing feature screenshots</li>
              <li>Developers documenting issues</li>
              <li>Compliance teams ensuring data privacy</li>
            </ul>
          </div>

          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-4">
              SafeSnap uses advanced pattern matching and natural language processing to detect 11+ types of personally identifiable information:
            </p>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 text-lg space-y-2">
              <li>Names and personal identifiers</li>
              <li>Email addresses</li>
              <li>Phone numbers</li>
              <li>Physical addresses</li>
              <li>Money amounts</li>
              <li>Dates and times</li>
              <li>And more...</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mt-4">
              Detected PII is replaced with realistic fake data that maintains consistency within each session.
            </p>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

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
