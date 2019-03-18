import Link from 'next/link';

const Navigation = () => (
  <nav>
    <Link href='/'>
      <a>Home</a>
    </Link>
    |
    <Link href='/about'>
      <a>About</a>
    </Link>
    |
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </nav>
);

export default Navigation;