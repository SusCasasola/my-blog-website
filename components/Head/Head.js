import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadComponent = ({ metaDataInfo, currentLang }) => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="author" content="SusCasasola" />
    <meta name="google-site-verification" content="JrxH-_FC_zpQ-Rpx7Mx4-d4cpoH_loKqF1p7FhIoYxk" />

    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/static/favicon/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicon/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png" />
    <meta name="theme-color" content="#ffffff" />
    <link
      href="https://fonts.googleapis.com/css?family=Poppins|Lato:300,400,700"
      rel="stylesheet"
    />

    <html lang={currentLang} />
    <title>{metaDataInfo.title}</title>
    <meta name="description" content={metaDataInfo.description} />
    {metaDataInfo.canonical && <link rel="canonical" href={metaDataInfo.canonical} />}
    <meta property="og:image" content={metaDataInfo.image} />
    <meta property="og:title" content={metaDataInfo.title} />
    <meta property="og:url" content={metaDataInfo.url} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={metaDataInfo.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={metaDataInfo.url} />
    <meta name="twitter:creator" content="@SusCasasola" />
    <meta name="twitter:title" content={metaDataInfo.title} />
    <meta name="twitter:description" content={metaDataInfo.description} />
    <meta name="twitter:image:url" content={metaDataInfo.image} />
  </Head>
);

HeadComponent.propTypes = {
  metaDataInfo: PropTypes.object.isRequired, //eslint-disable-line
  currentLang: PropTypes.string.isRequired,
};

export default HeadComponent;
