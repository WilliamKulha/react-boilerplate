import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div `
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

const Header = () => (
  <Container>
    <h1>Hello World</h1>
    <Link to ="/">Home</Link> | <Link to="/myOtherComponent">Another Thing</Link>
  </Container>
);

export default Header;