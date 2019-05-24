import Link from 'next/link';

import { flexEnd } from 'styles/objects/flexbox.scss';
import { navigation, activeLink } from 'styles/components/navigation.scss';

const Navigation = ({ currentUrl, currentLang }) => {
  const isActiveClass = path =>
    currentUrl === path || 
    currentUrl === `/${currentLang}${path}` ||
    currentUrl === `/${currentLang}` && path === '/'
    ? activeLink : null;

  return (
    <nav className={navigation}>
      <ul className={flexEnd}>
        <li>
          <Link as={`/${currentLang}`} href={`/${currentLang}/home`}>
            <a className={isActiveClass('/')}>
              {currentLang === 'es' ? 'Inicio' : 'Home'}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/${currentLang}/about`}>
            <a className={isActiveClass('/about')}>
              {currentLang === 'es' ? 'Sobre mi' : 'About'}
            </a>
          </Link>
        </li>
        <li>
          <Link href={`/${currentLang}/blog`}>
            <a className={isActiveClass('/blog')}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;