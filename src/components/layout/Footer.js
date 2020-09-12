import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='px-32 mt-12'>
        &copy; {new Date().getFullYear()}, Belyshev Alexander
      </footer>
    </>
  );
}

export default Footer;
