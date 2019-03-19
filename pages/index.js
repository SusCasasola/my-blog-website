import Layout from '../components/Layout';

const Home = props => (
  <Layout currentUrl={props.url.asPath}>
    <h1>Welcome :)</h1>
  </Layout>
);

export default Home