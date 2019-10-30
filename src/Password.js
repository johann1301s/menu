import React, { Component } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  position: absolute;
  top: 100px;
  height: 100%
  width: 100%;
`;

const Link = styled.div`
  height: 41px;
  line-height: 40px;
  width: 100%;
  background-color: gray;
  border-bottom: 1px solid black;
  box-sizing: border-box;
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
        <Link onClick={ () => this.props.get('Password', 'right') }>
          Password
        </Link>
      </Frame>
    );
  }

}

export default Login;
