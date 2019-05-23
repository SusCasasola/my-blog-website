import Link from 'next/link';

import { flexEnd } from 'styles/objects/flexbox.scss';
import { navigation, activeLink } from 'styles/components/navigation.scss';

const Navigation = ({ currentUrl, currentLang }) => {
  const isActiveClass = path => currentUrl === path ? activeLink : null;

  return (
    <nav className={navigation}>
      <ul className={flexEnd}>
        <li>
          <Link as={`/${currentLang}/`} href={`/${currentLang}/home`}>
            <a
              className={
                isActiveClass('/') ||
                isActiveClass('/en/') ||
                isActiveClass('/es/')
              }
            >{currentLang === 'es' ? 'Inicio' : 'Home'}</a>
          </Link>
        </li>
        <li>
          <Link href={`/${currentLang}/about`}>
            <a
              className={
                isActiveClass('/about') ||
                isActiveClass('/en/about') ||
                isActiveClass('/es/about')
              }
            >{currentLang === 'es' ? 'Sobre mi' : 'About'}</a>
          </Link>
        </li>
        <li>
          <Link href={`/${currentLang}/blog`}>
            <a
              className={
                isActiveClass('/blog') ||
                isActiveClass('/en/blog') ||
                isActiveClass('/es/blog')
              }
            >Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;