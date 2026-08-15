import { Page, CTA } from '../../components/Site';

const caseStudies = [
  {
    tag: 'AI Solutions',
    category: 'Financial Services',
    title: 'Global Financial Services Firm',
    challenge: 'Fragmented customer data across 12 legacy systems made personalized service impossible. Representatives had no unified view of customer history.',
    solution: 'Deployed a conversational AI layer to unify customer touchpoints, enabling real-time intelligence across every channel.',
    outcomes: [
      { value: '42%', label: 'Reduction in handle time' },
      { value: '3.1x', label: 'Increase in first-contact resolution' },
      { value: '$18M', label: 'Annual cost savings' },
    ],
  },
  {
    tag: 'Customer 360',
    category: 'Retail',
    title: 'Fortune 100 Semiconductor Company',
    challenge: 'Seven disconnected data platforms (POS, CRM, loyalty, e-commerce) prevented a unified customer view and real-time personalization at scale.',
    solution: 'Architected a Customer 360 intelligence layer unifying all platforms, delivering real-time personalization across channels.',
    outcomes: [
      { value: '28%', label: 'Lift in customer lifetime value' },
      { value: '61%', label: 'Faster campaign time-to-market' },
      { value: '4.4x', label: 'ROI within 12 months' },
    ],
  },
  {
    tag: 'Fractional CMO',
    category: 'SaaS / Technology',
    title: 'Medical Devices Company (Post-IPO)',
    challenge: 'Rapid growth outpacing marketing infrastructure, lacking a unified brand narrative, and inconsistent pipeline generation.',
    solution: 'Stepped in as fractional CMO to rebuild brand strategy, implement a demand generation engine, and optimize lead nurturing systems.',
    outcomes: [
      { value: '2.7x', label: 'Pipeline growth in 3 months' },
      { value: '40%', label: 'Reduction in CAC' },
      { value: 'IPO', label: 'Digital Transformation post-IPO' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <Page active="Case Studies">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <p className="eyebrow mb-4">CASE STUDIES</p>
          <h1 className="section-title text-white mb-6">Outcomes That Speak for Themselves</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Real engagements. Measurable results. Each project represents a complex challenge transformed into a clear, high-value outcome.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="shell space-y-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="card overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="pill bg-royal/10 text-royal font-semibold">{cs.tag}</span>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{cs.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">{cs.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="eyebrow mb-4">CHALLENGE</p>
                    <p className="text-gray-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-4">SOLUTION</p>
                    <p className="text-gray-600 leading-relaxed">{cs.solution}</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-8">
                  <p className="eyebrow mb-6">OUTCOMES</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {cs.outcomes.map((o, i) => (
                      <div key={i}>
                        <p className="text-3xl md:text-4xl font-bold text-royal mb-1">{o.value}</p>
                        <p className="text-sm text-gray-600">{o.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Have a challenge like these?" text="Let's explore what a similar outcome could look like for your organization." label="Start a Conversation" />
    </Page>
  );
}
