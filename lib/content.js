import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content');

export function getInsightSlugs() {
  const dir = path.join(contentDir, 'insights');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''));
}

export function getInsightBySlug(slug) {
  const fullPath = path.join(contentDir, 'insights', `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(source);
  return {
    slug,
    frontmatter: { ...data, date: data.date ? new Date(data.date).toISOString().split('T')[0] : '', readTime: data.readTime || readingTime(content).text },
    content,
  };
}

export function getAllInsights() {
  const slugs = getInsightSlugs();
  return slugs
    .map(getInsightBySlug)
    .filter(Boolean)
    .sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''));
}
