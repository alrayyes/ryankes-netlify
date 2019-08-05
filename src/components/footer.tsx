import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import styled from 'styled-components'
import { Container, MenuLinkCss } from '../styles/main'

const Wrapper = styled.footer`
  width: 100%;
  text-align: center;
  line-height: 2.0rem;
  margin-bottom:1.0rem;
`

const Section = styled.section`
  ${Container}
`

const FooterLink = styled(Link)`
  margin-left: 1.0rem;
  margin-right: 1.0rem;
  display: inline;
  ${MenuLinkCss}
`

// noinspection Annotator
const QUERY = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "license.png" }) {
            childImageSharp {
                fixed(width: 88) {
                    ...GatsbyImageSharpFixed_withWebp
                }
            }
        }
    }
`

const LicenseImage: React.FunctionComponent = () => {
  const data = useStaticQuery(QUERY)

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Creative Commons License"/>
}

const LicenseImageLink: React.FunctionComponent = () => {
  return (
    <a rel="license" href="//creativecommons.org/licenses/by-nc-sa/4.0/">
      <LicenseImage/>
    </a>
  )
}

interface IFooterProps {
  year?: number
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => (
  <Wrapper>
    <Section>
      <LicenseImageLink/>
      <br/>
      <FooterLink to="terms-of-service">
        Terms Of Service
      </FooterLink> -
      <FooterLink to="privacy-policy">
        Privacy Policy
      </FooterLink>
      <br/>
      © {props.year}
    </Section>
  </Wrapper>
)

Footer.defaultProps = {
  year: new Date().getFullYear(),
}

export default Footer
