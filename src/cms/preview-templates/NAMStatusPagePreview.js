import React from 'react'
import PropTypes from 'prop-types'
import { NAMStatusPageTemplate } from '../../templates/nam-status-page'

const NAMStatusPagePreview = ({ entry, widgetFor }) => (
  <NAMStatusPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

NAMStatusPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NAMStatusPagePreview
