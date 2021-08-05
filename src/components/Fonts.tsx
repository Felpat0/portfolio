import { Global } from "@emotion/react";
const fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Nintendo Switch UI';
        src: url('/assets/fonts/switch.ttf') format('truetype');
      }
      `}
  />
);
export default fonts;
