import Link from 'next/link';
import { Page, CTA } from '../components/Site';

export default function Home() {
  return (
    <Page active="Home">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0d1538] to-[#060920] min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="shell relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  hum<span className="text-royal">AI</span>ne
                </span>
              </div>
              
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6">
                Turning B2B complexity into intelligent, measurable growth.
              </p>
              
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold leading-[1.08] text-white mb-6">
                Turning Complexity Into Actionable Clarity
              </h1>
              
              <p className="text-base md:text-lg leading-[1.8] text-white/80 mb-8 font-light max-w-lg">
                Human-centric AI experiences built around the needs of your end customer.
                B2B sales is complex, eliminating organizational complexity, converting siloed functions into orchestrated growth engines, and delivering tangible, sustainable value.
              </p>
              
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
            
            {/* Right Column */}
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md ml-auto">
                <div className="absolute inset-0 bg-royal/20 rounded-2xl blur-3xl scale-90" />
                
                <div className="relative bg-gradient-to-br from-[#1a2148] to-[#0d1538] rounded-2xl overflow-hidden border border-white/10">
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
                  
                  <div className="absolute bottom-4 left-4 px-5 py-3 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-1">Avg. client outcome</p>
                    <p className="text-2xl font-bold text-white">3.2× ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip - Dark Blue Band */}
      <section className="bg-gradient-to-r from-[#0d1538] to-[#060920] py-16">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="py-6 sm:py-8 px-4 md:px-6 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">20+ Years Digital Transformation Experience</p>
              <p className="text-sm sm:text-base text-white/60">Years of Leadership in Digital Transformation, Marketing Excellence and Digital Growth.</p>
            </div>
            <div className="py-6 sm:py-8 px-4 md:px-6 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">Marketing, Technology, Sales, Finance</p>
              <p className="text-sm sm:text-base text-white/60">Mastered these disciplines over a period of 20 years bringing clarity to B2B Marketing & Sales, enabling sales leaders achieve unprecedented growth in a cost effective way.</p>
            </div>
            <div className="py-6 sm:py-8 px-4 md:px-6">
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">AI-First, Human Centered</p>
              <p className="text-sm sm:text-base text-white/60">Approach to Every Problem. Transformed growth in Global Organizations, startups, and scaling companies from small to medium and large.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Build Section */}
      <section className="py-24 bg-white">
        <div className="shell">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-3">What I Build</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d1538] leading-tight">Three disciplines. One integrated mind.</h2>
          </div>
          
          {/* Hero Image */}
          <div className="relative mb-10 rounded-2xl overflow-hidden">
            <img src="/images/team-meeting.jpg" alt="Executive team collaborating on AI strategy" className="w-full object-cover max-h-[340px] object-[center_30%]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1538]/70 via-[#0d1538]/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 flex items-center px-10 pointer-events-none">
              <p className="text-2xl md:text-3xl font-bold max-w-sm leading-snug text-white">Where human expertise meets AI precision</p>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            <div className="md:row-span-2 bg-white p-10 border-l-2 border-l-royal flex flex-col justify-between min-h-64">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">01</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0d1538] mb-4">Customized AI Solutions</h3>
                <p className="text-gray-600 leading-relaxed">Custom conversational AI that converts complexity into instant, human answers — built for enterprise scale.</p>
              </div>
              <Link href="/services" className="mt-8 inline-flex items-center text-sm font-semibold text-royal group">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="bg-white p-10 border-l-2 border-l-gray-200 hover:border-l-royal transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">02</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1538] mb-3">Customer 360 & Unified Ecosystems</h3>
              <p className="text-gray-600 leading-relaxed">Unified Customer Intelligence that turns fragmented data, siloed systems into one orchestrated solution driving meaningful experiences for customers and reducing level of effort for organizations.</p>
            </div>
            <div className="bg-white p-10 border-l-2 border-l-gray-200 hover:border-l-royal transition-colors duration-300">
              <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">03</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1538] mb-3">Strategy Consulting</h3>
              <p className="text-lg text-gray-600 leading-relaxed">B2B marketing and sales is a complex journey with several touchpoints and multiple decision makers. Driving clarity on product value, and delivering high value growth in this complex maze requires a seamless understanding of user behavior gravitas, technology solutions and financial rigor. Available as a fractional CMO, CTO, and CFO leadership — the full executive stack, without the full-time cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="shell">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-12">Outcomes</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="hidden lg:block lg:col-span-2 relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img src="/images/portrait.jpg" alt="Senior business executive" className="w-full object-cover object-top max-h-[420px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-1 gap-px bg-gray-200">
              <div className="bg-gray-50 p-8">
                <div className="w-6 h-px bg-royal mb-6" />
                <p className="text-2xl font-semibold text-[#0d1538] leading-snug mb-4">"Increased Customer Loyalty by 60% with a single AI deployment."</p>
                <p className="text-xs text-gray-500 tracking-wide uppercase">Enterprise Clients</p>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="w-6 h-px bg-royal mb-6" />
                <p className="text-2xl font-semibold text-[#0d1538] leading-snug mb-4">"Unified 10+ data silos into one Customer 360 view in under 90 days."</p>
                <p className="text-xs text-gray-500 tracking-wide uppercase">Solutions And Services Firms</p>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="w-6 h-px bg-royal mb-6" />
                <p className="text-2xl font-semibold text-[#0d1538] leading-snug mb-4">"Delivered a go-to-market strategy that tripled qualified pipeline in one quarter."</p>
                <p className="text-xs text-gray-500 tracking-wide uppercase">B2B Scale-up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 overflow-hidden bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
        <div className="shell">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">Ready to simplify your most complex challenge?</h2>
              <p className="text-lg mb-8 text-white/70">Let's talk about what's possible when AI meets executive clarity.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-royal text-sm font-semibold hover:bg-white/90 transition-colors duration-200 group whitespace-nowrap">
                Book a Discovery Call
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
            <div className="hidden lg:block relative shrink-0">
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 bg-royal scale-90" />
                <img src="/images/cta-visual.jpg" alt="Person working with AI technology" className="relative w-full h-full object-cover rounded-2xl" />
                <div className="absolute inset-0 rounded-2xl border border-royal/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
