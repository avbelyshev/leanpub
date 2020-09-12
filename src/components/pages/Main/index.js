import React from 'react';
import Layout from "../../layout/Layout";
import BookContainer from "../../book/Container";
import SimilarBooksList from "../../similar-book/List";

import books from '../../../db/books.json';

const Main = () => (
  <Layout>
    <BookContainer />
    <SimilarBooksList books={books} />
  </Layout>
);

export default Main;
