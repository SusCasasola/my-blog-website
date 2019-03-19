import { withRouter } from 'next/router'

import Layout from '../../components/Layout';

const About = props => (
  <Layout currentUrl={props.router.pathname}>
    <h1>About me</h1>
  </Layout>
);

export default withRouter(About);