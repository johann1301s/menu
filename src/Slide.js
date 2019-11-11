import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  background-color: white;
  width: calc(100% + ${ props => props.settings.shadow.spread + props.settings.shadow.blur }px);
  box-shadow: ${ props =>
    props.settings.shadow.hOffset + 'px ' +
    props.settings.shadow.vOffset + 'px ' +
    props.settings.shadow.blur + 'px ' +
    props.settings.shadow.spread + 'px rgba(' +
    props.settings.shadow.color.red + ', ' +
    props.settings.shadow.color.green + ', ' +
    props.settings.shadow.color.blue + ', ' +
    props.settings.shadow.color.alpha + ')'
  };
  left: ${ props => props.position };
  animation-duration: ${ props => props.settings.animation.duration }s;
  animation-timing-function: ${ props =>
    'cubic-bezier(' +
    props.settings.animation.bezier.x1 + ', ' +
    props.settings.animation.bezier.y1 + ', ' +
    props.settings.animation.bezier.x2 + ', ' +
    props.settings.animation.bezier.y2 + ')'
  };
  animation-name: ${ props => props.keyframe };
  z-index: ${ props => props.index };
`;

const rr = spacing => keyframes`
  0%  { left: calc(100% + ${spacing}px) }
  100%  { left: calc(100% + ${spacing}px) }
`;

const cc = () => keyframes`
  0%  { left: 0% }
  100%  { left: 0% }
`;

const ll = left => keyframes`
  0% { left: -${left} }
  100% { left: -${left} }
`;

const rc = spacing => keyframes`
  0%  { left: calc(100% + ${spacing}px) }
  100%  { left: 0px }
`;

const cr = spacing => keyframes`
  0%  { left: 0px }
  100%  { left: calc(100% + ${spacing}px) }
`;

const cl = left => keyframes`
  0%  { left: 0px }
  100% { left: -${left} }
`;

const lc = left => keyframes`
  0%  { left: -${left} }
  100%  { left: 0px }
`;

class Slide extends Component {

  constructor(props) {
    super(props);

    this.state = {
      position: this.props.active ? '0%' : 'calc(100% + ' + this.getSpacing() + 'px)',
      keyframe: this.props.active ? 'cc' : 'rr',
      index: this.props.active ? 2 : 3,
    }

  }

  getSpacing() {
    const settings = this.props.settings;
    const blur = settings.shadow.blur;
    const spread = settings.shadow.spread;
    return blur + spread;
  }

  getLeftPosition() {
    const value = this.props.settings.left.value;
    const unit = this.props.settings.left.unit;
    return value + unit;
  }

  move(start, end) {

    let index;
    let position;
    let keyframe = start + end;
    const spacing = this.getSpacing();
    const left = this.getLeftPosition();

    if (keyframe === 'rc') {
      keyframe = rc( spacing );
      position = '0%';
      index = 2;

    } else if (keyframe === 'cr') {
      keyframe = cr( spacing );
      position = 'calc(100% + ' + spacing + 'px)';
      index = 3;

    } else if (keyframe === 'cl') {
      keyframe = cl( left );
      position = left;
      index = 1;

    } else if (keyframe === 'lc') {
      keyframe = lc( left );
      position = '0%';
      index = 2;

    } else if (keyframe === 'cc') {
      keyframe = cc();
      position = '0%';
      index = 2;

    } else if (keyframe === 'rr') {
      keyframe = rr( spacing );
      position = 'calc(100% + ' + spacing + 'px)';
      index = 3;

    } else if (keyframe === 'll') {
      keyframe = ll( left );
      position = left;
      index = 1;

    } else {
      return;

    }

    this.setState({
      position: position,
      keyframe: keyframe,
      index: index,
    });

  }

  render() {

    const Component = this.props.slide.component;

    return (
      <Frame
        index={ this.state.index }
        keyframe={ this.state.keyframe }
        settings={ this.props.settings }
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
