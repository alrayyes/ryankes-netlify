import PropTypes from 'prop-types'
import React from 'react'
import { ContentPageTemplate } from '../../templates/content-page'

const ContentPagePreview: React.FunctionComponent = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ContentPageTemplate
        title={data.title}
        body={data.body}
      />
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContentPagePreview
