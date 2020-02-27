import { graphql } from 'gatsby'
import { NotesPage } from '../components/NotesPage'

export default NotesPage

export const pageQuery = graphql`
  fragment AllPages on Mdx {
    id
    frontmatter {
      title
      tags
      emoji
    }
    fields {
      dateModified(formatString: "Do MMM YYYY")
    }
    parent {
      ... on File {
        name
      }
    }
  }

  query {
    allMdx(sort: { fields: fields___dateModified, order: DESC }) {
      edges {
        node {
          ...AllPages
        }
      }
    }
  }
`
