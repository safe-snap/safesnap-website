'use client';

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DemoCarousel from "@/components/DemoCarousel";
import FeatureGallery from "@/components/FeatureGallery";
import ExtensionInterface from "@/components/ExtensionInterface";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <DemoCarousel />
      <FeatureGallery />
      <ExtensionInterface />
      <Features />
      <Footer />
    </div>
  );
}
