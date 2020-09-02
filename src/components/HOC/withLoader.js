import React from 'react';

const withLoader = EnhancedComponent => props => (
  props.isLoading
    ? <div>Loading...</div>
    : <EnhancedComponent {...props} />
);

export default withLoader;
