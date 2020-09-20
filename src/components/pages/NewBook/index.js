import React from 'react';
import { useForm } from 'react-hook-form';
import cx from 'classnames';

import Layout from "../../layout/Layout";
import { createBook } from "../../../lib/createBook";

import { useHistory } from "react-router-dom";
import { bookPath } from "../../../helpers/routes";
import AuthorSelect from "./authorsSelect";

import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().min(5).max(1000).required(),
  cover: yup.string().required(),
  authors: yup.string().required(),
  pages: yup.number().positive().integer().required(),
  language: yup.string().required(),
  minimum_price: yup.number().positive().integer().required(),
  suggested_price: yup.number().positive().integer().required()
});

const NewBook = () => {
  const { errors, register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
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
        <Field errors={errors} name='title' label='Title' register={register} />
        <Field errors={errors} name='description' type='textarea' className='w-full' label='Description' register={register} />
        <Field errors={errors} name='cover' label='Cover' register={register} />
        <AuthorSelect errors={errors} name='authors' label='Author' register={register} />
        <Field errors={errors} name='pages' type='number' defaultValue={0} className='w-full' label='Pages' register={register} />
        <Field errors={errors} name='language' label='Language' register={register} />
        <Field errors={errors} name='minimum_price' type='number' defaultValue={0} className='w-full' label='Minimum price' register={register} />
        <Field errors={errors} name='suggested_price' type='number' defaultValue={0} className='w-full' label='Suggested price' register={register} />
        <button className='mt-3 bg-gray-700 px-3 py-2 text-white'>Add book</button>
      </form>
    </Layout>
  );
};

export default NewBook;

const Field = ({ errors, register, label, type, className, ...inputProps }) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div>
      <label className='block' htmlFor={inputProps.name}>{label}</label>
      <Component
        className={cx('border border-gray-500 rounded px-2 py-3 w-full', className)}
        ref={register}
        {...inputProps}
      />
      {errors && errors[inputProps.name] && <span className='text-red-500'>{errors[inputProps.name].message}</span>}
    </div>
  );
};
