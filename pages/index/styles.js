import { css } from 'glamor';

const styles = () => css({
  '& .home__links': {
    '& a:not(:last-child)': {
      marginRight: '1rem',
    }
  }
});

export default styles;