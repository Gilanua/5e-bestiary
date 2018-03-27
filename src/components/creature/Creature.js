import React, { Component } from 'react';
import Abilities from '../abilities/Abilities';
import Skills from '../skills/Skills';
import styled from 'styled-components';

const Self = styled.div`
  display: block;
  width: 700px;
  background: black;
  color: white;
  border: 1px solid gold;
  padding: 2em 2.5em;
  margin: 2em auto;
`
const Common = styled.div`
  display:block;
`
const Physical = styled.div`
  display: block;
`
const Mental = styled.div`
`
const Label = styled.span`
  font-weight: bold;
  font-style: italic;
`

class Creature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
      isPinned: false
    }
  }

  render() {
    const creature = this.props.creature;
    const describe = [translateSize(creature.size), creature.type, creature.alignment].join(', ');
    const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
    const statsMap = stats.reduce(
      (acc, stat) => {
        return {...acc, [stat]: creature[stat]}
      }
      , {}
    );
    const skills = ['save', 'skill', 'passive', 'senses', 'languages', 'cr'];
    const skillsMap = skills.reduce(
      (acc, item) => {
        return {...acc, [item]: creature[item]}
      }
      , {}
    );
    const traits = creature.trait ? [...creature.trait] : [];
    const actions = creature.action ? [...creature.action] : [];

    return (
      <Self>
        <Common>
          <p>{creature.name}</p>
          <p>{describe}</p>
        </Common>
        <Physical>
          <p>AC: {creature.ac}</p>
          <p>HP: {creature.hp}</p>
          <p>Скорость: {creature.speed}</p>
        </Physical>
        <Abilities statsMap={statsMap} />
        <Skills skillsMap={skillsMap} />
        <div>
          {traits.map(trait => {
            return (
              <div>
                <Label>{trait.name} </Label>
                {trait.text}
              </div>
            )
          })}
        </div>
        <div>
          {actions.map(action => {
            return (
              <div>
                <Label>{action.name} </Label>
                {action.text}
              </div>
            )
          })}
        </div>
      </Self>
    );
  }

}

function translateSize(key) {
  const size = {
    "T": "Крошечный",
    "S": "Маленький",
    "M": "Средний",
    "L": "Большой",
    "H": "Огромный",
    "G": "Колоссальный",
  }

  return size[key];
}

export default Creature;
