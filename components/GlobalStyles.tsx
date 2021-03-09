import { css, Global } from "@emotion/react";

import importFonts from "lib/importFonts";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          padding: 0;
          margin: 0;
          color: #ffffff;
          background-color: #141517;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          border: none;
          cursor: pointer;
        }

        * {
          box-sizing: border-box;
          color: inherit;
        }
      `}
    />
  );
}

export default GlobalStyles;
