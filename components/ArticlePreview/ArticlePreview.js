import Link from 'next/link';

const ArticlePreview = ({ title, description, slug, currentLang }) => (
  <article>
    <h2>{title}</h2>
    <p>
      {description}
      <br />
      <Link
        as={`/${currentLang}/blog/${slug}`}
        href={{ pathname:'/article', query: { slug: slug, lang: currentLang } }}
      >
        <a>Read more...</a>
      </Link>
    </p>
  </article>
);

export default ArticlePreview;