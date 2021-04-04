import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Header from '../Header/Header';
import './Friends.css';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAllPlayed: false,
      userPlayedNumber: 0,
      user1played: false,
      user2played: false,
      user1Score: 0,
      user2Score: 0,
      player1Emoji: '&#x270A;',
      player2Emoji: '&#x270A;',
      whoWin: ''
    };
  }

  emojiPressed(userNumber) {
    if (!this.state.user1played) {
      this.setState({ userPlayedNumber: userNumber });
      this.setState({ user1played: true });
    }

    if (this.state.user1played && !this.state.user2played) {
      let user1PlayedNumber = this.state.userPlayedNumber;
      if (user1PlayedNumber === 1) {
        if (userNumber === 3) {
          this.handleLogicResponse(['PLAYER 1 WINS', '&#x270A;', '&#x270C;']);
          this.setState({ user1Score: this.state.user1Score + 1 });
        } else if (userNumber === 2) {
          this.handleLogicResponse(['PLAYER 2 WINS', '&#x270A;', '&#x270B;']);
          this.setState({ user2Score: this.state.user2Score + 1 });
        } else if (userNumber === 1) {
          this.handleLogicResponse(["IT'S A TIE", '&#x270A;', '&#x270A;']);
        }
      } else if (user1PlayedNumber === 2) {
        if (userNumber === 1) {
          this.handleLogicResponse(['PLAYER 1 WINS', '&#x270B;', '&#x270A;']);
          this.setState({ user1Score: this.state.user1Score + 1 });
        } else if (userNumber === 3) {
          this.handleLogicResponse(['PLAYER 2 WINS', '&#x270B;', '&#x270C;']);
          this.setState({ user2Score: this.state.user2Score + 1 });
        } else if (userNumber === 2) {
          this.handleLogicResponse(["IT'S A TIE", '&#x270B;', '&#x270B;']);
        }
      } else if (user1PlayedNumber === 3) {
        if (userNumber === 2) {
          this.handleLogicResponse(['PLAYER 1 WINS', '&#x270C;', '&#x270B;']);
          this.setState({ user1Score: this.state.user1Score + 1 });
        } else if (userNumber === 1) {
          this.handleLogicResponse(['PLAYER 2 WINS', '&#x270C;', '&#x270A;']);
          this.setState({ user2Score: this.state.user2Score + 1 });
        } else if (userNumber === 3) {
          this.handleLogicResponse(["IT'S A TIE", '&#x270C;', '&#x270C;']);
        }
      }
    }
  }

  handleLogicResponse(answerArray) {
    this.setState({
      player1Emoji: answerArray[1],
      player2Emoji: answerArray[2],
      whoWin: answerArray[0],
      hasAllPlayed: true
    });
  }

  render() {
    return (
      <div className='Friends'>
        <Header />
        <main
          className='Friends-main'
          style={{ display: this.state.hasAllPlayed ? 'none' : 'grid' }}
        >
          {!this.state.user1played ? (
            <p className='Friends-main-title'>Player 1 Turn</p>
          ) : (
            <p className='Friends-main-title'>Player 2 Turn</p>
          )}
          <div className='Friends-buttons' onClick={() => this.emojiPressed(1)}>
            <span>&#x270A;</span>
          </div>
          <div className='Friends-buttons' onClick={() => this.emojiPressed(2)}>
            <span>&#x270B;</span>
          </div>
          <div
            className='Friends-buttons'
            onClick={() => this.emojiPressed(3)}
            style={{ marginBottom: '0px' }}
          >
            <span>&#x270C;</span>
          </div>
        </main>
        <div
          className='Friends-result'
          style={{ display: this.state.hasAllPlayed ? 'grid' : 'none' }}
        >
          <h1 className='Friends-result-title' style={{ margin: '0 0 20px 0' }}>
            {this.state.whoWin}
          </h1>
          <div className='Friends-result-icons'>
            <div className='Friends-Y'>{parse(`<span>${this.state.player1Emoji}</span>`)}</div>
            <div className='Friends-C'>{parse(`<span>${this.state.player2Emoji}</span>`)}</div>
          </div>
          <div className='Friends-restart'>
            <button
              className='Friends-restart-button'
              onClick={() => {
                this.setState({
                  hasAllPlayed: false,
                  userPlayedNumber: 0,
                  user1played: false,
                  user2played: false,
                  whoWin: ''
                });
              }}
            >
              Play Again
            </button>
          </div>
          <div className='Friends-menu'>
            <button className='Friends-menu-button' onClick={() => this.props.backToMenu()}>
              <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                Main Menu
              </Link>
            </button>
          </div>
        </div>
        <div className='Friends-scores'>
          <div className='Friends-score-container'>
            <span className='Friends-score-name'>PLAYER 1</span>
            <div className='Friends-score'>
              <span className='Friends-score-title'>SCORE</span>
              <span className='Friends-score-number'>{this.state.user1Score}</span>
            </div>
          </div>
          <div className='Friends-score-vs'>vs</div>
          <div className='Friends-score-container'>
            <span className='Friends-score-name'>PLAYER 2</span>
            <div className='Friends-score'>
              <span className='Friends-score-title'>SCORE</span>
              <span className='Friends-score-number'>{this.state.user2Score}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
