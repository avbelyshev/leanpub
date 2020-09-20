import React from 'react';
import cx from 'classnames';

import useAuthors from "../../../hooks/useAuthors";
import Authors from "./authors";

const AuthorSelect = ({ register, label, type, className, ...inputProps }) => {
  const authors = useAuthors();

  return (
    <div>
      <label className='block' htmlFor={inputProps.name}>{label}</label>
      <select className={cx('border border-gray-500 rounded px-2 py-3 w-full', className)} ref={register} {...inputProps}>
        <Authors isLoading={!authors} isOptions={true} authors={authors} />
      </select>
    </div>
  );
};

export default AuthorSelect;
