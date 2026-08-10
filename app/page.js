import Link from 'next/link';

const services = [
  ['01', 'AI strategy', 'Set the direction, operating model, and roadmap for practical AI adoption.'],
  ['02', 'Intelligent products', 'Design useful, trusted experiences that turn complex technology into momentum.'],
  ['03', 'Transformation', 'Build the capability, governance, and confidence to scale what works.'],
];

export default function HomePage() {
  return (
    <main style={{ background: '#f6f3ed', color: '#122b3b', minHeight: '100vh', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '40px 28px 84px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #cdd5d6', paddingBottom: 24, gap: 24 }}>
          <Link href="/" style={{ color: '#12354a', textDecoration: 'none', fontWeight: 800, fontSize: 22, letterSpacing: '-.7px' }}>Hum<span style={{ color: '#c75b36' }}>AI</span>ne <span style={{ fontWeight: 500 }}>Global</span></Link>
          <nav style={{ display: 'flex', gap: 22, fontSize: 13, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase' }}>
            <Link href="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
            <Link href="/case-studies" style={{ color: 'inherit', textDecoration: 'none' }}>Work</Link>
            <Link href="/insights" style={{ color: 'inherit', textDecoration: 'none' }}>Insights</Link>
            <Link href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.06fr) minmax(340px,.94fr)', gap: 56, alignItems: 'center', paddingTop: 72 }}>
          <div>
            <p style={{ color: '#c75b36', fontSize: 12, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', margin: '0 0 20px' }}>AI, made consequential</p>
            <h1 style={{ fontFamily: 'Georgia, Times, serif', fontSize: 'clamp(50px,7vw,92px)', lineHeight: '.96', letterSpacing: '-.065em', margin: '0 0 28px', maxWidth: 720 }}>Make intelligence your advantage.</h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, maxWidth: 590, margin: '0 0 34px', color: '#36505d' }}>HumAIne Global partners with ambitious leaders to turn artificial intelligence into durable growth, better decisions, and products people trust.</p>
            <Link href="/contact" style={{ display: 'inline-block', background: '#12354a', color: '#fff', padding: '15px 22px', textDecoration: 'none', fontSize: 13, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase' }}>Start a conversation →</Link>
          </div>

          <div aria-label="Strategic intelligence network" style={{ position: 'relative', aspectRatio: '1 / 1', minHeight: 380, overflow: 'hidden', background: '#12354a', borderRadius: 2, boxShadow: '20px 22px 0 #d8dedb' }}>
            <div style={{ position: 'absolute', width: '76%', height: '76%', border: '1px solid rgba(255,255,255,.25)', borderRadius: '50%', top: '12%', left: '12%' }} />
            <div style={{ position: 'absolute', width: '52%', height: '52%', border: '1px solid rgba(255,255,255,.28)', borderRadius: '50%', top: '24%', left: '24%' }} />
            <div style={{ position: 'absolute', width: '28%', height: '28%', background: '#c75b36', borderRadius: '50%', top: '36%', left: '36%', boxShadow: '0 0 0 20px rgba(199,91,54,.13)' }} />
            {[['17%','49%'],['45%','14%'],['78%','40%'],['65%','76%'],['25%','78%']].map(([top,left], i) => <span key={i} style={{ position: 'absolute', top, left, width: 13, height: 13, background: '#f6f3ed', borderRadius: '50%', boxShadow: '0 0 0 6px rgba(246,243,237,.14)' }} />)}
            <p style={{ position: 'absolute', bottom: 26, left: 28, color: '#f6f3ed', margin: 0, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>Connected intelligence / 01</p>
          </div>
        </div>
      </section>

      <section style={{ background: '#e9e4dc', padding: '70px 28px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <p style={{ color: '#c75b36', fontSize: 12, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', margin: '0 0 14px' }}>What we do</p>
          <h2 style={{ fontFamily: 'Georgia, Times, serif', fontSize: 'clamp(34px,4vw,58px)', letterSpacing: '-.05em', margin: '0 0 46px', maxWidth: 780 }}>Turn possibility into a plan your organization can deliver.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {services.map(([number, title, text]) => <article key={number} style={{ borderTop: '2px solid #12354a', paddingTop: 18 }}><p style={{ color: '#c75b36', fontWeight: 800, margin: '0 0 34px' }}>{number}</p><h3 style={{ fontSize: 24, margin: '0 0 12px' }}>{title}</h3><p style={{ color: '#36505d', lineHeight: 1.55, margin: 0 }}>{text}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
