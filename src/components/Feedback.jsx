import React, { Component } from 'react';
import Header from './Header';

class Feedback extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <h1 data-testid="feedback-text">Mandou bem!</h1>
          <h1 data-testid="feedback-text">Podia ser melhor...</h1>
        </main>
      </>
    );
  }
}

export default Feedback;
