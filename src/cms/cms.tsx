import CMS from 'netlify-cms-app'
import React from 'react'
import { StyleSheetManager } from 'styled-components'
import typography from '../utils/typography'

import IndexPagePreview from './preview-templates/IndexPagePreview'

/**
 * Needed to get styled components to work in Netlify Cms preview panel
 */
class CSSInjector extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      iframeRef: '',
    }
  }

  public render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    )
  }

  public componentDidMount() {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    this.setState({ iframeRef: iframeHeadElem })
  }
}

// Inject typography css
CMS.registerPreviewStyle(typography.toString(), { raw: true })

CMS.registerPreviewTemplate('index', (props) => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
))

/*
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
*/
