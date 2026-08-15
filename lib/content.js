import path from 'path';
import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export async function getBlogSlugs() {
  const dir = path.join(contentDir, 'blog');
  try {
    const files = await readdir(dir);
    return files.filter(f => f.endsWith('.mdx')).map(f => f.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export async function getBlogPost(slug) {
  const fullPath = path.join(contentDir, 'blog', `${slug}.mdx`);
  let source;
  try {
    source = await readFile(fullPath, 'utf-8');
  } catch {
    return null;
  }
  const { data, content } = matter(source);
  return {
    slug,
    frontmatter: { 
      ...data, 
      image: data.image || '',
      readTime: data.readTime || `${Math.ceil(content.split(/\s+/).length / 200)} min read`
    },
    content,
  };
}

export async function getAllBlogPosts() {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map(getBlogPost));
  return posts
    .filter(Boolean)
    .filter(p => p.frontmatter && p.frontmatter.date)
    .sort((a, b) => (b.frontmatter.date || '').localeCompare(a.frontmatter.date || ''));
}
