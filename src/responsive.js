import { css } from "styled-components";

/** >= 1200 */
export const desktop = (props) => {
  return css`
    @media only screen and (min-width:1200px) {
      ${props}
    }
  `;
}