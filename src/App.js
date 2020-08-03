import React from 'react';

import BooksList from "./components/book/List";
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main style={styles.main}>
          <BooksList books={this.props.books} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

const styles = {
  main: {
    padding: '10px 10%'
  }
};
