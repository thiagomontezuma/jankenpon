import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route path='/play-with-friends'>
            <Friends backToMenu={() => this.backToMenu()} />
          </Route>
          <Route path='/play-with-computer'>
            <Choice backToMenu={() => this.backToMenu()} />
          </Route>
          <Route path='/'>
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
                <button
                  className='play-button'
                  onClick={() => this.playButton(1)}
                  style={{ marginBottom: '20px' }}
                >
                  <Link
                    to={'/play-with-friends'}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    Play with Friend
                  </Link>
                </button>
                <button className='play-button' onClick={() => this.playButton(2)}>
                  <Link
                    to={'/play-with-computer'}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    Play with Computer
                  </Link>
                </button>
              </article>
            </div>
          </Route>
        </Switch>
      </Router>
    );

    return homepageHtml;

    // if (this.state.playButton === 1) {
    //   return <Friends backToMenu={() => this.backToMenu()} />;
    // } else if (this.state.playButton === 2) {
    //   return <Choice backToMenu={() => this.backToMenu()} />;
    // } else {
    //   return homepageHtml;
    // }
  }
}

export default App;
