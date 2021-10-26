import React, { Component } from 'react';
import Header from './Header';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      state: {},
      loading: false,
    };

    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const state = JSON.parse(localStorage.getItem('state'));
    this.setState({
      state,
      loading: true,
    });
  }

  render() {
    const { state, loading } = this.state;
    return (
      <>
        <Header />
        <main>
          <div data-testid="feedback-total-score">{ loading && state.player.score }</div>
          <div data-testid="feedback-total-question">
            { loading && state.player.assertions }
          </div>
          {loading && state.player.assertions > 2
          && <h1 data-testid="feedback-text">Mandou bem!</h1>}
          {loading && state.player.assertions <= 2
          && <h1 data-testid="feedback-text">Podia ser melhor...</h1>}
        </main>
      </>
    );
  }
}

export default Feedback;
