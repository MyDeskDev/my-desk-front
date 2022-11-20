import { Global, css } from '@emotion/react';

const Fonts = () => {
  return (
    <Global
      styles={css`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard.css');
      `}
    />
  );
};

export default Fonts;
