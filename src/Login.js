import React, { Component } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const Header = styled.div`
  height: 41px;
  line-height: 40px;
  width: 100%;
  background-color: #F9F9F9;
  border-bottom: 1px solid #ECECED;
  box-sizing: border-box;
  padding-left: 10px;
`;


const Link = styled.div`
  height: 41px;
  line-height: 40px;
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #ECECED
  box-sizing: border-box;
  padding-left: 10px;
  cursor: pointer;
`;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someData: true,
    }
  }

  render() {

    return (
      <Frame>
        <Header>
          Login
        </Header>
        <Link onClick={ () => this.props.get('Password', 'r') }>
          Get Password slide from right
        </Link>
        <Link onClick={ () => this.props.get('Password', 'l') }>
          Get Password slide from left
        </Link>
      </Frame>
    );
  }

}

export default Login;
