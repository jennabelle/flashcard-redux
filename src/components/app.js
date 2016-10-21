import React, { Component } from 'react';
import DeckList from '../containers/deck-list';
import DeckDetail from '../containers/deck-detail';

export default class App extends Component {

  render() {
    return (
      <div>
      	<DeckList />
      	<DeckDetail />
      </div>
    );
  }
}
