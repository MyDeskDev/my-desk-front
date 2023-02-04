import { Global, css } from '@emotion/react';

const styles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css');
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoR.woff2') format('woff2'),
      url('/fonts/AppleSDGothicNeoR.woff') format('woff');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoM.woff2') format('woff2'),
      url('/fonts/AppleSDGothicNeoM.woff') format('woff');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoSB.woff2') format('woff2'),
      url('/fonts/AppleSDGothicNeoSB.woff') format('woff');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    src: url('/fonts/AppleSDGothicNeoB.woff2') format('woff2'),
      url('/fonts/AppleSDGothicNeoB.woff') format('woff');
    font-weight: 700;
  }
  @font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @import url('https://fonts.cdnfonts.com/css/antihero');
`;

const Fonts = () => {
  return <Global styles={styles} />;
};

export default Fonts;
