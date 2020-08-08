import React from 'react';

const AuthorCard = (props) => {
  if (!props.author) {
    return <div>Empty author</div>;
  }

  const { author: { name, email, avatar, about } } = props;

  return (
    <div style={styles.container}>
      <div style={styles.imageBox}>
        <img style={styles.image} src={avatar} alt={name} />
      </div>
      <div style={styles.cardBody}>
        <div style={styles.name}>{name}</div>
        <div>{email}</div>
        <div>{about}</div>
      </div>
    </div>
  )
}

export default AuthorCard;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif'
  },
  imageBox: {
    borderRadius: '16px',
    height: '32px',
    lineHeight: '32px',
    width: '32px',
    backgroundColor: '#fff',
    display: 'block',
    fontSize: 0,
    margin: 'auto',
    overflow: 'hidden',
    padding: 0,
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  image: {
    width: '100%'
  },
  cardBody: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '15px 10px'
  },
  name: {
    fontWeight: 'bold'
  }
}
