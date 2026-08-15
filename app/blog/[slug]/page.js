import Link from 'next/link';
import { Page, CTA } from '../../../components/Site';
import { getBlogPost, getAllBlogPosts } from '../../../lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  const allPosts = getAllBlogPosts();
  const related = allPosts.filter(r => r.slug !== slug).slice(0, 3);

  return (
    <Page active="Blog">
      {/* Hero with Image */}
      <section className="pt-20 bg-white">
        <div className="shell">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={p.image || '/images/article-placeholder.svg'}
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

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            <header className="mb-12 pb-8 border-b border-gray-100">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-4">
                {p.type}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {p.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{p.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">S</span>
                  {p.author}
                </span>
                <span>•</span>
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>
            </header>

            <div className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-6
              prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
              prose-li:text-gray-700
            ">
              <MDXRemote source={content} />
            </div>

            {/* Explore Topics */}
            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Explore Topics</p>
              <div className="flex flex-wrap gap-3">
                {['#AI Strategy', '#Leadership', '#B2B Growth', '#Marketing', '#Customer Experience', '#Innovation'].map((tag) => (
                  <Link key={tag} href={`/blog?tag=${tag.slice(1)}`} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">S</div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Suman | humAIne</p>
                  <p className="text-gray-600 text-sm mt-1">Content creator and writer sharing insights and stories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="shell">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-600 mb-4">Continue Reading</p>
              <h2 className="text-3xl font-bold text-gray-900">You Might Also Enjoy</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative aspect-[16:10] overflow-hidden bg-gray-100">
                      <img src={r.frontmatter.image || '/images/article-placeholder.svg'} alt={r.frontmatter.title} width={800} height={500} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <small className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{r.frontmatter.type}</small>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors leading-tight">{r.frontmatter.title}</h3>
                      <span className="text-sm font-semibold text-blue-600 inline-flex items-center gap-1">{r.frontmatter.readTime} <span>→</span></span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="shell">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Insights Like This in Your Inbox</h2>
            <p className="text-blue-100 mb-8 text-lg">Join leaders who receive practical perspectives on AI strategy, B2B growth, and the future of intelligent business.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Enter your work email" className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400" />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 whitespace-nowrap">Subscribe Free</button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Page>
  );
}
