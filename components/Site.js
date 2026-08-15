'use client';

import { useState, useEffect } from 'react';
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

export function Header({ active, isHome }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHero = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHero
          ? 'bg-transparent'
          : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="shell flex items-center justify-between h-16">
        <Link href="/" aria-label="Home">
          <Mark variant={isHero ? 'light' : 'dark'} />
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-200 ${
                isHero ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {label}
              {active === label && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-none hover:bg-primary/90 transition-colors"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="shell py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Mark />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Making AI Human. Amplifying Value. Enabling Growth.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold text-foreground mb-2">Subscribe to Insights</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-secondary border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">Pages</h4>
            <div className="flex flex-col gap-2">
              {links.map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 humAIne. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Chief Marketing, Technology & Finance Officer</p>
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
      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
          aria-label="Open chat"
        >
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
    <section className="hero-gradient">
      <div className="shell py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">{text}</p>
        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-none hover:bg-white/90 transition-colors">
          {label} <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}
