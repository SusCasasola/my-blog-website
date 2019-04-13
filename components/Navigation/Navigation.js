import Link from 'next/link';

import css from 'styles/objects/flexEnd.scss';

const Navigation = ({ currentUrl }) => {
  const isActiveClass = path => currentUrl === path ? 'active' : '';

  return (
    <nav>
      <ul className={css.flexEnd}>
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