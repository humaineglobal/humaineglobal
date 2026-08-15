import Link from 'next/link';
import { Page, CTA } from '../../components/Site';
import { getAllBlogPosts } from '../../lib/content';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <Page active="Blog">
      {/* Hero */}
      <section className="pt-36 pb-20 bg-white">
        <div className="shell">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">INSIGHTS</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground font-heading">
              Ideas for Building<br />What Matters
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-muted-foreground">
              Articles and white papers on human-centered AI, customer intelligence, and the disciplines of sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-border">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-muted-foreground">Filter by category:</span>
              <div className="flex flex-wrap gap-2">
                {['All', '#AI Strategy', '#AI agents', '#AI marketing', '#AI operations'].map((tag) => (
                  <button key={tag} className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{posts.length} posts</p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="group block"
              >
                <article className="h-full flex flex-col">
                  {/* Article Image — Clickable */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-secondary">
                    <img 
                      src={post.frontmatter.image || '/images/article-placeholder.svg'} 
                      alt={post.frontmatter.title}
                      width={800} 
                      height={500}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {post.frontmatter.type}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight font-heading">
                      {post.frontmatter.title}
                    </h2>
                    
                    <p className="text-base text-muted-foreground mb-4 line-clamp-2 flex-1 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                    
                    {/* Read Time */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {post.frontmatter.readTime} <span>→</span>
                      </span>
                      <span className="text-xs text-muted-foreground">{post.frontmatter.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">Get Insights Like This in Your Inbox</h2>
            <p className="text-muted-foreground mb-8">Join leaders who receive practical perspectives on AI strategy, B2B growth, and the future of intelligent business.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-1 px-4 py-3 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
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
