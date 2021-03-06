import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({data}) {
  //  same thing as const post = data.markdownRemark
  const { markdownRemark: post } = data
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <Link to='/'>Back to Home</Link>
    </div>
  )
} 

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`