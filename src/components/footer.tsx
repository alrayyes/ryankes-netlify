import { Link } from 'gatsby'
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
`

interface IFooterProps {
  year?: number
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => (
  <Wrapper>
    <Section>
      <p>
        <A rel="license" href="//creativecommons.org/licenses/by-nc-sa/4.0/">
          <img
            alt="Creative Commons License"
            src="https://d33wubrfki0l68.cloudfront.net/f44d61293838bbab5d914d3930edf8bb44784e3b/05591/img/license.png"
          />
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
