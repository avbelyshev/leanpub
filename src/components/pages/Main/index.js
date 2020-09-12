import React from 'react';
import { Helmet } from "react-helmet";
import Layout from "../../layout/Layout";
import BookContainer from "../../book/Container";
import SimilarBooksList from "../../similar-book/List";

import books from '../../../db/books.json';

const Main = () => (
  <Layout>
    <Helmet>
      <title>Leanpub</title>
    </Helmet>
    <BookContainer />
    <SimilarBooksList books={books} />
  </Layout>
);

export default Main;
