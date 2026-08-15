import Link from 'next/link';
import { Mark } from './Mark';

export { Mark };

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header({ active, isHome }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHome ? 'bg-transparent' : 'bg-background/95 backdrop-blur-sm border-b border-border'
    }`}>
      <div className="shell flex items-center justify-between h-16">
        <Link href="/" aria-label="Home">
          <Mark variant={isHome ? 'light' : 'dark'} />
        </Link>
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                isHome ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
              {active === label && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-none hover:bg-primary/90 transition-colors">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left - Brand */}
          <div>
            <Mark />
            <p className="mt-4 text-sm text-gray-500 max-w-xs">Making AI Human. Amplifying Value. Enabling Growth.</p>
          </div>
          
          {/* Right - Navigation + Social */}
          <div className="flex flex-col items-end gap-6">
            <nav className="flex flex-wrap items-center gap-6" aria-label="Footer links">
              <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/case-studies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Case Studies</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Use</Link>
            </nav>
            <a
              href="https://www.linkedin.com/company/108009899"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-8 h-px bg-gray-200" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 humAIne. All rights reserved.</p>
          <p className="text-xs text-gray-500">Chief Marketing, Technology & Finance Officer</p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ active, children, isHome = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header active={active} isHome={isHome} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function CTA({ title = "Ready to simplify your most complex challenge?", text = "Let's talk about what's possible when AI meets executive clarity.", label = "Start a Conversation" }) {
  return (
    <section className="hero-gradient">
      <div className="shell py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">{title}</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">{text}</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-none hover:bg-white/90 transition-colors">
          {label} <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
