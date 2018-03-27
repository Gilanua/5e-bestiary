import React, { Component } from 'react';
import styled from 'styled-components';
import { getChallengeRateXp, getSkillName } from './helpers';


class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const names = ['save', 'skill', 'passive', 'senses', 'languages', 'cr'];
    const Self = styled.div`
      margin: 1.5em 0;
    `

    return (
      <Self>
        {names.map(skill => {
          let value = this.props.skillsMap[skill];

          if (value) {
            return (
              <Skill
                name={getSkillName(skill)}
                value={value}
              />
            )
          }
        })}
      </Self>
    )
  }
}

class Skill extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Label = styled.span`
      font-weight: bold;
      font-style: italic;
    `
    return (
      <div>
        <Label>{this.props.name}:</Label> {this.props.value}
      </div>
    )
  }
}

export default Skills;
