import Link from 'next/link';
import { Page, CTA } from '../../components/Site';

export default function Contact() {
  return (
    <Page active="Contact">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <p className="eyebrow mb-4">GET IN TOUCH</p>
          <h1 className="section-title text-white mb-6">Let's amplify value to the user and increase loyalty while reducing spend.</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            What you are solving for is not easy, and it was not meant to be. If you're reflecting on exploring a Go-To-Market Strategy, need a robust AI strategy that can scale without having to defend EBITDA margin loss, or want an executive partner that understands your ecosystem and can deliver growth at scale — let's start with a conversation.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy mb-2">Send an inquiry</h2>
              <p className="text-gray-600 mb-8">Tell me about your challenge. I'll respond within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">FULL NAME *</label>
                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">WORK EMAIL *</label>
                    <input type="email" placeholder="Your work email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">COMPANY</label>
                    <input type="text" placeholder="Company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">YOUR ROLE</label>
                    <input type="text" placeholder="Your title / role" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">AREA OF INTEREST</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent bg-white">
                    <option>Select a service...</option>
                    <option>Custom AI Solutions</option>
                    <option>Customer 360 / Unified Intelligence</option>
                    <option>Fractional C-Suite</option>
                    <option>Strategy Consulting</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">YOUR CHALLENGE</label>
                  <textarea rows={5} placeholder="Describe your challenge or what you're looking to achieve..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-royal focus:border-transparent resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Inquiry →</button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white p-6 rounded-2xl">
                <div className="w-10 h-10 bg-royal/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">📅</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Book a Discovery Call</h3>
                <p className="text-gray-400 text-sm mb-4">Prefer to talk? Schedule a 30-minute discovery call directly on my calendar.</p>
                <Link href="/contact" className="btn-primary w-full text-sm">Schedule a Call →</Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">RESPONSE TIME</p>
                    <p className="text-gray-600 text-sm">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💼</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">ENGAGEMENT TYPE</p>
                    <p className="text-gray-600 text-sm">Project-based or retainer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-royal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">👥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">AVAILABILITY</p>
                    <p className="text-gray-600 text-sm">Limited — select clients only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
