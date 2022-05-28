import { createGlobalStyle, css } from 'styled-components';

const reset = css`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  dd,
  p,
  fieldset,
  legend {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-size: 1.4rem;
    // TODO: 전역 폰트 변경
    font-family: Dotum, '돋움', Helvetica, 'Apple SD Gothic Neo', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  em {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    vertical-align: top;
  }

  fieldset {
    border: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;

export const Reset = createGlobalStyle`${reset}`;

export default reset;
