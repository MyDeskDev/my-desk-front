import { extendTheme } from '@chakra-ui/react';

import { appleSdGothicFont } from './variables';

const theme = extendTheme({
  fonts: {
    body: appleSdGothicFont,
    heading: appleSdGothicFont,
  },
  styles: {
    global: {
      html: {
        height: '100%',
        fontSize: '62.5%',
      },
      body: {
        height: '100%',
        color: 'black',
        fontSize: '1.4rem',
        lineHeight: 1,
      },
      '#__next': {
        height: '100%',
      },
    },
  },
  colors: {
    orange: {
      500: '#FF6712',
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    '2xl': '1536px',
  },
});

export default theme;
