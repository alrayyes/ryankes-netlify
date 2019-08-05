import CMS from 'netlify-cms-app'
import React from 'react'
// tslint:disable-next-line:no-submodule-imports
import { renderToString } from 'react-dom/server'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/main'

import { Theme } from '../styles/theme'
import typography from '../utils/typography'
import ContentPagePreview from './preview-templates/ContentPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

/**
 * Needed to get styled components to work in Netlify Cms preview panel
 */
class CSSInjector extends React.Component {
  public state: {
    iframeRef: HTMLElement,
  }

  constructor(props: any) {
    super(props)

    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument!.head
    this.state = {
      iframeRef: iframeHeadElem,
    }
  }

  public render() {
    /**
     * For some reason this solves a rendering bug with globalstyles. Prevents an "unknown type" error". Don't know why
     * but Jimmy crack corn and I don't care!
     */
    const html = renderToString(
      <StyleSheetManager target={this.state.iframeRef}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle/>
        </ThemeProvider>
      </StyleSheetManager>
    )

    return (
      <ThemeProvider theme={Theme}>
        <StyleSheetManager target={this.state.iframeRef}>
          {this.props.children}
        </StyleSheetManager>
      </ThemeProvider>
    )
  }
}

// Inject typography css
CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewTemplate('index', (props) => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('pages', (props) => (
  <CSSInjector>
    <ContentPagePreview {...props} />
  </CSSInjector>
))
