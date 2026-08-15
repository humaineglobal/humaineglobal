import { notFound } from 'next/navigation';
import { Page, CTA } from '../../../components/Site';
import { getInsightBySlug } from '../../../lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) return notFound();

  const { frontmatter: p, content } = post;

  return (
    <Page active="Insights">
      <article className="shell article">
        <em className="eyebrow">{p.type?.toUpperCase() || 'ARTICLE'}</em>
        <h1>{p.title}</h1>
        <p className="deck">{p.description}</p>
        <hr />
        <MDXRemote source={content} />
      </article>
      <CTA title="Want to explore this idea together?" text="Start with a conversation about the challenge in front of you." label="Book a Discovery Call" />
    </Page>
  );
}

export async function generateStaticParams() {
  const { getInsightSlugs } = await import('../../../lib/content');
  return getInsightSlugs().map((slug) => ({ slug }));
}
