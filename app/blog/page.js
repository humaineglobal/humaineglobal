import Link from 'next/link';
import { Page, CTA } from '../../components/Site';
import { getAllBlogPosts } from '../../lib/content';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <Page active="Blog">
      {/* Hero */}
      <section className="hero-gradient py-24">
        <div className="shell">
          <h1 className="section-title text-white mb-6">Insights</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Practical perspectives on AI strategy, B2B growth, and the future of intelligent business.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 border-b border-gray-100">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {['All', '#AI Strategy', '#AI marketing', '#AI agents', '#B2B growth'].map((tag) => (
                <button key={tag} className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal/10 hover:text-royal transition-colors">
                  {tag}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500">{posts.length} posts</p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="pill bg-royal/10 text-royal font-semibold">{post.frontmatter.type}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-royal transition-colors">{post.frontmatter.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.frontmatter.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.frontmatter.date}</span>
                    <span>•</span>
                    <span>{post.frontmatter.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Want to explore an idea together?" text="Start with a conversation about the challenge in front of you." label="Start a Conversation" />
    </Page>
  );
}
