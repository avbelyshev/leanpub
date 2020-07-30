import React from 'react';

import BooksList from "./BooksList";

class App extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>Leanpub</header>
        <main style={styles.main}>
          <BooksList books={this.props.books} />
        </main>
        <footer style={styles.footer}>
          &copy; {new Date().getFullYear()}, Belyshev Alexander
        </footer>
      </>
    );
  }
}

export default App;

const styles = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  main: {
    padding: '10px 10%'
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px'
  }
};
