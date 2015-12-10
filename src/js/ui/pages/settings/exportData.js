import React from 'react';

import Layout from './layout';
import ExportData from '../../components/settings/exportData';


module.exports = React.createClass({
  render: function() { 
    return (
      <Layout tab="exportData" {...this.props}>
        <ExportData {...this.props} />
      </Layout>
    );
  },
});
