import React from 'react';
import PropTypes from 'prop-types';

import { heroStyles } from './Hero.scss';

const Hero = ({ heroImage }) => (
  <section className={heroStyles} style={{ backgroundImage: `url('${heroImage}')` }} />
);

Hero.propTypes = {
  heroImage: PropTypes.string.isRequired,
};

export default Hero;
