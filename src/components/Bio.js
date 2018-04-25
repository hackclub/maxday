import React from 'react'
import { Container, Heading } from '@hackclub/design-system'

const Bio = () => (
  <Container px={3} pt={[3, 4, 5]} pb={[3, 4]}>
    <Heading.h1 color="white" align="center" f={[4, 5, 6]}>
      💖 Happy birthday, Max! 🎉
    </Heading.h1>
    <Heading.h2 color="white" align="center" f={[3, 4]} mt={3} regular>
      Max, you pour your heart and soul into Hack Club.
      <br />
      Thank you, from all of ours.
    </Heading.h2>
  </Container>
)
export default Bio
