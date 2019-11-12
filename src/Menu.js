import React, { Component } from 'react';
import styled from 'styled-components';
import Slide from './Slide.js';


const Frame = styled.div`
  height: 100%;
  width: 100%;
`;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.animating = false;
    this.state = {
      active: this.props.settings.active,
    }
  }

  get(slide, from) {

    if (this.animating) {
      return;
    } else {
      this.animating = true;
      setTimeout(() => {
        this.animating = false;
      },
      this.props.settings.animation.duration*1000);
    }

    // check from is either 'r' or 'l'
    if (!(from === 'r' || from === 'l')) {
      return;
    }

    // check slide exists
    if (!this.refs[slide]) {
      return;
    }

    // move active slide
    const end = (from === 'r') ? 'l' : 'r';
    this.refs[this.state.active].move('c', end);

    // move new slide
    this.refs[slide].move(from, 'c');
    this.setState({
      active: slide,
    });
  }

  slides(object) {
    return Object.keys(object).map((key, index) => {
      let obj = object[key];
      obj['name'] = key;
      return obj;
    });
  }

  render() {

    return (
      <Frame>

        { this.slides(this.props.slides).map((slide, index) => {
          return (
            <Slide
              key={ index }
              slide={ slide }
              active={ this.state.active === slide.name }
              settings={ this.props.settings }
              get={ this.get.bind(this) }
              ref={ slide.name }/>
          );
        }) }

      </Frame>
    );
  }

}

export default Menu;
