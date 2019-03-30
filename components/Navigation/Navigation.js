import Link from 'next/link';
import styles from './styles';

const Navigation = ({ currentUrl }) => (
  <nav {...styles()}>
    <Link prefetch href='/'>
      <a className={currentUrl === '/home' ? 'active' : ''}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={currentUrl === '/about' ? 'active' : ''}>About</a>
    </Link>
    <Link prefetch href='/blog'>
      <a className={currentUrl === '/blog' ? 'active' : ''}>Blog</a>
    </Link>
  </nav>
);

export default Navigation;