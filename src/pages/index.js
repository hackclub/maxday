import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Box, Card, Heading, Text } from '@hackclub/design-system'
import Body from '../components/Body'
import Cards from '../components/Cards'

Card.a = Card.withComponent('article')

export default ({ data: { allMarkdownRemark: { edges } } }) => (
  <Cards>
    <Card.a p={4} bg="white" style={{ gridColumn: 'span 2' }}>
      <Heading.h3 f={5} mb={1} color="primary" align="center" caps>
        <a href="https://github.com/hackclub/maxday">Leave a Card</a>
      </Heading.h3>
    </Card.a>
    {edges.map(({ node: { excerpt, frontmatter: { author } } }) => (
      <Card.a p={4} bg="white" key={author}>
        <Heading.h3 f={5} mb={1} color="primary">
          <Link to={`/${author}`}>{author}</Link>
        </Heading.h3>
        <Body f={1} dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Card.a>
    ))}
  </Cards>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___author], order: ASC }
      limit: 1024
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            author
          }
        }
      }
    }
  }
`
