import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Hari'
    };
  }

  render() {
    return (
      
        <Hello name={this.state.name} />
        
      
    );
  }
}

render(<App />, document.getElementById('root'));
