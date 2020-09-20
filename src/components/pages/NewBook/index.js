import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import Layout from "../../layout/Layout";
import { createBook } from "../../../lib/createBook";

import { useHistory } from "react-router-dom";
import { bookPath } from "../../../helpers/routes";
import AuthorSelect from "./authorsSelect";

const NewBook = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (fields) => {
    return createBook({
      ...fields,
      pages: parseFloat(fields.pages),
      minimum_price: parseFloat(fields.minimum_price),
      suggested_price: parseFloat(fields.suggested_price),
      authors: [fields.authors]
    }).then(res => {
      const bookId = res.records[0].id;
      const redirectURI = bookPath(bookId);

      history.push(redirectURI);
    });
  };

  return (
    <Layout>
      <h1 className='text-3xl font-bold'>New book</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
        <Field name='title' label='Title' register={register} />
        <Field name='description' type='textarea' className='w-full' label='Description' register={register} />
        <Field name='cover' label='Cover' register={register} />
        <AuthorSelect name='authors' label='Author' register={register} />
        <Field name='pages' type='number' className='w-full' label='Pages' register={register} />
        <Field name='language' label='Language' register={register} />
        <Field name='minimum_price' type='number' className='w-full' label='Minimum price' register={register} />
        <Field name='suggested_price' type='number' className='w-full' label='Suggested price' register={register} />
        <button className='mt-3 bg-gray-700 px-3 py-2 text-white'>Add book</button>
      </form>
    </Layout>
  );
};

export default NewBook;

const Field = ({ register, label, type, className, ...inputProps }) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div>
      <label className='block' htmlFor={inputProps.name}>{label}</label>
      <Component
        className={cx('border border-gray-500 rounded px-2 py-3 w-full', className)}
        ref={register}
        {...inputProps}
      />
    </div>
  );
};
