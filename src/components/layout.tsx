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
      bg: string,
      altFg: string,
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
}

body {
  background-color: ${(props) => props.theme.color.bg};
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
