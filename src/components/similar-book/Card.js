import React from 'react';

const SimilarBookCard = React.memo(({book, deleteBook }) => {
  const { id, title, cover, authors } = book;
  const author = authors[0].name;

  return (
    <div style={styles.container}>
      <div style={styles.imageBox}>
        <img style={styles.image} src={cover} alt={title} />
      </div>
      <div style={styles.cardBody}>
        <div style={styles.title}>{title}</div>
        <div>{author}</div>
      </div>
      <button onClick={() => deleteBook(id)}>X</button>
    </div>
  )
})

export default SimilarBookCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    maxWidth: '90px',
    minHeight: '90px'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '15px 10px',
    fontSize: '.8rem'
  },
  title: {
    fontWeight: 'bold'
  }
}
