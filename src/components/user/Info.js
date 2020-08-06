import React from 'react';

import AuthContext from "../../context/AuthContext";

const UserInfo = () => {
  return (
    <AuthContext.Consumer>
      {
        ({ firstName, lastName, avatarUrl }) =>
          <div style={styles.container}>
            <div style={styles.imageBox}>
              <img style={styles.image} src={avatarUrl} />
            </div>
            <div style={styles.cardBody}>
              <div>{firstName} {lastName}</div>
            </div>
          </div>
      }
    </AuthContext.Consumer>
  );
}

export default UserInfo;

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'sans-serif',
    justifyContent: 'right',
    alignItems: 'right',
    float: 'right',
    fontSize: '0.9rem',
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
    flexDirection: 'column'
  }
}
