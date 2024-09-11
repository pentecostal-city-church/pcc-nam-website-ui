import React from 'react'
import PropTypes from 'prop-types'
import { ChristmasForChristPageTemplate } from '../../templates/christmas-for-christ-page'

const ChristmasForChristPagePreview = ({ entry, widgetFor }) => (
  <ChristmasForChristPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ChristmasForChristPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ChristmasForChristPagePreview
