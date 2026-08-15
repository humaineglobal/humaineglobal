import { Page, CTA } from '../../components/Site';

export default function About() {
  return (
    <Page active="About">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/70 mb-6">ABOUT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading">
              The Intersection of Marketing, Technology & Finance
            </h1>
            <p className="text-xl text-white/80 font-light">
              Three disciplines. One lens. A career built on turning B2B complexity into a serial growth engine.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy - Three Columns */}
      <section className="py-20 bg-white">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                I've spent my career at the intersection of three domains most organizations treat as separate functions — marketing, technology, and finance. That vantage point changes how you see problems. What looks like a marketing challenge is often a data architecture problem. What looks like a technology gap is often a strategy problem.
              </p>
            </div>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                humAIne exists because I kept seeing the same pattern: organizations investing in AI and digital transformation without a human-centric foundation. The missing ingredient was a clear line of sight from the end customer's needs back through the organization's systems, processes, and decisions.
              </p>
            </div>
            <div>
              <p className="text-base text-muted-foreground leading-relaxed">
                I built humAIne to close that gap — bringing together AI engineering, customer intelligence, and executive strategy to deliver outcomes that are tangible, sustainable, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-12 bg-white">
        <div className="shell">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src="/images/about-presentation.jpg" 
              alt="Business professional presenting to a team" 
              width={1200} 
              height={500} 
              className="w-full object-cover max-h-[400px]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-2xl font-bold">20+ YEARS</p>
              <p className="text-white/80">At the intersection of people, AI, and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="shell">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-heading">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-primary pl-6">
              <small className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Marketing</small>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Led go-to-market strategy and demand generation for organizations ranging from Series B startups to Fortune 500 enterprises.
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <small className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Technology</small>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Architected and delivered AI, CX, and data platform solutions across financial services, retail, healthcare, and SaaS.
              </p>
            </div>
            <div className="border-l-2 border-border pl-6">
              <small className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Finance</small>
              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Applied financial rigor to technology investment decisions — building business cases, modeling unit economics, and ensuring measurable return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How I Apply Change */}
      <section className="py-20 bg-white border-t border-border">
        <div className="shell">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-heading">How I Apply Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-secondary rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary mb-3 font-heading">01</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Start with the end customer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement begins by answering one question: what does the person on the other end of this interaction actually need? That answer shapes everything that follows.
              </p>
            </div>
            <div className="p-8 bg-secondary rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary mb-3 font-heading">02</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Complexity is a symptom, not a strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Organizational complexity is almost always the accumulated result of siloed decisions. The fix is never more process — it is clearer architecture and shared accountability.
              </p>
            </div>
            <div className="p-8 bg-secondary rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary mb-3 font-heading">03</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Outcomes over outputs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Success is measured by what changes for the customer — repeat engagement, revenue retention, advocacy — not by the deliverables we produce along the way.
              </p>
            </div>
            <div className="p-8 bg-secondary rounded-xl border border-border">
              <p className="text-3xl font-bold text-primary mb-3 font-heading">04</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Rigor without rigidity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategy demands discipline, but execution demands the flexibility to counter resistance and adapt when the market shifts beneath you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="Let's Work Together" 
        text="If you're navigating a complex challenge at the intersection of AI, customer experience, or growth strategy — I'd like to hear about it." 
        label="Start a Conversation" 
      />
    </Page>
  );
}
