import { css } from 'glamor';

const styles = () => css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '1rem',
  '& >a': {
    '&:not(:last-child)': {
      marginRight: '1rem'
    }
  }
});

export default styles;