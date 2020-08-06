import React from 'react';

import BooksList from "../book/List";
import Header from "./Header";
import Footer from "./Footer";

const App = (props) => {
  return (
    <>
      <Header />
      <main style={styles.main}>
        <BooksList books={props.books} />
      </main>
      <Footer />
    </>
  );
}

export default App;

const styles = {
  main: {
    padding: '10px 10%'
  }
};
