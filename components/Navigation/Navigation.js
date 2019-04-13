import Link from 'next/link';

import { flexEnd } from 'styles/objects/flexEnd.scss';
import { navigation } from 'styles/components/navigation.scss';

const Navigation = ({ currentUrl }) => {
  const isActiveClass = path => currentUrl === path ? 'active' : '';

  return (
    <nav className={navigation}>
      <ul className={flexEnd}>
        <li>
          <Link as="/" href='/home'>
            <a className={isActiveClass('/home')}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className={isActiveClass('active')}>About</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a className={isActiveClass('/blog')}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;