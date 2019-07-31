import { graphql, useStaticQuery } from 'gatsby'
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

import { Container, Fab } from '../styles/main'

import Layout from '../components/layout'
import SEO from '../components/seo'

interface IimgStyle {
  borderRadius: string
}

// noinspection Annotator
const QUERY = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "profile.png" }) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

const AvatarImage: React.FunctionComponent<IimgStyle> = (imgStyle) => {
  const data = useStaticQuery(QUERY)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} style={imgStyle}/>
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container}
`

const About = styled.div`
    text-align: center;
`

const Avatar = styled.div`
  margin: auto;
  width: 20rem;
  height: auto;
  border-radius: 50%;
  @media only screen and (max-width : 768px) {
    width: 10rem;
  }
`

const H1 = styled.h1`
  margin-top: 2.0rem;
  margin-bottom: 0.5rem;
`
const H2 = styled.h2`
  margin-top: 1.0rem;
  margin-bottom: 0.5rem;
`

const Icons = styled.ul`
  list-style: none;
  margin: 3.0rem 0 1.0rem 0;
  padding: 0;
`

const IconElement = styled.li`
  display: inline-block;
  position: relative;
`

const IconLink = styled.a`
  margin-left: 1.0rem;
  margin-right: 1.0rem;
`

interface IconPropsInterface {
  url: string
  icon: StyledIcon
  label: string
}

const Icon: React.FunctionComponent<IconPropsInterface> = (props) => {
  const IconImage = styled(props.icon)`
    ${Fab}
  `

  return (
    <IconElement>
      <IconLink href={props.url}>
        <IconImage/>
      </IconLink>
    </IconElement>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
      <Section>
        <About>
          <Avatar>
            <AvatarImage borderRadius="50%"/>
          </Avatar>
          <H1>Ryan Kes</H1>
          <H2>I build stuff and complain here from time to time.</H2>
          <Icons>
            <Icon url="//github.com/alrayyes" icon={Github} label="Github"/>
            <Icon url="//twitter.com/alrayyes" icon={Twitter} label="Twitter"/>
            <Icon url="//www.last.fm/user/alrayyes" icon={Lastfm} label="Last.fm"/>
            <Icon url="//keybase.io/alrayyes" icon={Keybase} label="Last.fm"/>
            <Icon url="/key.asc" icon={Key} label="PGP Key"/>
            <Icon url="/feed.xml" icon={Rss} label="RSS"/>
            <Icon url="https://social.ryankes.eu/@ryan" icon={Mastodon} label="Mastodon"/>
          </Icons>
        </About>
      </Section>
    </Layout>
  )
}

export default IndexPage
