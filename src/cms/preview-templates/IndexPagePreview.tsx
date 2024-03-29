import PropTypes from 'prop-types'
import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview: React.FunctionComponent = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        heading={data.heading}
        subheading={data.subheading}
        pgpKey={data.pgpKey}
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

export default IndexPagePreview
