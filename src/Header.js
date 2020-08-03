import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>Leanpub</header>
      </>
    );
  }
}

export default Header;

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
  }
};
