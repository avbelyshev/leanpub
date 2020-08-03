import React from 'react';

import UserInfo from "./components/user/Info";

class Header extends React.Component {
  render() {
    return (
      <>
        <header style={styles.header}>
          <span style={styles.appName}>Leanpub</span>
          <UserInfo />
        </header>
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
  },
  appName: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
};
