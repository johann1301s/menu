import React, { Component } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: absolute;
  height: 100%
  width: 100%;
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
          Slide 2
        </Header>
        <Link onClick={ () => this.props.get('Password', 'r') }>
          Right
        </Link>
        <Link onClick={ () => this.props.get('Password', 'l') }>
          Left
        </Link>
      </Frame>
    );
  }

}

export default Login;
