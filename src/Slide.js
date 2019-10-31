import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: red;
  box-shadow: 0px 0px 10px black;
  left: ${ props => props.position };
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: swing;
  animation-direction: normal;
  animation-name: ${ props => eval(props.keyframe) };
  z-index: ${ props => props.index };
`;

const none = keyframes``;

const rc = keyframes`
  from  { left: 80% }
  to { left: 0px }
`;

const cr = keyframes`
  from  { left: 0px }
  to { left: 80% }
`;

const cl = keyframes`
  from  { left: 0px }
  to { left: -50% }
`;

const lc = keyframes`
  from  { left: -50% }
  to { left: 0px }
`;

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: '80%',
      keyframe: 'none',
      index: 1,
    }
  }

  move(start, end) {

    if (end === 'r') {
      this.setState({
        position: '80%',
        keyframe: start + end,
        index: 3,
      });
    } else if (end === 'c') {
      this.setState({
        position: '0%',
        keyframe: start + end,
        index: 2,
      });
    } else {
      this.setState({
        position: '-50%',
        keyframe: start + end,
        index: 1,
      });
    }

  }

  render() {
    let Content = this.props.component;
    return (
      <Frame
        index={ this.state.index }
        keyframe={ this.state.keyframe }
        position={ this.state.position }>
        <Content
          get={ this.props.get }/>
      </Frame>
    );
  }

}

export default Slide;
