import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import styled from 'styled-components'
import { Container } from './css/main'

const Wrapper = styled.footer`
  width: 100%;
  text-align: center;
  line-height: 2.0rem;
  margin-bottom:1.0rem;
`

const Section = styled.section`
  ${Container}
`

interface IAProps {
  theme: {
    color: {
      link: string,
    },
  }
}

const A = styled.a<IAProps>`
  color: ${(props) => props.theme.color.link}
`

interface IFooterLinkProps {
  theme: {
    font: {
      heading: string,
    },
    color: {
      fg: string,
      link: string,
    },
  }
}

const FooterLink = styled(Link)<IFooterLinkProps>`
  margin-left: 1.0rem;
  margin-right: 1.0rem;
  display: inline;
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 700;
  color: ${(props) => props.theme.color.fg};
  &:hover,
    &:focus {
    color: ${(props) => props.theme.color.link};
  }

`// noinspection Annotator
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

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />
}

interface IFooterProps {
  year?: number
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => (
  <Wrapper>
    <Section>
      <p>
        <A rel="license" href="//creativecommons.org/licenses/by-nc-sa/4.0/">
          <LicenseImage alt="Creative Commons License"/>
        </A>
        <br/>
        <FooterLink to="terms-of-service">
          Terms Of Service
        </FooterLink> -
        <FooterLink to="privacy-policy">
          Privacy Policy
        </FooterLink>
      </p>
      © {props.year}
    </Section>
  </Wrapper>
)

Footer.defaultProps = {
  year: new Date().getFullYear(),
}

export default Footer
