import React from 'react'
import PropTypes from 'prop-types'
import { AffiliationPageTemplate } from '../../templates/affiliation-page'

const AffiliationPagePreview = ({ entry, widgetFor }) => (
  <AffiliationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AffiliationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AffiliationPagePreview;
