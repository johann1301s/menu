import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  box-shadow: 0px 0px 10px black;
  left: ${ props => props.position ? '0px' : '20px' };
  animation-name: ${ props => props.position ? lol : lol2 };
  animation-duration: 0.1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-direction: normal;
`;

const lol = keyframes`
  from  { left: 20px }
  to { left: 0px }
`;

const lol2 = keyframes`
  from  { left: 0px }
  to { left: 20px }
`;

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: true,
    }
  }

  move(start, end) {

    console.log(start + ' ' + end);
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
