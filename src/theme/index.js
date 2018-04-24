import React from 'react'
import { injectGlobal, ThemeProvider as Root } from 'styled-components'
import theme from './config'

injectGlobal`
  body {
    font-family: ${theme.font};
    background-color: ${theme.colors.primary};
    background-image: linear-gradient(32deg, #66a5ff, #0069ff);
    min-height: 100vh;
    color: ${theme.colors.black};
    line-height: 1.6;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3 {
  	font-weight: 800 !important;
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
    border-radius: 0 !important;
    box-shadow: .5rem .5rem 0 rgba(0,0,0,.25) !important;
  }
`

const ThemeProvider = props => (
  <Root theme={theme} children={<div>{props.children}</div>} />
)

export default ThemeProvider
