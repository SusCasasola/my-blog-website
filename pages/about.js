import { withRouter } from 'next/router'

import Layout from 'components/Layout';
import { container } from 'styles/objects/container.scss';

const About = props => (
  <Layout currentUrl={props.router.pathname}>
    <h1>About me</h1>
    <div className={container}>
      <p>I'm currently working as a Frontend Engineer on <a target="_blank" href="https://www.beek.io">Beek.io</a>, based in Mexico City. Back in 2014, I graduated from the Polytechnic Nacional Institute as a Computing Engineer.</p>
      <p>I studied abroad during my 6th semester of the career on the Polytechnic University of Madrid and had the opportunity to live a lot of experiences in a different culture. My life and my goals have never been the same after that.</p>
      <p>After I graduated I got my first official job as a Frontend Developer on <a target="_blank" href="https://www.unotv.com">Uno TV</a>, a popular news website here in Mexico. During 1 year and a half I learned the CSS/HTML/JS basics, using SASS, a precompiler called then PUG and JQuery. Then I got a job on a startup called <a target="_blank" href="https://www.karmapulse.com">KarmaPulse</a>. Here I learned to build Single Page Applications using React, Next.js, Rx.js, Glamor, Gatsby.js, Apollo, GraphQL and Ant Design (not all of them combined, of course xD). I learned helping on multiple projects and creating some of them from scratch. </p>
      <p>Two years after that, I got a job on <a target="_blank" href="https://www.beek.io">Beek.io</a>, the biggest audiobook platform for Spanish language. Here I'm having the opportunity to work with React too, to learn a bit of Ruby (and Rails) and also to start from scratch the new version of the mobile application using React Native.</p>
      <p>I really love working with the Frontend part of websites, but the thing I enjoy the most is the CSS. I'm in love with everything that has to do with CSS. Actually, that's why I started making this website, because I want to keep learning (mainly but not exclusively) about CSS and writing about all the stuff I'm learning.</p>
      <p>When I'm not coding I like to read books, painting, going to the movies or traveling. I'm 26 years old, my favorite food are burgers, pizza or enchiladas and my favorite singer of all the world is Natalia Lafourcade.</p>
      <p>Thanks for reading until here :) I hope you like my website and find some of the articles useful. You can say hi here: <a target="_blank" href="mailto:sus.casasola@gmail.com">sus.casasola@gmail.com</a></p>
    </div>
  </Layout>
);

export default withRouter(About);