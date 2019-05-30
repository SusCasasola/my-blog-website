import Link from 'next/link';
import translate from 'utils/translate';

const ArticlePreview = ({ title, description, publishDate, slug, currentLang }) => {
  const d = new Date(publishDate);
  const formattedDate = `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;

  return (
    <article>
      <h2>{title}</h2>
      <span>
        {`${translate(currentLang, 'article_published_on')}${formattedDate}`}
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
};

export default ArticlePreview;