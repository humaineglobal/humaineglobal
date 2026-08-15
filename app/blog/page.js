import Link from 'next/link';
import { Mark } from '../../components/Mark';
import { getAllBlogPosts } from '../../lib/content';

function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={post.frontmatter.image || '/images/article-placeholder.svg'}
            alt={post.frontmatter.title}
            width={800}
            height={450}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 lg:p-8">
          {post.frontmatter.type && (
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wide uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              {post.frontmatter.type}
            </span>
          )}
          <h3 className="mt-3 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight font-heading">
            {post.frontmatter.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {post.frontmatter.description}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
            <span className="text-border">•</span>
            <span>{post.frontmatter.readTime}</span>
            <span className="text-border">•</span>
            <span className="text-foreground">{post.frontmatter.author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function Blog() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="shell flex items-center justify-between h-16">
          <Link href="/" aria-label="Home"><Mark /></Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {['Home', 'Services', 'About', 'Case Studies', 'Blog', 'Contact'].map((label) => (
              <Link
                key={label}
                href={`/${label === 'Home' ? '' : label.toLowerCase().replace(' ', '-')}`}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  label === 'Blog' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
                {label === 'Blog' && <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary" />}
              </Link>
            ))}
            <Link href="/contact" className="px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-none hover:bg-primary/90 transition-colors">
              Let's Talk
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="pt-36 pb-20 hero-gradient">
          <div className="shell">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-6">INSIGHTS</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white font-heading">
                Ideas for Building<br />What Matters
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed font-light text-white/80">
                Articles and white papers on human-centered AI, customer intelligence, and the disciplines of sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="py-8 border-b border-border">
          <div className="shell">
            <div className="flex flex-wrap gap-3">
              {['All', '#AI Strategy', '#AI agents', '#AI marketing', '#AI operations'].map((tag) => (
                <button key={tag} className="px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-20">
          <div className="shell">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border">
        <div className="shell py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Mark />
              <p className="mt-4 text-sm text-muted-foreground max-w-sm">Making AI Human. Amplifying Value. Enabling Growth.</p>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Pages</h4>
              <div className="flex flex-col gap-2">
                {['Home', 'Services', 'About', 'Case Studies', 'Blog', 'Contact'].map((label) => (
                  <Link key={label} href={`/${label === 'Home' ? '' : label.toLowerCase().replace(' ', '-')}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-4">Legal</h4>
              <div className="flex flex-col gap-2">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2026 humAIne. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Chief Marketing, Technology & Finance Officer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
