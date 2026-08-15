import Link from 'next/link';
import { Page } from '../../../components/Site';
import { getBlogPost, getAllBlogPosts } from '../../../lib/content';
import { notFound } from 'next/navigation';
import { remarkGfm } from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  
  return {
    title: `${post.frontmatter.title} | humAIne`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [{ url: post.frontmatter.image }] : [],
      type: 'article',
    },
  };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  const allPosts = await getAllBlogPosts();
  const related = allPosts
    .filter(r => r.slug !== slug)
    .map(r => {
      let score = 0;
      if (r.frontmatter.type === p.type) score += 3;
      const tags1 = p.tags || [];
      const tags2 = r.frontmatter.tags || [];
      tags1.forEach(t => { if (tags2.includes(t)) score += 1; });
      return { post: r, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score || (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''))
    .slice(0, 3)
    .map(r => r.post);

  return (
    <Page active="Blog">
      {/* Decorative Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Back Navigation */}
        <div className="pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Insights
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-16 lg:mb-24 text-center">
          {/* Category Badge */}
          {p.type && (
            <div className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-primary bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border-2 border-primary/20 shadow-lg shadow-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {p.type}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {p.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {p.description}
          </p>

          {/* Metadata Card */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent/30 rounded-2xl border-2 border-border/50 shadow-xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg text-white font-bold text-lg">
              S
            </div>
            <span className="text-foreground font-medium">{p.author}</span>
            <span className="text-border text-2xl">•</span>
            <time dateTime={p.date} className="text-muted-foreground">{p.date}</time>
            <span className="text-border text-2xl">•</span>
            <span className="text-muted-foreground flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {p.readTime}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        {p.image && (
          <div className="mb-20 lg:mb-28 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
              <img
                src={p.image}
                alt={p.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                fetchPriority="high"
              />
            </div>
          </div>
        )}

        {/* Side Decoration Line */}
        <div className="hidden lg:block absolute -left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent" aria-hidden="true" />

        {/* Article Body */}
        <div className="rich-text" data-content-file={`src/content/data/blog/${p.slug}.md`}>
          <MDXRemote source={content} />
        </div>

        {/* Tags Section */}
        {(p.tags || []).length > 0 && (
          <div className="mt-24 pt-12 border-t-2 border-border/50 relative">
            {/* Floating dot cluster */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-background flex gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="w-2 h-2 rounded-full bg-primary/30" />
            </div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 text-center">Explore Topics</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {p.tags.slice(0, 6).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-6 py-3 text-sm font-bold bg-gradient-to-br from-accent/50 to-accent/30 text-foreground rounded-xl border-2 border-border/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Card */}
        <div className="mt-16 p-10 bg-gradient-to-br from-accent/40 via-accent/20 to-transparent rounded-3xl border-2 border-border/50 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-tr-full" aria-hidden="true" />
          <div className="flex items-start gap-6 relative z-10">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity" aria-hidden="true" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 ring-4 ring-background shadow-xl flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
            </div>
            <div>
              <p className="font-bold text-foreground text-xl">Suman | humAIne</p>
              <p className="text-muted-foreground text-sm mt-1">Content creator and writer sharing insights and stories.</p>
            </div>
          </div>
        </div>

        {/* Social Share Bar */}
        <div className="max-w-4xl mx-auto px-4 py-10 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Share this article</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://humaineglobal.com/blog/${p.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://humaineglobal.com/blog/${p.slug}`)}&text=${encodeURIComponent(p.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Share on X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              Twitter
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Copy link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-16 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-8 font-heading">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={r.frontmatter.image || '/images/article-placeholder.svg'}
                        alt={r.frontmatter.title}
                        width={800}
                        height={450}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      {r.frontmatter.type && (
                        <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                          {r.frontmatter.type}
                        </span>
                      )}
                      <h3 className="mt-3 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight font-heading">
                        {r.frontmatter.title}
                      </h3>
                      <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={r.frontmatter.date}>{r.frontmatter.date}</time>
                        <span className="text-border">•</span>
                        <span>{r.frontmatter.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Page>
  );
}

export async function generateStaticParams() {
  const slugs = ['chariot-problem', 'brand-resistance', 'new-chess-game', 'iq-eq-sq', 'mdm-bottleneck', 'customer-360-margin', 'b2b-ai-strategies-fail', 'milk-and-oil', 'ai-culture', 'symphony-customer-engagement', 'website-concert-hall', 'rise-of-cmto'];
  return slugs.map(slug => ({ slug }));
}
