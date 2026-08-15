'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Mark } from './Mark';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPosts } from '../../lib/content';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

function Header({ active, isHome }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHero = isHome && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHero ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/" aria-label="Home">
          <Mark variant={isHero ? 'light' : 'dark'} />
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium tracking-wide transition-colors ${
                isHero ? 'text-white/80 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {label}
              {active === label && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-600" />}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Mark />
            <p className="mt-4 text-sm max-w-sm">Making AI Human. Amplifying Value. Enabling Growth.</p>
            <div className="mt-6">
              <p className="text-xs font-semibold text-white mb-2">Subscribe to Insights</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" />
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700">Subscribe</button>
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
              <Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm hover:text-white">Terms of Use</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs">© 2026 humAIne. All rights reserved.</p>
          <p className="text-xs">Chief Marketing, Technology & Finance Officer</p>
        </div>
      </div>
    </footer>
  );
}

function Page({ active, children, isHome = false }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header active={active} isHome={isHome} />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center" aria-label="Open chat">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Post({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  const allPosts = getAllBlogPosts();
  const related = allPosts.filter(r => r.slug !== slug).slice(0, 3);

  return (
    <Page active="Blog">
      {/* Hero with Image */}
      <section className="relative pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={p.image || '/images/article-placeholder.svg'}
              alt={p.title}
              width={1200}
              height={500}
              fetchPriority="high"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <header className="mb-12 pb-8 border-b border-gray-100">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-4">
                {p.type}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {p.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{p.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">S</span>
                  {p.author}
                </span>
                <span>•</span>
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>
            </header>

            <div className="rich-text">
              <MDXRemote source={content} />
            </div>

            {/* Explore Topics */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Explore Topics</p>
              <div className="flex flex-wrap gap-3">
                {['#AI Strategy', '#Leadership', '#B2B Growth', '#Marketing', '#Customer Experience', '#Innovation'].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.slice(1)}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">S</div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Suman | humAIne</p>
                  <p className="text-gray-600 text-sm mt-1">Content creator and writer sharing insights and stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4">Continue Reading</p>
              <h2 className="text-3xl font-bold text-gray-900">You Might Also Enjoy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[16:10] overflow-hidden bg-gray-100">
                      <img src={r.frontmatter.image || '/images/article-placeholder.svg'} alt={r.frontmatter.title} width={800} height={500} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <small className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{r.frontmatter.type}</small>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{r.frontmatter.title}</h3>
                      <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">{r.frontmatter.readTime} <span>→</span></span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Insights Like This in Your Inbox</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">Join leaders who receive practical perspectives on AI strategy, B2B growth, and the future of intelligent business.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your work email" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400" />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 whitespace-nowrap">Subscribe Free</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-950 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to simplify your most complex challenge?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Let's talk about what's possible when AI meets executive clarity.</p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold hover:bg-blue-50">Start a Conversation <span className="ml-2">→</span></Link>
        </div>
      </section>
    </Page>
  );
}
