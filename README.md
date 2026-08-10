# humAIne Global preview

## Local preview

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Contact
The inquiry form opens a pre-addressed email to `suman@humaineglobal.com`; it uses no backend or environment variables. The discovery scheduling button currently opens a discovery-call email. Replace that button URL in `app/contact/page.js` when a scheduling link is available.

## Publish
```bash
git init
git add .
git commit -m "Build humAIne Global website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/humaineglobal.git
git push -u origin main
```
Then import the repository in Vercel.

## Insights
The Insights index and three starter posts are included. Add or replace posts through the `posts` data in `app/insights/page.js` and `app/insights/[slug]/page.js`. A later MDX/CMS upgrade can make authoring non-technical.
