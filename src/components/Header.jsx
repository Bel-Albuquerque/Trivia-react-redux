import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import '../style.css/header.css';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;

    return (
      <header className="header-container">
        <img
          data-testid="header-profile-picture"
          src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` }
          alt={ name }
        />
        <span data-testid="header-player-name">{ name }</span>
        <div data-testid="header-score">{ score }</div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.login.name,
  token: state.login.token,
  email: state.login.email,
  score: state.game.score,
});

export default connect(mapStateToProps)(Header);
