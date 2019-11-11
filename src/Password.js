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
  border-bottom: 1px solid #ECECED;
  box-sizing: border-box;
  padding-left: 10px;
`;

class Password extends Component {

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
          Password
        </Header>
        <Link onClick={ () => this.props.get('Login', 'r') }>
          Get Login slide from right
        </Link>
        <Link onClick={ () => this.props.get('Login', 'l') }>
          Get Login slide from left
        </Link>
      </Frame>
    );
  }

}

export default Password;
