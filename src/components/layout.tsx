import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, Wrapper } from '../styles/main'
import { Theme } from '../styles/theme'
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
