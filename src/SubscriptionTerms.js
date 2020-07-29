import React from 'react';
import ReactDom from 'react-dom';

class SubscriptionTerms extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <a onClick={() => this.toggle()}><i>Subscription terms</i></a>
        {
          this.state.isOpen && ReactDom.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                Subscription terms
                <button onClick={() => this.toggle()}>Close</button>
              </div>
            </div>
            ,
            document.getElementById('modal-root')
          )
        }
      </>
    )
  }
}

export default SubscriptionTerms;

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}
