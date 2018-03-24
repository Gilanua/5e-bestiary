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
  switch (val) {
    case 1:
      return "-5";
    case 2:
    case 3:
      return "-4";
    case 4:
    case 5:
      return "-3";
    case 6:
    case 7:
      return "-2";
    case 8:
    case 9:
      return "-1";
    case 10:
    case 11:
      return "+0";
    case 12:
    case 13:
      return "+1";
    case 14:
    case 15:
      return "+2";
    case 16:
    case 17:
      return "+3";
    case 18:
    case 19:
      return "+4";
    case 20:
    case 21:
      return "+5";
    case 22:
    case 23:
      return "+6";
    case 24:
    case 25:
      return "+7";
    case 26:
    case 27:
      return "+8";
    case 28:
    case 29:
      return "+9";
    case 30:
      return "+10";
  }
}

function getChallengeRateXp(rate) {
  return (new Function('return ' + rate))() * 200;
}