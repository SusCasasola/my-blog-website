import Link from 'next/link';

import translate from 'utils/translate';
import formatDate from 'utils/formatDate';

const ArticlePreview = ({ title, description, publishDate, slug, currentLang }) => (
  <article>
    <h2>{title}</h2>
    <span>
      {`${translate(currentLang, 'article_published_on')}${formatDate(publishDate)}`}
    </span>
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