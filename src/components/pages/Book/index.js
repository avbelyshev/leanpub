import React from 'react';
import Layout from "../../layout/Layout";
import BookCard from "../../book/Card";

import { useBook } from "../../../hooks/useBooks";
import { useHistory} from "react-router-dom";

const Book = ({ match: { params } }) => {
  const book = useBook(params.id);

  return (
    <Layout>
      <BackButton />
      {book
        ? <BookCard book={book} />
        : <div>Loading...</div>
      }
    </Layout>
  )
};

export default Book;

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    if (history.action === 'PUSH')
      history.goBack();
    else
      history.push('/');
  };

  return (
    <button
      className='border border-blue-800 text-blue-800 px-3 py-2 text-xs'
      onClick={goBack}
    >
      Go back
    </button>
  );
};
