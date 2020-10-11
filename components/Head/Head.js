import React from 'react';
import PropTypes from 'prop-types';
import HeadNext from 'next/head';

const Head = ({ title, description, url, canonical, image }) => (
  <HeadNext>
    <title>{title}</title>
    <meta name="description" content={description} />
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:image" content={image} />
    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={url} />
    <meta name="twitter:creator" content="@SusCasasola" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image:url" content={image} />
  </HeadNext>
);

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  image: PropTypes.string.isRequired,
};

Head.defaultProps = {
  description: '',
  canonical: '',
};

export default Head;
