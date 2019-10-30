import React, { Component } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  height: 100%;
  width: 100%;
`;

class Slide001 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someData: true,
    }
  }

  render() {

    return (
      <Frame>
        Slide001
      </Frame>
    );
  }

}

export default Slide001;
