import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../styles/main'

const Section = styled.section`
  ${Container}
`

interface IHeaderComponent {
  title: string
}

const HeaderComponent: React.FunctionComponent<IHeaderComponent> = ({ title }) => {
  const Header = styled.header`
      margin-top: 6.4rem;
      margin-bottom: 3.2rem;
`
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  )
}

interface IContentPage {
  markDownRemark: {
    html: string,
    frontmatter: {
      title: string,
    },
  }
}

const ContentPage: React.FunctionComponent<IContentPage> = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home"/>
      <ContentPageTemplate
        title={frontmatter.title}
        body={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

interface IContentPageTemplate {
  title: string,
  body: string
  contentComponent?: React.FunctionComponent<Icontent>
}

export const ContentPageTemplate: React.FunctionComponent<IContentPageTemplate> = ({
                                                                                     title,
                                                                                     body,
                                                                                     contentComponent,
                                                                                   }) => {
  const PageContent = contentComponent || Content
  return (
    <Section>
      <article>
        <HeaderComponent title={title}/>
        <PageContent content={body}/>
      </article>
    </Section>
  )
}

export default ContentPage

export const pageQuery = graphql`
    query ContentPageTemplate ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`

export const HTMLContent = ({ content }) => (
  <div dangerouslySetInnerHTML={{ __html: content }}/>
)

interface IContent {
  content: string
}

const Content: React.FunctionComponent<IContent> = ({ content }) => (
  <div>{content}</div>
)
