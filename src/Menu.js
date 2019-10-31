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
    this.state = {
      active: slide,
    }
  }

  render() {

    return (
      <Frame>

        <Slide
          ref={ "Login" }
          component={ Login }
          get={ this.get.bind(this) }/>


        <Slide
          ref={ "Password" }
          component={ Password }
          get={ this.get.bind(this) }/>

      </Frame>
    );
  }

}

export default Menu;
