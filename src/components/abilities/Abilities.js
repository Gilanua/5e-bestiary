import React, { Component } from 'react';
import styled from 'styled-components';
import getAbilityModificator from './helpers';

class Abilities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const Self = styled.div`
      display: flex;
      justify-content: space-between;
      margin: 1.5 em 0;
    `

    return (
      <Self>
        {stats.map(ability => {
          return (
            <Ability name={ability} value={this.props.statsMap[ability]} />
          )
        })}
      </Self>
    )
  }
}

class Ability extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Self = styled.div`
      text-align: center;
    `

    return (
      <Self>
        <div>
          {this.props.name.toUpperCase()}
        </div>
        <div>
          {this.props.value} ({getAbilityModificator(this.props.value)})
        </div>
      </Self>
    )
  }
}

export default Abilities;
