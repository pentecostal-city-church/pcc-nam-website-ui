import React from 'react'
import PropTypes from 'prop-types'
import { DaughterWorkPageTemplate } from '../../templates/daughter-work-page'

const DaughterWorkPagePreview = ({ entry, widgetFor }) => (
  <DaughterWorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DaughterWorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DaughterWorkPagePreview
