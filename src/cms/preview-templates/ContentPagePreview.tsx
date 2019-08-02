import PropTypes from 'prop-types'
import React from 'react'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview: React.FunctionComponent = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContentPageTemplate
        title={data.title}
        body={widgetFor('body')}
      />
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

ContentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ContentPagePreview
