import nextMdx from '@next/mdx';

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const withMdxConfig = withMdx({
  pageExtensions: ['js', 'jsx', 'mdx'],
});

export default withMdxConfig;
