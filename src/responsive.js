import { css } from "styled-components";

/** >= 1200 */
export const desktop = (props) => {
  return css`
    @media only screen and (min-width:1200px) {
      ${props}
    }
  `;
}

export const tablet = (props) => {
  return css`
    @media only screen and (max-width:800px) {
      ${props}
    }
  `;
}

export const movil = (props) => {
  return css`
    @media only screen and (max-width:470px) {
      ${props}
    }
  `;
}
