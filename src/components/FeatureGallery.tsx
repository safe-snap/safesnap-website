const galleryItems = [
  {
    image: '1-protect-pii.png',
    title: '1. Protect PII',
    description: 'Automatically detect and mask personal information with one click',
    alt: 'Protect PII - SafeSnap automatically detects and masks personal information'
  },
  {
    image: '2-customize-settings.png',
    title: '2. Customize Settings',
    description: 'Choose exactly which types of personal information to detect and protect',
    alt: 'Customize Settings - Choose which PII types to detect'
  },
  {
    image: '3-highlight-preview.png',
    title: '3. Highlight Preview',
    description: 'Preview detected PII with color-coded highlights before protection',
    alt: 'Highlight Preview - See what will be protected before taking a screenshot'
  },
  {
    image: '4-advanced-settings.png',
    title: '4. Advanced Settings',
    description: 'Fine-tune detection behavior with advanced configuration options',
    alt: 'Advanced Settings - Fine-tune detection behavior'
  },
  {
    image: '5-privacy-first.png',
    title: '5. Privacy First',
    description: '100% local processing - your data never leaves your browser',
    alt: 'Privacy First - All processing happens locally'
  },
  {
    image: 'tooltip-with-signals.png',
    title: '6. Smart Detection',
    description: 'Hover to see detection signals and understand why content was flagged',
    alt: 'Smart Detection - Tooltips show detection signals'
  }
];

export default function FeatureGallery() {
  return (
    <section className="container mx-auto px-6 py-16 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
          Feature Gallery
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How SafeSnap Works</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          See how SafeSnap protects your privacy at every step
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-700"
          >
            <img 
              src={`https://raw.githubusercontent.com/safe-snap/safesnap-chrome-extension/main/screenshots/${item.image}`}
              alt={item.alt}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
