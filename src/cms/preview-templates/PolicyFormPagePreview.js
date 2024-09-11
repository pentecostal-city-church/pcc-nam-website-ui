import React from 'react'
import PropTypes from 'prop-types'
import { PolicyFormPageTemplate } from '../../templates/policy-form-page'

const PolicyFormPagePreview = ({ entry, widgetFor }) => (
  <PolicyFormPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PolicyFormPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PolicyFormPagePreview
