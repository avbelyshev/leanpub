import ReactDom from 'react-dom';
import React from 'react';

class Hello extends React.Component {
  render() {
    const { name } = this.props;
    return <div>Hello, {name}!</div>;
  }
}

ReactDom.render(
  <div>
    <Hello name='World' />
    <Hello name='Mars' />
    <Hello name='Earth' />
  </div>,
  document.getElementById('root')
);
