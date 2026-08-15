import Link from 'next/link';
import { Page, CTA } from '../components/Site';

export default function Home() {
  return (
    <Page active="Home">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0d1538] to-[#060920] min-h-screen flex items-center relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="shell relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              {/* Logo */}
              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  hum<span className="text-royal">AI</span>ne
                </span>
              </div>
              
              {/* Tagline */}
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6">
                Turning B2B complexity into intelligent, measurable growth.
              </p>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-[1.08] text-white mb-6">
                Turning Complexity Into Actionable Clarity
              </h1>
              
              {/* Body */}
              <p className="text-base md:text-lg leading-[1.8] text-white/80 mb-8 font-light max-w-lg">
                Human-centric AI experiences built around the needs of your end customer.
                B2B sales is complex, eliminating organizational complexity, converting siloed functions into orchestrated growth engines, and delivering tangible, sustainable value.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-royal font-semibold rounded-none hover:bg-white/90 transition-colors duration-200 group">
                  Start a Conversation
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white/30 text-white font-semibold rounded-none hover:border-white/60 transition-colors duration-200">
                  View Services
                </Link>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md ml-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-royal/20 rounded-2xl blur-3xl scale-90" />
                
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-[#1a2148] to-[#0d1538] rounded-2xl overflow-hidden border border-white/10">
                  {/* Hero Image Placeholder */}
                  <div className="aspect-[4/5] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-royal/10 to-transparent" />
                    <div className="relative z-10 text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-royal/30 rounded-full blur-2xl" />
                        <div className="relative w-full h-full bg-gradient-to-br from-royal to-royal-dark rounded-full flex items-center justify-center border-4 border-white/20">
                          <span className="text-white text-4xl font-bold">AI</span>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm">Human meets AI</p>
                    </div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="absolute bottom-4 left-4 right-auto px-5 py-3 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
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
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-royal">
              <p className="text-2xl md:text-3xl font-bold text-[#0d1538] mb-2">20+ Years Digital Transformation Experience</p>
              <p className="text-sm text-gray-600">Years of Leadership in Digital Transformation, Marketing Excellence and Digital Growth.</p>
            </div>
            <div className="p-6 border-l-4 border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-[#0d1538] mb-2">Marketing, Technology, Sales, Finance</p>
              <p className="text-sm text-gray-600">Mastered these disciplines over 20 years bringing clarity to B2B Marketing & Sales.</p>
            </div>
            <div className="p-6 border-l-4 border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-[#0d1538] mb-2">AI-First, Human Centered</p>
              <p className="text-sm text-gray-600">Approach to Every Problem. Transformed growth in Global Organizations, startups, and scaling companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="shell">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-4">What I Build</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d1538] leading-tight">Three disciplines. One integrated mind.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-10 border-l-4 border-royal md:row-span-2 flex flex-col justify-between min-h-64">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">01</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0d1538] mb-4">Customized AI Solutions</h3>
                <p className="text-gray-600 leading-relaxed">Custom conversational AI that converts complexity into instant, human answers — built for enterprise scale.</p>
              </div>
              <Link href="/services" className="mt-8 inline-flex items-center text-sm font-semibold text-royal hover:gap-3 transition-all">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="bg-white p-10 border-l-4 border-gray-200 hover:border-royal transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">02</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1538] mb-3">Customer 360 & Unified Ecosystems</h3>
              <p className="text-gray-600 leading-relaxed">Unified Customer Intelligence that turns fragmented data into one orchestrated solution.</p>
            </div>
            <div className="bg-white p-10 border-l-4 border-gray-200 hover:border-royal transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">03</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1538] mb-3">Strategy Consulting</h3>
              <p className="text-gray-600 leading-relaxed">Fractional CMO, CTO, and CFO leadership — the full executive stack, without the full-time cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-24 bg-gradient-to-b from-[#0d1538] to-[#060920]">
        <div className="shell">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-12 text-center">Outcomes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <div className="w-1 h-8 bg-royal mb-6" />
              <p className="text-xl font-semibold text-white leading-snug mb-4">"Increased Customer Loyalty by 60% with a single AI deployment."</p>
              <p className="text-xs text-gray-400 tracking-wide uppercase">Enterprise Clients</p>
            </div>
            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <div className="w-1 h-8 bg-royal mb-6" />
              <p className="text-xl font-semibold text-white leading-snug mb-4">"Unified 10+ data silos into one Customer 360 view in under 90 days."</p>
              <p className="text-xs text-gray-400 tracking-wide uppercase">Solutions And Services Firms</p>
            </div>
            <div className="p-8 bg-white/5 rounded-xl border border-white/10">
              <div className="w-1 h-8 bg-royal mb-6" />
              <p className="text-xl font-semibold text-white leading-snug mb-4">"Delivered a go-to-market strategy that tripled qualified pipeline in one quarter."</p>
              <p className="text-xs text-gray-400 tracking-wide uppercase">B2B Scale-up</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}
