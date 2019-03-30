import { css } from 'glamor';

const iconStyles = (color, hoverColor) => css({
  '&:hover path': {
    transition: 'fill .2s ease',
    fill: hoverColor
  }
});

export default iconStyles;