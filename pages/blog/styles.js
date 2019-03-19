import { css, left } from 'glamor';

const styles = () => css({
  '& .blog__entries': {
    margin: '2rem 0',
  },
  '& .blog__entry': {
    position: 'relative',
    maxWidth: 598,
    margin: '0 auto',
    paddingLeft: 140,
    listStyleType: 'none',
    '@media screen and (max-width: 700px)': {
      paddingLeft: 0,
    },
    '&:not(:last-child)': {
      marginBottom: '2rem',
    },
    '& img': {
      maxWidth: 120,
      position: 'absolute',
      left: 0,
      top: 0,
      marginRight: '1rem',
      '@media screen and (max-width: 700px)': {
        position: 'static',
        maxWidth: '100%'
      }
    },
    '& h2': {
      fontSize: '1.5rem',
    },
    '& p': {
      color: 'var(--black-07)'
    }
  }
})

export default styles;