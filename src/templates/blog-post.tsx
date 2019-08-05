import { graphql } from 'gatsby'
import React from 'react'
import { HTMLContent } from '../components/content'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Template from './blog/template'

interface IPost {
  data: {
    markdownRemark: {
      html: string,
      timeToRead: number,
      frontmatter: {
        title: string,
        date: string,
      },
    },
  }
}

const Post: React.FunctionComponent<IPost> = ({ data }) => {
  const { html, frontmatter, timeToRead } = data.markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title}/>
      <Template
        date={frontmatter.date}
        title={frontmatter.title}
        body={html}
        contentComponent={HTMLContent}
        timeToRead={timeToRead}
      />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
    query BlogPostTemplate ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            timeToRead
            frontmatter {
                date
                title
            }
        }
    }
`
