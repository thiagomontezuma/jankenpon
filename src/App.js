import React, { Component } from 'react';
import Choice from './Choice/Choice';
import Friends from './Friends/Friends';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playButton: 0
    };
  }

  playButton(value) {
    this.setState({ playButton: value });
  }

  backToMenu() {
    this.setState({ playButton: 0 });
  }

  render() {
    const homepageHtml = (
      <div className='main-app'>
        <Header />
        <article className='icons-parent'>
          <div className='icons'>
            <span>&#x270A;</span>
          </div>
          <div className='icons'>
            <span>&#x270B;</span>
          </div>
          <div className='icons'>
            <span>&#x270C;</span>
          </div>
        </article>
        <article>
          <button className='play-button' style={{ marginBottom: '20px' }}>
            Play with Friend
          </button>
          <button className='play-button' onClick={() => this.playButton(2)}>
            Play with Computer
          </button>
        </article>
      </div>
    );

    if (this.state.playButton === 1) {
      return <Friends backToMenu={() => this.backToMenu()} />;
    } else if (this.state.playButton === 2) {
      return <Choice backToMenu={() => this.backToMenu()} />;
    } else {
      return homepageHtml;
    }
  }
}

export default App;
