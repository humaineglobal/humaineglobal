import { notFound } from 'next/navigation';
import { Page, CTA } from '../../../components/Site';
import { getBlogPost } from '../../../lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  return (
    <Page active="Blog">
      <article className="py-20">
        <div className="shell max-w-3xl">
          <div className="mb-8">
            <span className="pill bg-royal/10 text-royal font-semibold mb-4 inline-block">{p.type}</span>
            <h1 className="section-title text-navy mb-4">{p.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{p.description}</p>
            <div className="flex items-center gap-3 text-sm text-gray-500 border-b border-gray-100 pb-6">
              <span>{p.author}</span>
              <span>•</span>
              <span>{p.date}</span>
              <span>•</span>
              <span>{p.readTime}</span>
            </div>
          </div>
          <div className="prose max-w-none">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
      <CTA />
    </Page>
  );
}

export async function generateStaticParams() {
  const { getBlogSlugs } = await import('../../../lib/content');
  return getBlogSlugs().map((slug) => ({ slug }));
}
