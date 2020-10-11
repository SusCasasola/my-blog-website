import React from 'react';
import PropTypes from 'prop-types';

import { tagsStyles } from './Tags.scss';

const Tags = ({ tags }) => (
  <ul className={`no-list-style ${tagsStyles} `}>
    {tags.map(tag => (
      <li key={tag.id}>
        <button onClick={tag.onClick} className={tag.isActive ? 'active' : ''} type="button">
          {tag.name}
        </button>
      </li>
    ))}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      onClick: PropTypes.function,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};

export default Tags;
