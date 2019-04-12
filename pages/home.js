import { withRouter } from 'next/router'
import { css } from 'glamor';

import Layout from '../components/Layout';

const styles = () => css({
  '& > h1': {
    position: 'relative',
    '::after': {
      content: '""',
      display: 'inline-block',
      width: '1rem',
      height: '3.5rem',
      marginLeft: '.5rem',
      backgroundImage: 'url(/static/heart.png)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }
  },
  '& .home__links': {
    '& a:not(:last-child)': {
      marginRight: '1rem',
    }
  }
});

const Home = props => (
  <Layout currentUrl={props.router.pathname}>
    <section className="home" {...styles()}>
      <h1>Hi! I'm Sussie</h1>
      <p>My name is Sussie Casasola and I'm a Frontend developer from Mexico City. This site was created to share what I'm learning, to practice my skills and to let the world know some more things about me.</p>
      <p>Feel free to stalk me on:</p>
      <p className="home__links">
        <a className="no-decoration" href="https://twitter.com/SusCasasola" target="_blank">
          Twitter
        </a>
        <a className="no-decoration" href="https://github.com/SusCasasola" target="_blank">
          Github
        </a>
        <a className="no-decoration" href="https://codepen.io/SusCasasola/" target="_blank">
          Codepen
        </a>
        <a className="no-decoration" href="https://codesandbox.io/u/SusCasasola" target="_blank">
          Codesandbox
        </a>
      </p>
    </section>
  </Layout>
);

export default withRouter(Home);