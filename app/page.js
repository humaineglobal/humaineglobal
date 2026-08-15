import Link from 'next/link';
import { Page, CTA } from '../components/Site';

export default function Home() {
  return (
    <Page active="Home">
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="shell relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-6">Turning B2B complexity into intelligent, measurable growth.</p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold leading-[1.08] text-white mb-6">
                Turning Complexity Into Actionable Clarity
              </h1>
              <p className="text-base md:text-lg leading-[1.8] text-gray-300 mb-8 font-light">
                Human-centric AI experiences built around the needs of your end customer.
                B2B sales is complex, eliminating organizational complexity, converting siloed functions into orchestrated growth engines, and delivering tangible, sustainable value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start a Conversation <span className="ml-2">→</span>
                </Link>
                <Link href="/services" className="btn-ghost border-white/20 text-white hover:border-white/40">
                  View Services
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-royal/20 rounded-2xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-navy-light to-navy rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {['📁', '💡', '🛡️', '☁️', '⚙️', '📄'].map((icon, i) => (
                      <div key={i} className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-2xl border border-white/10">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-4 -left-6 px-5 py-3 bg-navy rounded-xl shadow-xl border border-white/10">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Avg. client outcome</p>
                    <p className="text-2xl font-bold text-royal">3.2× ROI</p>
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
              <p className="text-2xl md:text-3xl font-bold text-navy mb-2">20+ Years Digital Transformation Experience</p>
              <p className="text-sm text-gray-600">Years of Leadership in Digital Transformation, Marketing Excellence and Digital Growth.</p>
            </div>
            <div className="p-6 border-l-4 border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-navy mb-2">Marketing, Technology, Sales, Finance</p>
              <p className="text-sm text-gray-600">Mastered these disciplines over a period of 20 years bringing clarity to B2B Marketing & Sales.</p>
            </div>
            <div className="p-6 border-l-4 border-gray-200">
              <p className="text-2xl md:text-3xl font-bold text-navy mb-2">AI-First, Human Centered</p>
              <p className="text-sm text-gray-600">Approach to Every Problem. Transformed growth in Global Organizations, startups, and scaling companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="shell">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">What I Build</p>
            <h2 className="section-title text-navy">Three disciplines. One integrated mind.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8 border-l-4 border-royal md:row-span-2">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">01</p>
              <h3 className="text-2xl font-bold text-navy mb-4">Customized AI Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Custom conversational AI that converts complexity into instant, human answers — built for enterprise scale.</p>
              <Link href="/services" className="text-royal font-semibold text-sm">Learn more →</Link>
            </div>
            <div className="card p-8">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">02</p>
              <h3 className="text-xl font-bold text-navy mb-3">Customer 360 & Unified Ecosystems</h3>
              <p className="text-gray-600 leading-relaxed">Unified Customer Intelligence that turns fragmented data into one orchestrated solution.</p>
            </div>
            <div className="card p-8">
              <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">03</p>
              <h3 className="text-xl font-bold text-navy mb-3">Strategy Consulting</h3>
              <p className="text-gray-600 leading-relaxed">Fractional CMO, CTO, and CFO leadership — the full executive stack, without the full-time cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 bg-navy">
        <div className="shell">
          <p className="eyebrow mb-12 text-center">Outcomes</p>
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
