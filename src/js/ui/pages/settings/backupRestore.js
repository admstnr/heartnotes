import React from 'react';

import Layout from './layout';


module.exports = React.createClass({
  render: function() { 
    return (
      <Layout tab="backupRestore" {...this.props}>
        Backup and Restore here
      </Layout>
    );
  },
});
