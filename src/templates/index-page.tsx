import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
// tslint:disable-next-line:no-submodule-imports
import { Github } from 'styled-icons/fa-brands/Github'
// tslint:disable-next-line:no-submodule-imports
import { Keybase } from 'styled-icons/fa-brands/Keybase'
// tslint:disable-next-line:no-submodule-imports
import { Lastfm } from 'styled-icons/fa-brands/Lastfm'
// tslint:disable-next-line:no-submodule-imports
import { Mastodon } from 'styled-icons/fa-brands/Mastodon'
// tslint:disable-next-line:no-submodule-imports
import { Twitter } from 'styled-icons/fa-brands/Twitter'
// tslint:disable-next-line:no-submodule-imports
import { Key } from 'styled-icons/fa-solid/Key'
// tslint:disable-next-line:no-submodule-imports
import { Rss } from 'styled-icons/fa-solid/Rss'
// tslint:disable-next-line:no-submodule-imports
import { StyledIcon } from 'styled-icons/types'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Fab, MenuLinkCss } from '../styles/main'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container}
`

const About = styled.div`
    text-align: center;
`

const Heading = styled.h1`
  margin-top: 2.0rem;
  margin-bottom: 0.5rem;
`
const Subheading = styled.h2`
  margin-top: 1.0rem;
  margin-bottom: 0.5rem;
`

const Icons = styled.ul`
  list-style: none;
  margin: 3.0rem 0 1.0rem 0;
  padding: 0;
`

interface IAvatarImage {
  image: any
}

const AvatarImage: React.FunctionComponent<IAvatarImage> = ({ image }) => {
  const Avatar = styled.div`
  margin: auto;
  width: 20rem;
  @media only screen and (max-width : 768px) {
    width: 10rem;
  }
 `

  const Image = styled(Img)`
    border-radius: 50%
`
  const PreviewImage = styled.img`
    border-radius: 50%
`

  if (image.childImageSharp === undefined) {
    return (
      <Avatar>
        <PreviewImage src={image}/>
      </Avatar>
    )
  } else {
    return (
      <Avatar>
        <Image fluid={image.childImageSharp.fluid}/>
      </Avatar>
    )
  }

}

interface IIcon {
  url: string
  icon: StyledIcon
  label: string
}

const Icon: React.FunctionComponent<IIcon> = (props) => {
  const IconImage = styled(props.icon)`
    ${Fab}
  `
  const IconElement = styled.li`
    display: inline-block;
    position: relative;
  `

  const IconLink = styled.a`
    margin-left: 1.0rem;
    margin-right: 1.0rem;
    ${MenuLinkCss}
  `

  return (
    <IconElement>
      <IconLink href={props.url}>
        <IconImage/>
      </IconLink>
    </IconElement>
  )
}

interface IIndexPageData {
  data: {
    markdownRemark: {
      frontmatter: {
        image: any,
        heading: string,
        subheading: string,
        pgpKey: {
          publicURL: string,
        },
      },
    },
  }
}

const IndexPage: React.FunctionComponent<IIndexPageData> = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home"/>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        pgpKey={frontmatter.pgpKey.publicURL}
      />
    </Layout>
  )
}

export const IndexPageTemplate: React.FunctionComponent<IIndexPageTemplate> = ({
                                                                                 image,
                                                                                 heading,
                                                                                 subheading,
                                                                                 pgpKey,
                                                                               }) => {
  return (
    <Section>
      <About>
        <AvatarImage image={image}/>
        <Heading>{heading}</Heading>
        <Subheading>{subheading}</Subheading>
        <Icons>
          <Icon url="//github.com/alrayyes" icon={Github} label="Github"/>
          <Icon url="//twitter.com/alrayyes" icon={Twitter} label="Twitter"/>
          <Icon url="//www.last.fm/user/alrayyes" icon={Lastfm} label="Last.fm"/>
          <Icon url="//keybase.io/alrayyes" icon={Keybase} label="Last.fm"/>
          <Icon url={pgpKey} icon={Key} label="PGP Key"/>
          <Icon url="/feed.xml" icon={Rss} label="RSS"/>
          <Icon url="https://social.ryankes.eu/@ryan" icon={Mastodon} label="Mastodon"/>
        </Icons>
      </About>
    </Section>
  )
}

interface IIndexPageTemplate {
  image: any
  heading: string
  subheading: string
  pgpKey: string
}

// noinspection JSUnusedGlobalSymbols,Annotator
export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                image {
                    childImageSharp {
                        fluid(maxWidth: 200 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                heading
                subheading
                pgpKey {
                    publicURL
                }
            }
        }
    }
`

export default IndexPage
