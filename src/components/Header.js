import React from 'react'
import { Heading, Text } from '@hackclub/design-system'
import Link from 'gatsby-link'

const Header = props => (
  <Heading.h1 my={3} f={5} style={{ fontStyle: 'normal' }} {...props}>
    <Link to="/">
      <Text.span color="smoke" style={{ fontWeight: 400 }}>
        @lachlanjc/
      </Text.span>
      <Text.span color="white" style={{ fontWeight: 800 }}>
        future
      </Text.span>
    </Link>
  </Heading.h1>
)

export default Header
