import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {
  Container,
  Box,
  Card,
  Heading,
  Text,
  LargeButton
} from '@hackclub/design-system'
import Body from '../components/Body'
import Cards from '../components/Cards'

Card.a = Card.withComponent('article')

export default () => (
  <Container maxWidth={36} p={3}>
    <Helmet title={`Happy birthday, Max!`} />
    <Card.a bg="white" p={4} mx={[-3, -4]}>
      <Heading.h1 color="primary" f={4} m={0} caps>
        Instructions
      </Heading.h1>
      <br/>
      <Heading.h3>
        What is this?
      </Heading.h3>
      <br/>
      April 25 is
        <a href="https://maxwofford.com">
          {` `}Max Wofford
        </a>
      ’s birthday. We’ve created a special website for him! If you’d like to write him a birthday card, keep reading.
      <br/><br/>
      <Heading.h3>
        Instructions
      </Heading.h3>
      <br/>
      To create a card, you simply need to make a Markdown file. Decide on your author name first, whether it’s your first name or username.
      <br/><br/>
      Then, you’ll create a file titled with the author name you chose, and attach these lines to the beginning of the file:
      <br/><br/>
      <code>
        ---<br/>
        author: 'your author name'<br/>
        ---<br/>
      </code>
      <br/>
      When you’ve done that, just submit a PR and you’re good to go! (Make sure your name is entered in lowercase)
      <br/><br/>
      <Heading.h3>
        Ready?
      </Heading.h3>
      <Heading.h3>
        <a href="https://github.com/hackclub/maxday/new/master/cards">
          Create your own card!
        </a>
      </Heading.h3>
      <br/>
      Take a look at the
      <a href="https://github.com/hackclub/maxday">
        {` `}source code{` `}
      </a>
      for this project.

    </Card.a>
  </Container>
)
