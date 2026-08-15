import Link from 'next/link';
import { Mark } from './Mark';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header({ active }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="shell flex items-center justify-between h-16">
        <Link href="/" aria-label="Home">
          <Mark variant="dark" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                active === label ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
              {active === label && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gray-900" />}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2 bg-royal text-white text-sm font-semibold rounded-lg hover:bg-royal-dark transition-colors">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0d1538] text-gray-400">
      <div className="shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Mark />
            <p className="mt-4 text-sm max-w-sm">Making AI Human. Amplifying Value. Enabling Growth.</p>
            {/* Email Signup */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-white mb-2">Subscribe to Insights</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-royal"
                />
                <button className="px-4 py-2 bg-royal text-white text-sm font-semibold rounded hover:bg-royal-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <div className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© 2026 humAIne. All rights reserved.</p>
          <p className="text-xs">Chief Marketing, Technology & Finance Officer</p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ active, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header active={active} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-royal text-white rounded-full shadow-lg hover:bg-royal-dark transition-colors flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function CTA({ title = "Ready to simplify your most complex challenge?", text = "Let's talk about what's possible when AI meets executive clarity.", label = "Start a Conversation" }) {
  return (
    <section className="bg-[#0d1538]">
      <div className="shell py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{text}</p>
        <Link href="/contact" className="btn-primary">{label} <span className="ml-2">→</span></Link>
      </div>
    </section>
  );
}
