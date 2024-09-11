import React from 'react'
import PropTypes from 'prop-types'
import { AffiliationApplicationPageTemplate } from '../../templates/affiliation-application-page'

const AffiliationApplicationPagePreview = ({ entry, widgetFor }) => (
  <AffiliationApplicationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AffiliationApplicationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AffiliationApplicationPagePreview
