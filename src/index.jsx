import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor (name) {
    super(name);

    this.state = {
      clicked: false
    };

  }

  render () {
    return (
      <div>Hello {this.name}</div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Maxime" />, root);
}
