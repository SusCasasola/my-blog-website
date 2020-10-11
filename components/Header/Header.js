import React from 'react';
import Link from 'next/link';

import { useTranslate } from 'components/I18nContext';

import { headerStyles } from './Header.scss';

const Header = () => {
  const { currentLang, t } = useTranslate();

  return (
    <header className={headerStyles}>
      <Link as={`/${currentLang}`} href={`/${currentLang}/home`}>
        <a>
          <img src="/static/heart.png" alt="Sussie Logo" />
        </a>
      </Link>

      <nav>
        <ul className="no-list-style">
          <li>
            <Link as={`/${currentLang}`} href={`/${currentLang}/home`}>
              <a>{t('navigation_home')}</a>
            </Link>
          </li>
          <li>
            <Link as={`/${currentLang}/blog`} href={`/${currentLang}/blog`}>
              <a>{t('navigation_blog')}</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
