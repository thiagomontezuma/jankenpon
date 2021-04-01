import React, { Component } from 'react';
import parse from 'html-react-parser';
import Header from '../Header/Header';
import './Choice.css';

class Choice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPlayed: false,
      playedEmoji: '&#x270A;',
      randomComputerNumber: '&#x270C;',
      didWin: 'lose',
      userScore: 0,
      aiScore: 0
    };
  }

  Logic(props) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    this.setState({ hasPlayed: true });
    if (props === 1) {
      if (randomNumber === 3) {
        this.handleLogicResponse(['YOU WIN', '&#x270A;', '&#x270C;']);
        this.setState({ userScore: this.state.userScore + 1 });
      } else if (randomNumber === 2) {
        this.handleLogicResponse(['YOU LOSE', '&#x270A;', '&#x270B;']);
        this.setState({ aiScore: this.state.aiScore + 1 });
      } else if (randomNumber === 1) {
        this.handleLogicResponse(["IT'S A TIE", '&#x270A;', '&#x270A;']);
      }
    }
    if (props === 2) {
      if (randomNumber === 1) {
        this.handleLogicResponse(['YOU WIN', '&#x270B;', '&#x270A;']);
        this.setState({ userScore: this.state.userScore + 1 });
      } else if (randomNumber === 3) {
        this.handleLogicResponse(['YOU LOSE', '&#x270B;', '&#x270C;']);
        this.setState({ aiScore: this.state.aiScore + 1 });
      } else if (randomNumber === 2) {
        this.handleLogicResponse(["IT'S A TIE", '&#x270B;', '&#x270B;']);
      }
    }
    if (props === 3) {
      if (randomNumber === 2) {
        this.handleLogicResponse(['YOU WIN', '&#x270C;', '&#x270B;']);
        this.setState({ userScore: this.state.userScore + 1 });
      } else if (randomNumber === 1) {
        this.handleLogicResponse(['YOU LOSE', '&#x270C;', '&#x270A;']);
        this.setState({ aiScore: this.state.aiScore + 1 });
      } else if (randomNumber === 3) {
        this.handleLogicResponse(["IT'S A TIE", '&#x270C;', '&#x270C;']);
      }
    }
  }

  handleLogicResponse(answerArray) {
    this.setState({
      playedEmoji: answerArray[1],
      randomComputerNumber: answerArray[2],
      didWin: answerArray[0]
    });
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <main className='App-main' style={{ display: this.state.hasPlayed ? 'none' : 'grid' }}>
          <div className='App-buttons' onClick={() => this.Logic(1)}>
            <span>&#x270A;</span>
          </div>
          <div className='App-buttons' onClick={() => this.Logic(2)}>
            <span>&#x270B;</span>
          </div>
          <div className='App-buttons' onClick={() => this.Logic(3)}>
            <span>&#x270C;</span>
          </div>
        </main>
        <div className='App-result' style={{ display: this.state.hasPlayed ? 'grid' : 'none' }}>
          <h1 className='App-result-title' style={{ margin: '0 0 20px 0' }}>
            {this.state.didWin}
          </h1>
          <div className='App-result-icons'>
            <div className='App-Y'>{parse(`<span>${this.state.playedEmoji}</span>`)}</div>
            <div className='App-C'>{parse(`<span>${this.state.randomComputerNumber}</span>`)}</div>
          </div>
          <div className='App-restart'>
            <button
              className='App-restart-button'
              onClick={() => {
                this.setState({ hasPlayed: false });
              }}
            >
              Play Again
            </button>
          </div>
          <div className='App-menu'>
            <button className='App-menu-button' onClick={() => this.props.backToMenu()}>
              Main Menu
            </button>
          </div>
        </div>
        <div className='App-scores'>
          <div className='App-score-container'>
            <span className='App-score-name'>YOU</span>
            <div className='App-score'>
              <span className='App-score-title'>SCORE</span>
              <span className='App-score-number'>{this.state.userScore}</span>
            </div>
          </div>
          <div className='App-score-vs'>vs</div>
          <div className='App-score-container'>
            <span className='App-score-name'>AI</span>
            <div className='App-score'>
              <span className='App-score-title'>SCORE</span>
              <span className='App-score-number'>{this.state.aiScore}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Choice;
