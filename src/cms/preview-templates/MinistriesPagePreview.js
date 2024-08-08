import React from 'react';
import PropTypes from 'prop-types';
import { MinistriesPageTemplate } from '../../templates/ministries-page';

const MinistriesPagePreview = ({ entry, widgetFor }) => (
  <MinistriesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MinistriesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MinistriesPagePreview
