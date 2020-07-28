import React from 'react';

import BookCard from "./BookCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <BookCard book={this.props.book} />
      </div>
    );
  }
}

export default App;
