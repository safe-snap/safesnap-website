const interfaceItems = [
  {
    image: 'popup-standalone-protect.png',
    title: 'Protect',
    description: 'One-click PII protection with real-time detection stats',
    alt: 'SafeSnap Protect Tab'
  },
  {
    image: 'popup-standalone-settings.png',
    title: 'Settings',
    description: 'Customize which PII types to detect and protect',
    alt: 'SafeSnap Settings Tab'
  },
  {
    image: 'popup-standalone-about.png',
    title: 'About',
    description: 'Learn more about SafeSnap and access resources',
    alt: 'SafeSnap About Tab'
  }
];

export default function ExtensionInterface() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple & Intuitive Interface</h2>
      <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
        A clean, easy-to-use extension popup that puts privacy protection at your fingertips
      </p>
      <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {interfaceItems.map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 mb-4 inline-block">
              <img 
                src={`https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/screenshots/${item.image}`}
                alt={item.alt}
                className="w-64 h-auto rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
