import Link from 'next/link';
import translate from 'utils/translate';

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
        <a>{translate(currentLang, 'article_read_more')}</a>
      </Link>
    </p>
  </article>
);

export default ArticlePreview;