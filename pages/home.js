import { withRouter } from 'next/router'

import Layout from 'components/Layout';
import css from 'styles/objects/flexCenter.scss';

const Home = props => (
  <Layout currentUrl={props.router.pathname}>
    <h1>Hi! I'm Sussie</h1>
    <p>My name is Sussie Casasola and I'm a Frontend developer from Mexico City. This site was created to share what I'm learning, to practice my skills and to let the world know some more things about me.</p>
    <p>Feel free to stalk me on:</p>
    <ul className={css.flexCenter}>
      <li>
        <a href="httuls://twitter.com/SusCasasola" target="_blank">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/SusCasasola" target="_blank">
          Github
        </a>
      </li>
      <li>
        <a href="https://codepen.io/SusCasasola/" target="_blank">
          Codepen
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io/u/SusCasasola" target="_blank">
          Codesandbox
        </a>
      </li>
    </ul>
  </Layout>
);

export default withRouter(Home);