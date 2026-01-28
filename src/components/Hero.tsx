import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
