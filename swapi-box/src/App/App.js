import React, { Component } from 'react';
import './App.css';
import { Scroll } from './Components/Scroll/Scroll.js'
import { Button } from './Components/Button/Button.js'
import { Card } from './Components/Card/Card.js'
import { CardHolder } from './Components/CardHolder/CardHolder.js'
import { Favorites } from './Components/Favorites/Favorites.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Scroll />
      </div>
    );
  }
}
