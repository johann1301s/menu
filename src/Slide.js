import React, { Component } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  box-shadow: 0px 0px 10px black;
  left: ${ props => props.position ? '0px' : '30px' };
`;

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: true,
    }
  }

  move(start, end) {
    this.setState({
      position: !this.state.position,
    });
  }

  render() {
    let Content = this.props.component;
    return (
      <Frame
        position={ this.state.position }>
        <Content
          get={ this.props.get }/>
      </Frame>
    );
  }

}

export default Slide;
