import React from 'react';
import { Link } from 'react-router-dom';
import AuthorsList from "../author/List";
import SubscriptionTerms from "./SubscriptionTerms";
import FeedbackForm from "./FeedbackForm";

const BookCard = (props) => {
  if (!props.book) {
    return <div>Empty book</div>;
  }

  const {
    book: { id, title, description, pages, language, progress, cover, authors, minimum_price, suggested_price, collected_amount, expected_amount, subscribers }
  } = props;

  return (
    <>
      <Card>
        <Image src={cover} title={title} />
        <CardBody>
          <Row className={'font-bold text-xl'}><Link to={`/book/${id}`}>{title}</Link></Row>
          <Row>{description}</Row>
          <Row>Pages: {pages}</Row>
          <Row>Language: {language}</Row>
          <Row className={'font-bold text-lg tracking-wider'}>Minimum price: {minimum_price}</Row>
          <Row className={'font-bold text-lg tracking-wider'}>Suggested price: {suggested_price}</Row>
          <Row className={(subscribers >= 100) ? 'font-bold text-red-700' : null}>
            Progress {progress}% ({collected_amount} of {expected_amount})
          </Row>
          <SubscriptionTerms />
        </CardBody>
      </Card>
      {(authors.length > 0) && <AuthorsList authors={authors} />}
      <FeedbackForm />
    </>
  )
}

export default BookCard;

const Card = ({ children }) => (
  <div className='flex flex-col sm:flex-row'>
    {children}
  </div>
)

const Image = ({ src, alt }) => (
  <div className='max-w-xs w-full flex justify-center sm:flex-none sm:flex-col sm:w-1/2'>
    <img className='w-1/2 sm:w-full' src={src} alt={alt} />
  </div>
)

const CardBody = ({ children }) => (
  <div className='flex-grow flex flex-col justify-evenly px-3 py-5'>
    {children}
  </div>
)

const Row = ({ className, children }) => (
  <div className={className}>{children}</div>
)
