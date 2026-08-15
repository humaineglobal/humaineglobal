import Link from 'next/link';
import { Page } from '../../components/Site';
import { getAllInsights } from '../../lib/content';

export default function Insights() {
  const posts = getAllInsights();

  return (
    <Page active="Insights">
      <main className="shell page">
        <em className="eyebrow">INSIGHTS</em>
        <h1>Ideas for Building<br />What Matters</h1>
        <p className="intro">Articles and white papers on human-centered AI, customer intelligence, and the disciplines of sustainable growth.</p>
        <div className="postGrid">
          {posts.map(({ slug, frontmatter: p }) => (
            <Link href={`/insights/${slug}`} key={slug}>
              <small>{p.type?.toUpperCase() || 'ARTICLE'}</small>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <b>{p.readTime} →</b>
            </Link>
          ))}
        </div>
      </main>
    </Page>
  );
}
