import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import {Creature} from './components/creature/Creature';
import data from './components/fixture.json';

class App extends Component {
  render() {
    return (
      data.map(creature => {
        return <Creature creature={creature}></Creature>
      })
    );
  }
}

export default App;
