import React from 'react'
import { Container } from '@hackclub/design-system'
import Body from './Body'

const Bio = () => (
  <Container px={3} pt={[3, 4, 5]} pb={[3, 4]}>
    <Body color="white" align="center" f={[3, 4]}>
      Some predictions by<br />
      <strong>Lachlan Campbell</strong>.
    </Body>
  </Container>
)

export default Bio
