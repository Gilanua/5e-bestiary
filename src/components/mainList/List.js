import React, { Component } from 'react';
import styled from 'styled-components';
import Creature from './components/creature/Creature';
import fixture from './components/fixture.json';

class List extends Component {
  constructor(props) {
    super(props);

    this.setState({
      offset: 0
    });
    this.props.chunkSize = 25;
    this.props.creatures = getChunk(fixture, this.state.offset, this.props.chunkSize);
  }
  componentWillMount() {

  }
  shouldComponentUpdate(prevProps, nextProps) {

  }
  render() {
    return (
      <div>
        {this.props.creatures.map(item => {
          return <Creature creature={item} />
        })}
      </div>
    );
  }
}
function getChunk(data, offset, count) {
  return data.slice(offset, offset + count);
}
function getMore(currentData, moreData) {
  return currentData.concat(moreData);
}

export default List;
