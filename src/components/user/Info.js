import React, { useContext } from 'react';

import AuthContext from "../../context/AuthContext";

const UserInfo = () => {
  const { firstName, lastName, avatarUrl } = useContext(AuthContext);
  return (
    <div className='col-span-1 flex-1 inline-flex text-center'>
      <div className=''>
        <img className='flex-1 rounded-full h-12 w-12 m-auto' src={avatarUrl} alt={firstName} />
      </div>
      <div className='flex-1 text-sm'>{firstName} {lastName}</div>
    </div>
  );
}

export default UserInfo;
