import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(154,154,154,.75);
  left: ${ props => props.position };
  animation-duration: 0.4s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-delay: 0s;
  animation-name: ${ props => eval(props.keyframe) };
  z-index: ${ props => props.index };
`;

const none = keyframes``;

const rc = (A, B) => keyframes`
  0%  { left: calc(100% + 10px) }
  100%  { left: 0px }
`;

const cr = keyframes`
  0%  { left: 0px }
  100%  { left: calc(100% + 10px) }
`;

const cl = keyframes`
  0%  { left: 0px }
  100% { left: -40% }
`;

const lc = keyframes`
  0%  { left: -40% }
  100%  { left: 0px }
`;

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      position: '0%',
      keyframe: 'none',
      index: 1,
    }
  }

  move(start, end) {

    if (end === 'r') {
      this.setState({
        position: 'calc(100% + 10px)',
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

    const Component = this.props.slide.component;

    return (
      <Frame
        index={ this.state.index }
        keyframe={ this.state.keyframe }
        position={ this.state.position }>

        <Component
          get={ this.props.get }
          ref={ this.props.slide.name }
          { ...this.props.slide.props }/>

      </Frame>
    );
  }

}

export default Slide;
