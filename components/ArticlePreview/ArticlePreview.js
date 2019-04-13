import Link from 'next/link';

const ArticlePreview = ({ title, description, slug }) => (
  <article>
    <h2>{title}</h2>
    <p>
      {description}
      <br />
      <Link
        as={`/blog/${slug}`}
        href={{ pathname:'/article', query: { slug: slug } }}
      >
        <a>Read more...</a>
      </Link>
    </p>
  </article>
);

export default ArticlePreview;