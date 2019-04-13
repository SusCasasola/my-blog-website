import Link from 'next/link';

const Navigation = ({ currentUrl }) => (
  <nav>
    <Link as="/" href='/home'>
      <a className={currentUrl === '/home' ? 'active' : ''}>Home</a>
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