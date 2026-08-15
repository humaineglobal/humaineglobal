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
      <section className="py-12">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group border border-gray-200 rounded-lg overflow-hidden hover:border-royal/30 transition-colors bg-white">
                {/* Article Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
                  <img 
                    src={post.frontmatter.image || '/images/article-placeholder.svg'} 
                    alt={post.frontmatter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <small className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{post.frontmatter.type}</small>
                  <h2 className="text-lg font-bold text-[#0d1538] mt-2 mb-3 group-hover:text-royal transition-colors leading-tight">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.frontmatter.description}
                  </p>
                  <span className="text-sm font-semibold text-royal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {post.frontmatter.readTime} <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}
