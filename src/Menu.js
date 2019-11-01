import React, { Component } from 'react';
import styled from 'styled-components';
import Slide from './Slide.js';
import Login from './Login.js';
import Password from './Password.js';

const Frame = styled.div`
  height: 100%;
  width: 100%;
`;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'Password',
    }
  }

  get(slide, from) {
    let end = (from === 'r') ? 'l' : 'r';
    this.refs[this.state.active].move('c', end);

    this.refs[slide].move(from, 'c');
    this.setState({
      active: slide,
    });
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children, (child) => {
      let element = React.cloneElement(child, { get: this.get.bind(this) });
      let e = (
        <Slide
          ref={ child.props.slide }
          get={ this.get.bind(this) }>
          {element}
        </Slide>
      );
      return e;
    });

    return (
      <Frame>
        { childrenWithProps }
      </Frame>
    );
  }

}

export default Menu;
