import React, { Component } from 'react';
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
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
`
const Ability = styled.div`
`
const Mental = styled.div`
`
const Label = styled.span`
  font-weight: bold;
  font-style: italic;
`
const Traits = styled.div`
`
const Trait = styled.div`
`
const Actions = styled.div`
`
const Action = styled.div`
`

export class Creature extends Component {
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
        <Stats>
          {stats.map(stat => {
            let statValue = creature[stat];
            return (
              <Ability>
                {stat.toUpperCase()} {statValue} ({getAbilityModificator(statValue)})
              </Ability>
            )
          })}
        </Stats>
        <Mental>
          <div>
            <Label>Способность: </Label>
            {creature.skill}
          </div>
          <div>
            <Label>Пассивное восприятие: </Label>
            {creature.passive}
          </div>
          <div>
            <Label>Язык: </Label>
            {creature.languages}
          </div>
          <div>
            <Label>Сложность: </Label>
            {creature.cr} ({getChallengeRateXp(creature.cr)} XP)
          </div>
        </Mental>
        <Traits>
          {traits.map(trait => {
            return (
              <Trait>
                <Label>{trait.name} </Label>
                {trait.text}
              </Trait>
            )
          })}
        </Traits>
        <Actions>
          {actions.map(action => {
            return (
              <Action>
                <Label>{action.name} </Label>
                {action.text}
              </Action>
            )
          })}
          <Action></Action>
        </Actions>
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

function getAbilityModificator(val) {
  val = +val;

  const mods = {
    1: "-5",
    2: "-4",
    3: "-4",
    4: "-3",
    5: "-3",
    6: "-2",
    7: "-2",
    8: "-1",
    9: "-1",
    10: "+0",
    11: "+0",
    12: "+1",
    13: "+1",
    14: "+2",
    15: "+2",
    16: "+3",
    17: "+3",
    18: "+4",
    19: "+4",
    20: "+5",
    21: "+5",
    22: "+6",
    23: "+6",
    24: "+7",
    25: "+7",
    26: "+8",
    27: "+8",
    28: "+9",
    29: "+9",
    30: "+10",
  }

  return mods[val];
}

function getChallengeRateXp(rate) {
  return (new Function('return ' + rate))() * 200;
}