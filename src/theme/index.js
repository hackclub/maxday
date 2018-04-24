import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import theme from './config'

injectGlobal`
  body {
    font-family: ${theme.font};
    background-color: #FF16D1;
    background-image: linear-gradient(64deg, #FF16D1, #592DEA);
    min-height: 100vh;
    color: ${theme.colors.black};
    line-height: 1.6;
  }
  * {
    box-sizing: border-box;
  }
  a {
    box-shadow: none;
    text-decoration: none;
    color: ${theme.colors.primary};
  }
  ul, ol {
    margin: 0;
    padding: 0;
  }
  img {
    max-width: 100%;
  }
  article {
    border-radius: 8px !important;
    box-shadow: ${theme.boxShadows[1]};
    transition: box-shadow .125s ease-out;
    &:hover {
      box-shadow: ${theme.boxShadows[2]};
    }
  }
`

const ThemeProvider = props => (
  <Root theme={theme} children={<div>{props.children}</div>} />
)

export default ThemeProvider
