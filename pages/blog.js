import Layout from '../components/Layout';

const Blog = props => (
  <Layout currentUrl={props.url.asPath}>
    <h1>Soy el blog</h1>
  </Layout>
);

export default Blog;