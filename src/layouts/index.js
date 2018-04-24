import React from 'react'
import Helmet from 'react-helmet'
import ThemeProvider from '../theme'
import { Text, mediaQueries } from '@hackclub/design-system'
import Link from 'gatsby-link'
import Bio from '../components/Bio'

const Future = Text.withComponent(Link).extend`
  text-align: center;
  font-weight: 800;
  letter-spacing: .125em;
  line-height: 1;
  text-shadow: .25rem .25rem 0 rgba(0,0,0,.25);
  display: block;
  ${mediaQueries.sm} {
    position: fixed;
    left: 0;
    top: 0;
    writing-mode: tb-rl;
  }
`

const title = 'Happy birthday!!'
const description =
  'Max, you pour your heart and soul into Hack Club. Thank you, from all of ours.'
const img = '/card.png'

const Template = ({ children, ...props }) => (
  <ThemeProvider {...props}>
    <Helmet
      meta={[
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:title', content: title },
        { name: 'twitter:image:src', content: img },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:image:height', content: 512 },
        { property: 'og:image:width', content: 512 }
      ]}
    >
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="/fonts.css" />
    </Helmet>
    <Future to="/" color="snow" f={[5, 6, 7]} m={3} py={1} caps>
      🎂🎈🎁🌟
    </Future>
    <Bio />
    {children()}
  </ThemeProvider>
)
export default Template
