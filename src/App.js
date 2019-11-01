import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu.js';

import Password from './Password.js';
import Login from './Login.js';

const Container = styled.div`
  position: absolute;
  left: calc(50% - 0.5 * 225px);
  top: calc(50% - 0.5 * 467px);
  border-radius: 38px;
  background-color: white;
  box-shadow: rgb(255, 255, 255) 0px 4px 7px 1px inset, rgba(173, 186, 204, 0.247059) 0px -5px 20px 0px inset, rgba(0, 21, 64, 0.137255) 0px 2px 6px 0px, rgba(0, 21, 64, 0.0470588) 0px 10px 20px 0px;
  height: 467px;
  width: 225px;
`;

const Content = styled.div`
  position: absolute;
  top: 46px;
  left: 7px;
  height: 375px;
  width: 211px;
  overflow: hidden;
  background-color: lightgray;
  border: 1px solid #ECECED;
  box-sizing: border-box;
`;

class App extends Component  {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.refs.myRef.refs.Login)
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Content>
            <Menu
              ref='myRef'>

              <Login
                slide="Login"/>

              <Password
                slide="Password"/>

            </Menu>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App;
