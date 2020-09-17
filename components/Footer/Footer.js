import React from 'react';

import { useTranslate } from 'components/I18nContext';
import { footerStyles } from './Footer.scss';

const Footer = () => {
  const { t } = useTranslate();

  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles}>
      <span>
        {`${t('footer_built_with')} `}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next
        </a>
        ,
        <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
          Contentful
        </a>
        {' & '}
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
      </span>
      <span>{`© Sussie Casasola - ${currentYear}`}</span>
    </footer>
  );
};

export default Footer;
