import { notFound } from 'next/navigation';
import { Page, CTA } from '../../../components/Site';
import { getBlogPost, getAllBlogPosts } from '../../../lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  
  return {
    title: `${post.frontmatter.title} | humAIne`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [{ url: post.frontmatter.image }] : [],
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  // Get related articles
  const allPosts = getAllBlogPosts();
  const related = allPosts
    .filter(r => r.slug !== slug)
    .slice(0, 3);

  return (
    <Page active="Blog">
      {/* Featured Image — Full Width */}
      {p.image && (
        <section className="pt-20 bg-white">
          <div className="shell">
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={p.image} 
                  alt={p.title}
                  width={1200}
                  height={500}
                  fetchPriority="high"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            {/* Article Header */}
            <header className="mb-12 pb-8 border-b border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full">
                  {p.type}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 font-heading">
                {p.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">S</span>
                  {p.author}
                </span>
                <span>•</span>
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>
            </header>

            {/* Article Body — Rich Typography */}
            <div className="prose prose-lg max-w-none 
              prose-headings:text-foreground prose-headings:font-bold prose-headings:font-heading
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:not-italic
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-li:text-gray-700
            ">
              <MDXRemote source={content} />
            </div>

            {/* Explore Topics */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Explore Topics</p>
              <div className="flex flex-wrap gap-3">
                {['#AI Strategy', '#Leadership', '#B2B Growth', '#Marketing', '#Customer Experience', '#Innovation'].map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/blog?tag=${tag.slice(1)}`}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-secondary rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0">
                  S
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Suman | humAIne</p>
                  <p className="text-muted-foreground text-sm mt-1">Content creator and writer sharing insights and stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-20 bg-secondary border-t border-border">
          <div className="shell">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">Continue Reading</p>
              <h2 className="text-3xl font-bold text-foreground font-heading">You Might Also Enjoy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[16:10] overflow-hidden bg-secondary">
                      <img src={r.frontmatter.image || '/images/article-placeholder.svg'} alt={r.frontmatter.title} width={800} height={500} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <small className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{r.frontmatter.type}</small>
                      <h3 className="text-lg font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors leading-tight font-heading">{r.frontmatter.title}</h3>
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
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
      <section className="py-20 hero-gradient">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Get Insights Like This in Your Inbox</h2>
            <p className="text-white/70 mb-8 text-lg">Join leaders who receive practical perspectives on AI strategy, B2B growth, and the future of intelligent business.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
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
