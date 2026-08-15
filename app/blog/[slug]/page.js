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
      <article className="py-20">
        <div className="shell max-w-3xl">
          <div className="mb-8">
            <span className="pill bg-royal/10 text-royal font-semibold mb-4 inline-block">{p.type}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#0d1538] mb-4">{p.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{p.description}</p>
            <div className="flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-6">
              <span>{p.author}</span>
              <span>•</span>
              <span>{p.date}</span>
              <span>•</span>
              <span>{p.readTime}</span>
            </div>
          </div>
          
          {p.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-gray-200">
              <img src={p.image} alt={p.title} className="w-full h-auto" />
            </div>
          )}
          
          <div className="prose max-w-none prose-headings:text-[#0d1538] prose-a:text-royal">
            <MDXRemote source={content} />
          </div>

          {/* Explore Topics */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-500 mb-4">Explore Topics</p>
            <div className="flex flex-wrap gap-2">
              {['#AI Strategy', '#Leadership', '#B2B Growth', '#Marketing', '#Customer Experience'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="shell">
            <h2 className="text-2xl font-bold text-[#0d1538] mb-8">Continue Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-royal/30 transition-colors">
                  <div className="relative aspect-[16:10] overflow-hidden bg-gradient-to-br from-[#0d1538] to-[#1a2148]">
                    <img src={r.frontmatter.image || '/images/article-placeholder.svg'} alt={r.frontmatter.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <small className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{r.frontmatter.type}</small>
                    <h3 className="text-base font-bold text-[#0d1538] mt-2 mb-2 group-hover:text-royal transition-colors leading-tight">{r.frontmatter.title}</h3>
                    <span className="text-sm font-semibold text-royal inline-flex items-center gap-1">
                      {r.frontmatter.readTime} <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </Page>
  );
}

export async function generateStaticParams() {
  const { getBlogSlugs } = await import('../../../lib/content');
  return getBlogSlugs().map((slug) => ({ slug }));
}
