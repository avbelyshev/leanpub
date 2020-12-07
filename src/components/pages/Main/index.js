import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Layout from "../../layout/Layout";
import BookContainer from "../../book/Container";
import SimilarBooksList from "../../similar-book/List";
import { newBookPath } from '../../../helpers/routes';

import books from '../../../db/books.json';

const Main = () => (
  <Layout>
    <Helmet>
      <title>Leanpub</title>
    </Helmet>
    <BookContainer />
    <Link to={newBookPath}>Add new book</Link>
    <SimilarBooksList books={books} />
  </Layout>
);

export default Main;
