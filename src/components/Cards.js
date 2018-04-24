import React from 'react'
import { Box } from '@hackclub/design-system'

const Cards = Box.withComponent('main').extend`
  max-width: 48rem;
  margin: 1rem auto 4rem;
  @media screen and (max-width:32em) {
    > article {
      border-radius: 0;
      margin-bottom: 1rem;
    }
  }
  ${props => props.theme.mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
    grid-gap: 2rem;
  }
`

export default Cards
