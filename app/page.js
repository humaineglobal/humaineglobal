'use client';

import Link from 'next/link';
import { Page, CTA } from '../components/Site';

export default function Home() {
  return (
    <Page active="Home" isHome>
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-glow-tr" aria-hidden="true" />
        <div className="absolute inset-0 hero-glow-bl" aria-hidden="true" />
        <div className="absolute inset-0 hero-dots" aria-hidden="true" />

        {/* Content */}
        <div className="shell relative z-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white font-heading">
                  hum<span className="text-primary">AI</span>ne
                </span>
              </div>
              
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6">
                Turning B2B complexity into intelligent, measurable growth.
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-[1.08] text-white mb-6 font-heading">
                Turning Complexity Into Actionable Clarity
              </h1>
              
              <p className="text-base md:text-lg leading-[1.8] text-white/80 mb-8 font-light max-w-lg">
                Human-centric AI experiences built around the needs of your end customer.
                B2B sales is complex, eliminating organizational complexity, converting siloed functions into orchestrated growth engines, and delivering tangible, sustainable value.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary font-semibold rounded-none hover:bg-white/90 transition-colors duration-200 group">
                  Start a Conversation
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-none hover:border-white/60 transition-colors duration-200">
                  View Services
                </Link>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md ml-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl scale-90" />
                
                <div className="relative bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm">
                  <div className="aspect-[4/5] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="relative z-10 text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl" />
                        <div className="relative w-full h-full bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center border-4 border-white/20">
                          <span className="text-white text-4xl font-bold">AI</span>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm">Human meets AI</p>
                    </div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="absolute bottom-4 left-4 px-5 py-3 hero-strip rounded-xl border border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-1">Avg. client outcome</p>
                    <p className="text-2xl font-bold text-white">3.2× ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Strip */}
      <section className="hero-strip border-t border-white/10">
        <div className="shell py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="py-4 px-6 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0">
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">20+ Years Digital Transformation Experience</p>
              <p className="text-sm text-white/60">Years of Leadership in Digital Transformation, Marketing Excellence and Digital Growth.</p>
            </div>
            <div className="py-4 px-6 border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0">
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">Marketing, Technology, Sales, Finance</p>
              <p className="text-sm text-white/60">Mastered these disciplines over a period of 20 years bringing clarity to B2B Marketing & Sales.</p>
            </div>
            <div className="py-4 px-6">
              <p className="text-xl sm:text-2xl font-bold text-white mb-1">AI-First, Human Centered</p>
              <p className="text-sm text-white/60">Approach to Every Problem. Transformed growth in Global Organizations, startups, and scaling companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="shell">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">What I Build</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight font-heading">Three disciplines. One integrated mind.</h2>
          </div>
          
          <div className="relative mb-10 rounded-2xl overflow-hidden">
            <img src="/images/team-meeting.svg" alt="Executive team collaborating on AI strategy" width={1200} height={480} className="w-full object-cover max-h-[340px] object-[center_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center px-10 pointer-events-none">
              <p className="text-2xl md:text-3xl font-bold max-w-sm leading-snug text-white font-heading">Where human expertise meets AI precision</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            <div className="md:row-span-2 bg-background p-10 border-l-2 border-l-primary flex flex-col justify-between min-h-64">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">01</p>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">Customized AI Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">Custom conversational AI that converts complexity into instant, human answers — built for enterprise scale.</p>
              </div>
              <Link href="/services" className="mt-8 inline-flex items-center text-sm font-semibold text-primary group">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="bg-background p-10 border-l-2 border-l-border hover:border-l-primary transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">02</p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-heading">Customer 360 & Unified Ecosystems</h3>
              <p className="text-muted-foreground leading-relaxed">Unified Customer Intelligence that turns fragmented data, siloed systems into one orchestrated solution.</p>
            </div>
            <div className="bg-background p-10 border-l-2 border-l-border hover:border-l-primary transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-4">03</p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-heading">Strategy Consulting</h3>
              <p className="text-muted-foreground leading-relaxed">Available as a fractional CMO, CTO, and CFO leadership — the full executive stack, without the full-time cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-secondary border-t border-border overflow-hidden">
        <div className="shell">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-12">Outcomes</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="hidden lg:block lg:col-span-2 relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="/images/portrait.svg" alt="Senior business executive" width={600} height={700} className="w-full object-cover object-top max-h-[420px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 gap-px bg-border">
              <div className="bg-secondary p-8">
                <div className="w-6 h-px bg-primary mb-6" />
                <p className="text-2xl font-semibold text-foreground leading-snug mb-4">"Increased Customer Loyalty by 60% with a single AI deployment."</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Enterprise Clients</p>
              </div>
              <div className="bg-secondary p-8">
                <div className="w-6 h-px bg-primary mb-6" />
                <p className="text-2xl font-semibold text-foreground leading-snug mb-4">"Unified 10+ data silos into one Customer 360 view in under 90 days."</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Solutions And Services Firms</p>
              </div>
              <div className="bg-secondary p-8">
                <div className="w-6 h-px bg-primary mb-6" />
                <p className="text-2xl font-semibold text-foreground leading-snug mb-4">"Delivered a go-to-market strategy that tripled qualified pipeline in one quarter."</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase">B2B Scale-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden hero-gradient">
        <div className="shell">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white font-heading">Ready to simplify your most complex challenge?</h2>
              <p className="text-lg mb-8 text-white/70">Let's talk about what's possible when AI meets executive clarity.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group whitespace-nowrap">
                Book a Discovery Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="hidden lg:block relative shrink-0">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 bg-primary scale-90" />
                <img src="/images/cta-visual.svg" alt="Person working with AI technology" width={700} height={700} className="relative w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
