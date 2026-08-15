import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDir = path.join(process.cwd(), 'content');

export function getBlogSlugs() {
  const dir = path.join(contentDir, 'blog');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''));
}

export function getBlogPost(slug) {
  const fullPath = path.join(contentDir, 'blog', `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(source);
  return {
    slug,
    frontmatter: { ...data, date: data.date ? String(data.date) : '', readTime: data.readTime || readingTime(content).text },
    content,
  };
}

export function getAllBlogPosts() {
  const slugs = getBlogSlugs();
  return slugs
    .map(getBlogPost)
    .filter(Boolean)
    .sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''));
}
