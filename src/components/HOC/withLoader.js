import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) {
    const Loading = () => {
      return (
        props.isOptions
          ? <option>Loading...</option>
          : <div>Loading...</div>
      )
    };

    return(
      props.isLoading
        ? Loading()
        : <EnhancedComponent {...props} />
    );
  }
);

export default withLoader;
