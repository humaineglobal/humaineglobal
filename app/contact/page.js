import { Page } from '../../components/Site';

export default function Contact() {
  return (
    <Page active="Contact">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">GET IN TOUCH</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Let's amplify value to the user and increase loyalty while reducing spend.
          </h1>
          <p className="text-lg text-white/70 max-w-3xl">
            What you are solving for is not easy, and it was not meant to be. If you're reflecting on exploring a Go-To-Market Strategy, need a robust AI strategy that can scale without having to defend EBITDA margin loss, or want an executive partner that understands your ecosystem and can deliver growth at scale - let's start with a conversation.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-background">
        <div className="shell">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-lg border border-border p-8 md:p-12">
                <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">Send an inquiry</h2>
                <p className="text-muted-foreground mb-8">Tell me about your challenge. I'll respond within 24 hours.</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">FULL NAME *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">WORK EMAIL *</label>
                      <input
                        type="email"
                        placeholder="Your work email"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">COMPANY</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">YOUR ROLE</label>
                      <input
                        type="text"
                        placeholder="Your title / role"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">AREA OF INTEREST</label>
                    <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select a service...</option>
                      <option>Custom AI Solutions</option>
                      <option>Customer 360 / Unified Intelligence</option>
                      <option>Fractional C-Suite</option>
                      <option>Strategy Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">YOUR CHALLENGE</label>
                    <textarea
                      rows={5}
                      placeholder="Describe your challenge or what you're looking to achieve..."
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 group"
                  >
                    Send Inquiry
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Booking Card - Black */}
              <div className="bg-gray-900 text-white p-6 rounded-xl shadow-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Book a Discovery Call</h3>
                <p className="text-gray-400 text-sm mb-4">Prefer to talk? Schedule a 30-minute discovery call directly on my calendar.</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 text-center"
                >
                  Schedule a Call →
                </a>
              </div>

              {/* Info Boxes */}
              <div className="bg-card rounded-xl border border-border p-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">RESPONSE TIME</p>
                    <p className="text-muted-foreground text-sm">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">ENGAGEMENT TYPE</p>
                    <p className="text-muted-foreground text-sm">Project-based or retainer</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">AVAILABILITY</p>
                    <p className="text-muted-foreground text-sm">Limited — select clients only</p>
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
