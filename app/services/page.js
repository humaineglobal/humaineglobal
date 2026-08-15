import { Page, CTA } from '../../components/Site';

const services = [
  {
    num: '01',
    title: 'Customized AI Solutions',
    tagline: 'Intelligent experiences built around the human on the other end.',
    description:
      'Most AI deployments fail because they optimize for the system, not the person using it. humAIne designs and builds conversational AI, agentic workflows, and intelligent automation that starts with the end customer\'s needs - then works backward into your technology stack.',
    capabilities: [
      'Conversational AI and chatbot design',
      'LLM integration and prompt engineering',
      'Voice and multimodal AI interfaces',
      'Agentic workflow automation',
      'AI-powered self-service experiences',
      'AI quality assurance and evaluation frameworks',
    ],
    outcome: 'Reduced handle time, higher first-contact resolution, and AI that customers actually want to use.',
  },
  {
    num: '02',
    title: 'Customer 360 / Unified Customer Intelligence',
    tagline: 'One orchestrated view. Zero organizational excuses.',
    description:
      'Fragmented data is the root cause of fragmented experiences. humAIne architects Customer 360 solutions that unify your CRM, commerce, support, loyalty, and behavioral data into a single intelligence layer - enabling personalization at scale, proactive service, and decisions grounded in reality.',
    capabilities: [
      'Data architecture and integration strategy',
      'Real-time customer profile orchestration',
      'Cross-channel journey mapping and activation',
      'CDP selection, implementation and optimization',
      'Personalization engine design',
      'Data governance and quality frameworks',
    ],
    outcome: 'A single source of truth that drives meaningful experiences and measurably reduces organizational effort.',
  },
  {
    num: '03',
    title: 'Fractional C-Suite',
    tagline: 'Senior leadership. Flexible engagement. Immediate impact.',
    description:
      'Not every organization needs a full-time CMO, CTO, or CFO - but every organization needs the thinking one brings. humAIne embeds as a fractional executive to provide strategic leadership, cross-functional alignment, and the accountability that drives results without the overhead of a permanent hire.',
    capabilities: [
      'Fractional CMO - go-to-market, brand, demand generation',
      'Fractional CFO - financial strategy, unit economics, fundraising',
      'Fractional CTO - technology strategy, AI roadmap, vendor selection',
      'AI readiness assessments and transformation roadmaps',
      'Cross-functional team alignment and operating cadence',
    ],
    outcome: 'Executive-caliber leadership embedded in your organization - accountable to outcomes, not headcount.',
  },
];

export default function Services() {
  return (
    <Page active="Services">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4">SERVICES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">What I Build</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Three integrated disciplines. One operating model for growth.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="shell space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="border-t border-border pt-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column */}
                <div>
                  <p className="text-6xl font-bold text-gray-200 mb-4">{service.num}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-heading">{service.title}</h2>
                  <p className="text-primary font-semibold mb-4">{service.tagline}</p>
                  {service.description && (
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  )}
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">CAPABILITIES</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                        </span>
                        <span className="text-sm text-foreground">{cap}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">OUTCOME</p>
                  <div className="border-l-4 border-primary pl-6">
                    <p className="text-foreground font-medium">{service.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Ready to simplify your most complex challenge?" text="Let's talk about what's possible when AI meets executive clarity." label="Start a Conversation" />
    </Page>
  );
}
