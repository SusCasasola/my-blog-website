import styles from './styles';

const Navigation = ({ currentUrl }) => (
  <nav {...styles()}>
    <a href='/' className={currentUrl === '/home' ? 'active' : ''}>Home</a>
    <a href='/about' className={currentUrl === '/about' ? 'active' : ''}>About</a>
    <a href='/blog' className={currentUrl === '/blog' ? 'active' : ''}>Blog</a>
  </nav>
);

export default Navigation;