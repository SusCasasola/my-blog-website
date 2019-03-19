import { withRouter } from 'next/router'

import Layout from '../../components/Layout';

const Blog = props => (
  <Layout currentUrl={props.router.pathname}>
    <h1>Soy el blog</h1>
  </Layout>
);

export default withRouter(Blog);