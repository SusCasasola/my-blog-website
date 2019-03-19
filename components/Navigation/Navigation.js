import Link from 'next/link';
import styles from './styles';

const Navigation = ({ currentUrl }) => (
  <nav {...styles()}>
    <Link href='/'>
      <a className={currentUrl === '/' ? 'active' : ''}>Home</a>
    </Link>
    <Link href='/about'>
      <a className={currentUrl === '/about' ? 'active' : ''}>About</a>
    </Link>
    <Link href='/blog'>
      <a className={currentUrl === '/blog' ? 'active' : ''}>Blog</a>
    </Link>
  </nav>
);

export default Navigation;