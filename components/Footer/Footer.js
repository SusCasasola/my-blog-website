import React from 'react';

import { useTranslate } from 'components/I18nContext';
import { footerStyles } from './Footer.scss';

const Footer = () => {
  const { t } = useTranslate();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles}>
      <p>
        {`${t('footer_find_me')} `}
        <a href="https://twitter.com/SusCasasola" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        {`, `}
        <a href="https://github.com/SusCasasola" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        {`, `}
        <a href="https://codepen.io/SusCasasola" target="_blank" rel="noopener noreferrer">
          CodePen
        </a>
        {` & `}
        <a href="https://codesandbox.io/u/SusCasasola" target="_blank" rel="noopener noreferrer">
          CodeSandbox
        </a>
      </p>
      <p>
        {`${t('footer_built_with')} `}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next
        </a>
        {`, `}
        <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
          Contentful
        </a>
        {' & '}
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
      </p>
      <p>{`© Sussie Casasola ${currentYear}`}</p>
    </footer>
  );
};

export default Footer;
