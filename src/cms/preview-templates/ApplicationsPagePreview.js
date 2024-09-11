import React from 'react';
import PropTypes from 'prop-types';
import { ApplicationsPageTemplate } from '../../templates/applications-page';

const ApplicationsPagePreview = ({ entry, widgetFor }) => (
  <ApplicationsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ApplicationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ApplicationsPagePreview;
