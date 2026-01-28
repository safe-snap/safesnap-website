const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/safe-snap/safesnap-chrome-extension' },
  { label: 'License', href: 'https://github.com/safe-snap/safesnap-chrome-extension/blob/main/LICENSE' },
  { label: 'Documentation', href: 'https://github.com/safe-snap/safesnap-chrome-extension/blob/main/docs/DEMONSTRATION.md' }
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-16 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          © 2026 SafeSnap Community. Released under MIT License.
        </p>
        <div className="flex gap-6 justify-center text-sm">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-purple-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
