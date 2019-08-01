import PropTypes from 'prop-types'
import React from 'react'
import { ContentPageTemplate } from '../../templates/content-page'

const AboutPagePreview: React.FunctionComponent = ({ entry, widgetFor }) => (
  <ContentPageTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
