import React from 'react';

const Footer = () => {
  return (
    <>
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()}, Belyshev Alexander
      </footer>
    </>
  );
}

export default Footer;

const styles = {
  footer: {
    padding: '0 10%',
    marginTop: '50px'
  }
};