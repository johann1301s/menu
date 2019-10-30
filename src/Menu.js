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
      active: 'Login',
    }
  }

  get(slide, from) {
    this.refs[slide].move(from, 'center');
    this.refs[this.state.active].move('center', 'left');
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
