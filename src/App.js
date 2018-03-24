import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import {Creature} from './components/creature/Creature';
import data from './components/fixture.json';

const AppBody = styled.div`
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

const AppIntro = styled.p`
  font-size: large;
`

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
