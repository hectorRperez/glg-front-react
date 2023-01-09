import { createGlobalStyle } from "styled-components";

import "./styles.scss";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background-color: var(--main-bg);
        font-family: var(--body-font-gilroy-regular);
    }
    a{
        font-size: 16;
        color: var(--white);
        text-decoration: none;
        font-family: var(--body-font-barlow);
    }

    p{
      margin: 0;
    }

    .containerElement{
        width: 90%;
        margin: 0 auto;
    }

    ul{
      margin: 0;
      padding: 0;
    }

    li{
      list-style-type: none;
    }
`

export default GlobalStyle;