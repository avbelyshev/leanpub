import React from 'react';

import withLoader from "../../HOC/withLoader";

const Authors = (props) => {
  return (
    <>
      {props.authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))}
    </>
  );
};

export default withLoader(Authors);
