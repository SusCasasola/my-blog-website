import { withRouter } from 'next/router'
import { css } from 'glamor';

import Layout from '../components/Layout';
import { TwitterIcon, GithubIcon, CodepenIcon, CodesandboxIcon } from '../icons';

const styles = () => css({
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
          <TwitterIcon />
        </a>
        <a className="no-decoration" href="https://github.com/SusCasasola" target="_blank">
          <GithubIcon />
        </a>
        <a className="no-decoration" href="https://codepen.io/SusCasasola/" target="_blank">
          <CodepenIcon />
        </a>
        <a className="no-decoration" href="https://codesandbox.io/u/SusCasasola" target="_blank">
          <CodesandboxIcon />
        </a>
      </p>
    </section>
  </Layout>
);

export default withRouter(Home);