import React from 'react'
import PropTypes from 'prop-types'
import { GivePageTemplate } from '../../templates/give-page'

const GivePagePreview = ({ entry, widgetFor }) => (
  <GivePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GivePagePreview
