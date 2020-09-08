import React from 'react';
import AuthorsList from "../author/List";
import SubscriptionTerms from "./SubscriptionTerms";
import FeedbackForm from "./FeedbackForm";

const BookCard = (props) => {
  if (!props.book) {
    return <div>Empty book</div>;
  }

  const {
    book: { title, description, pages, language, progress, cover, authors, minimum_price, suggested_price, collected_amount, expected_amount, subscribers }
  } = props;

  return (
    <>
      <Card>
        <Image src={cover} title={title} />
        <CardBody>
          <Row style={styles.title}>{title}</Row>
          <Row>{description}</Row>
          <Row>Pages: {pages}</Row>
          <Row>Language: {language}</Row>
          <Row style={styles.price}>Minimum price: {minimum_price}</Row>
          <Row style={styles.price}>Suggested price: {suggested_price}</Row>
          <Row style={(subscribers >= 100) ? styles.popular : null}>
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
  <div style={styles.container}>
    {children}
  </div>
)

const Image = ({ src, alt }) => (
  <div style={styles.imageBox}>
    <img style={styles.image} src={src} alt={alt} />
  </div>
)

const CardBody = ({ children }) => (
  <div style={styles.cardBody}>
    {children}
  </div>
)

const Row = ({ style, children }) => (
  <div style={style}>{children}</div>
)

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '200px',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '15px 10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.05rem',
    letterSpacing: '.05rem'
  },
  popular: {
    color: 'red',
    fontWeight: 'bold',
  }
}
