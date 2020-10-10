import React from 'react';

const Article = ({ entry }) => <div>{console.log(entry)}Soy el article</div>;

export default Article;

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import getConfig from 'next/config';
// import { withRouter } from 'next/router';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// import Layout from 'components/Layout';
// import translate from 'utils/translate';
// import formatDate from 'utils/formatDate';
// import articleRenderingOptions from 'utils/articleRenderingOptions';
// import {
//   articleTitle,
//   articleBody,
//   articleDate,
//   articleDescription,
// } from 'styles/components/article.scss';

// const contentful = require('contentful');

// const { publicRuntimeConfig } = getConfig();

// class Article extends Component {
//   static async getInitialProps({ query }) {
//     const client = contentful.createClient(publicRuntimeConfig.contentLoad);

//     const entry = await client.getEntries({
//       content_type: 'blogPost',
//       'fields.slug': query.slug,
//     });

//     return {
//       entry: entry.items[0],
//       currentLang: query.lang,
//     };
//   }

//   render() {
//     const {
//       router: { asPath },
//       entry,
//       currentLang,
//     } = this.props;
//     const { publishDate, body, title, description, canonical, slug, image } = entry.fields;

//     const articleBodyInnerHTML = { __html: documentToHtmlString(body, articleRenderingOptions) };
//     const articleUrl = `https://www.sussie.dev/${currentLang}/blog/${slug}`;
//     const articleImageUrl = `https:${image.fields.file.url}`;
//     const splittedDescription = `${description.substring(0, 47)}...`;
//     const metaDataInfo = {
//       title,
//       description: splittedDescription,
//       canonical,
//       url: articleUrl,
//       image: articleImageUrl,
//     };

//     return (
//       <Layout
//         currentUrl={asPath}
//         currentLang={currentLang}
//         showLangSwitch={false}
//         metaDataInfo={metaDataInfo}
//       >
//         <article>
//           <h1 className={articleTitle}>{title}</h1>
//           <header className={articleDescription}>
//             <span className={articleDate}>
//               {`${translate(currentLang, 'article_published_on')}${formatDate(publishDate)}`}
//             </span>
//             <p>{description}</p>
//           </header>
//           <section className={articleBody} dangerouslySetInnerHTML={articleBodyInnerHTML} />
//         </article>
//       </Layout>
//     );
//   }
// }

// Article.propTypes = {
//   router: PropTypes.shape({ asPath: PropTypes.string }).isRequired,
//   entry: PropTypes.object.isRequired, //eslint-disable-line
//   currentLang: PropTypes.string.isRequired,
// };

// export default withRouter(Article);
