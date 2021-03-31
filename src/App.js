import React, {Component} from "react";
import parse from 'html-react-parser';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasPlayed: false, playedEmoji: "&#x270A;", randomComputerNumber: "&#x270C;", didWin: "lose" }
  }

  Logic(props) {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    this.setState({hasPlayed: true});
    if (props === 1) {
      if (randomNumber === 3) {
        this.handleLogicResponse(["YOU WIN", "&#x270A;", "&#x270C;"]);
      } else if (randomNumber === 2) {
        this.handleLogicResponse(["YOU LOSE", "&#x270A;", "&#x270B;"]);
      } else if (randomNumber === 1) {
        this.handleLogicResponse(["IT'S A TIE", "&#x270A;", "&#x270A;"]);
      }
    }
    if (props === 2) {
      if (randomNumber === 1) {
        this.handleLogicResponse(["YOU WIN", "&#x270B;", "&#x270A;"]);
      } else if (randomNumber === 3) {
        this.handleLogicResponse(["YOU LOSE", "&#x270B;", "&#x270C;"]);
      } else if (randomNumber === 2) {
        this.handleLogicResponse(["IT'S A TIE", "&#x270B;", "&#x270B;"]);
      }
    }
    if (props === 3) {
      if (randomNumber === 2) {
        this.handleLogicResponse(["YOU WIN", "&#x270C;", "&#x270B;"]);
      } else if (randomNumber === 1) {
        this.handleLogicResponse(["YOU LOSE", "&#x270C;", "&#x270A;"]);
      } else if (randomNumber === 3) {
        this.handleLogicResponse(["IT'S A TIE", "&#x270C;", "&#x270C;"]);
      }
    }
  }
  
  handleLogicResponse(answerArray) {
    this.setState({playedEmoji: answerArray[1], randomComputerNumber: answerArray[2], didWin: answerArray[0]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Jokenpo</header>
        <main className="App-main" style={{display: this.state.hasPlayed ? "none" : "flex"}}>
          <div className="App-R" onClick={() => this.Logic(1)}>
            <span>&#x270A;</span>
          </div>
          <div className="App-P" onClick={() => this.Logic(2)}>
            <span>&#x270B;</span>
          </div>
          <div className="App-S" onClick={() => this.Logic(3)}>
            <span>&#x270C;</span>
          </div>
        </main>
        <div className="App-result" style={{display: this.state.hasPlayed ? "block" : "none"}}>
          <h1 className="App-result-title" style={{margin: "0 0 20px 0"}}>{this.state.didWin}</h1>
          <div className="App-Y">
            {parse(`<span>${this.state.playedEmoji}</span>`)}
          </div>
          <div className="App-C">
            {parse(`<span>${this.state.randomComputerNumber}</span>`)}
          </div>
          <div className="App-Restart">
            <button onClick={() => {this.setState({hasPlayed: false})}}>Restart</button>
          </div>
        </div>
      </div>
    );
  } 
}

export default App;
