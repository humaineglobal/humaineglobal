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
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-royal mb-6">INSIGHTS</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#0d1538]">
              Ideas for Building<br />What Matters
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-600">
              Articles and white papers on human-centered AI, customer intelligence, and the disciplines of sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-gray-100">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-gray-500">Filter by category:</span>
              <div className="flex flex-wrap gap-2">
                {['All', '#AI Strategy', '#AI agents', '#AI marketing', '#AI operations'].map((tag) => (
                  <button key={tag} className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal/10 hover:text-royal transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-500">{posts.length} posts</p>
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
                  {/* Article Image */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
                    <img 
                      src={post.frontmatter.image || '/images/article-placeholder.svg'} 
                      alt={post.frontmatter.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {post.frontmatter.type}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#0d1538] mb-3 group-hover:text-royal transition-colors leading-tight">
                      {post.frontmatter.title}
                    </h2>
                    
                    <p className="text-base text-gray-600 mb-4 line-clamp-2 flex-1 leading-relaxed">
                      {post.frontmatter.description}
                    </p>
                    
                    {/* Read Time */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold text-royal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        {post.frontmatter.readTime} <span>→</span>
                      </span>
                      <span className="text-xs text-gray-400">{post.frontmatter.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}
