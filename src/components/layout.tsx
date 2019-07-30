import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Theme } from '../theme'

import { Wrapper } from './css/main'
import Footer from './footer'

import Nav from './nav'

const Main = styled.main`
  ${Wrapper}
`
const Content = styled.div`
  flex: 1;
  display: flex;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;
`

interface IGlobalStyleProps {
  theme: {
    color: {
      fg: string,
      bg: string,
      link: string,
      altBg: string,
      altFg: string,
    },
    font: {
      text: string,
      heading: string,
      code: string,
    },
  }
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
*,
*:after,
*:before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  color: ${(props) => props.theme.color.fg};
  background-color: ${(props) => props.theme.color.bg};
  font-family: ${(props) => props.theme.font.text};
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.8em;
  @media only screen and (max-width : 768px) {
    font-size: 1.6em;
    line-height: 1.6em;
  }
}

a {
  font-weight: 300;
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: underline;
  }
}

p {
  margin: 2.0rem 0 2.0rem 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 700;
  color: ${(props) => props.theme.color.altFg};
  margin: 6.4rem 0 3.2rem 0;
}

h1 {
  font-size: 3.2rem;
  line-height: 3.6rem;
  @media only screen and (max-width : 768px) {
    font-size: 3.0rem;
    line-height: 3.4rem;
  }
}
h2 {
  font-size: 2.8rem;
  line-height: 3.2rem;
  @media only screen and (max-width : 768px) {
    font-size: 2.6rem;
    line-height: 3.0rem;
  }
}
h3 {
  font-size: 2.4rem;
  line-height: 2.8rem;
  @media only screen and (max-width : 768px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
}
h4 {
  font-size: 2.2rem;
  line-height: 2.6rem;
  @media only screen and (max-width : 768px) {
    font-size: 2.0rem;
    line-height: 2.4rem;
  }
}
h5 {
  font-size: 2.0rem;
  line-height: 2.4rem;
  @media only screen and (max-width : 768px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
}
h6 {
  font-size: 1.8rem;
  line-height: 2.2rem;
  @media only screen and (max-width : 768px) {
    font-size: 1.6rem;
    line-height: 2.0rem;
  }
}

b, strong {
  font-weight: 700;
}

pre {
  display: block;
  font-family: ${(props) => props.theme.font.code};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin: 2.0rem 0 2.0rem 0;
  padding: 2.0rem;
  overflow-x: auto;
  code {
    display: inline-block;
    background-color: inherit;
    color: inherit;
  }
}

code {
  font-family: ${(props) => props.theme.font.code};
  font-size: 1.6rem;
  font-weight: 400;
  background-color: ${(props) => props.theme.color.altBg};
  color: ${(props) => props.theme.color.fg};
  padding: 0.2rem 0.4rem 0.2rem 0.4rem;
}

blockquote {
  border-left: 2px solid ${(props) => props.theme.color.altBg};
  padding-left: 2.0rem;
  line-height: 2.2rem;
  font-weight: 400;
  font-style: italic;
}

th, td {
  padding: 1.6rem;
}
table {
  border-collapse: collapse;
}
table td, table th {
  border: 2px solid ${(props) => props.theme.color.altFg};
}
table tr:first-child th {
  border-top: 0;
}
table tr:last-child td {
  border-bottom: 0;
}
table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}

img {
  max-width: 100%;
}
`

const QUERY = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`

const Layout: React.FunctionComponent = ({ children }) => {
  const data = useStaticQuery(QUERY)

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyle/>
        <Main>
          <Nav siteTitle={data.site.siteMetadata.title}/>
          <Content>
            {children}
          </Content>
        </Main>
        <Footer/>
      </>
    </ThemeProvider>
  )
}

export default Layout
