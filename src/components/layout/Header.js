import React from 'react';
import { Link } from 'react-router-dom';

import UserInfo from "../user/Info";

const Header = () => {
  return (
    <>
      <header className='bg-teal-600 text-white'>
        <div className='grid grid-cols-4 flex'>
          <Link className='col-span-3 flex-1 text-center align-middle font-bold text-xl' to={'/'}>Leanpub</Link>
          <UserInfo />
        </div>
      </header>
    </>
  );
}

export default Header;
