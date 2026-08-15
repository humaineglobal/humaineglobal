import { notFound } from 'next/navigation';
import { Page, CTA } from '../../../components/Site';
import { getBlogPost, getAllBlogPosts } from '../../../lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  // Get related articles (same type, excluding current)
  const allPosts = getAllBlogPosts();
  const related = allPosts
    .filter(r => r.frontmatter.type === p.type && r.slug !== slug)
    .slice(0, 3);

  return (
    <Page active="Blog">
      {/* Hero Banner with Image */}
      <section className="relative bg-gradient-to-br from-[#0d1538] via-[#1a2148] to-[#0d1538] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="shell relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-royal/20 text-royal border border-royal/30 rounded-full text-sm font-semibold mb-6">
              {p.type}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {p.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              {p.description}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <span className="w-8 h-8 bg-royal rounded-full flex items-center justify-center text-white text-xs font-bold">S</span>
                {p.author}
              </span>
              <span>•</span>
              <span>{p.date}</span>
              <span>•</span>
              <span>{p.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {p.image && (
        <section className="py-8 bg-white">
          <div className="shell">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img src={p.image} alt={p.title} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none 
              prose-headings:text-[#0d1538] prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-royal prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#0d1538]
              prose-blockquote:border-l-royal prose-blockquote:bg-royal/5 prose-blockquote:rounded-r-lg prose-blockquote:py-2 prose-blockquote:px-6
              prose-li:text-gray-700
            ">
              <MDXRemote source={content} />
            </div>

            {/* Explore Topics */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm font-bold text-[#0d1538] mb-4 uppercase tracking-wider">Explore Topics</p>
              <div className="flex flex-wrap gap-3">
                {['#AI Strategy', '#Leadership', '#B2B Growth', '#Marketing', '#Customer Experience', '#Innovation'].map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/blog?tag=${tag.slice(1)}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-royal/10 hover:text-royal transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-royal rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="font-bold text-[#0d1538] text-lg">Suman | humAIne</p>
                  <p className="text-gray-600 text-sm mt-1">Content creator and writer sharing insights and stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="shell">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-4">Continue Reading</p>
              <h2 className="text-3xl font-bold text-[#0d1538]">You Might Also Enjoy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
                      <img src={r.frontmatter.image || '/images/article-placeholder.svg'} alt={r.frontmatter.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <small className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{r.frontmatter.type}</small>
                      <h3 className="text-lg font-bold text-[#0d1538] mt-2 mb-3 group-hover:text-royal transition-colors leading-tight">{r.frontmatter.title}</h3>
                      <span className="text-sm font-semibold text-royal inline-flex items-center gap-1">
                        {r.frontmatter.readTime} <span>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Insights Like This in Your Inbox</h2>
            <p className="text-white/70 mb-8">Join leaders who receive practical perspectives on AI strategy, B2B growth, and the future of intelligent business.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-royal"
              />
              <button className="px-6 py-3 bg-royal text-white font-semibold rounded-lg hover:bg-royal-dark transition-colors whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}

export async function generateStaticParams() {
  const { getBlogSlugs } = await import('../../../lib/content');
  return getBlogSlugs().map((slug) => ({ slug }));
}
