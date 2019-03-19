import Layout from '../components/Layout';

const About = props => (
  <Layout currentUrl={props.url.asPath}>
    <h1>About me</h1>
  </Layout>
);

export default About;