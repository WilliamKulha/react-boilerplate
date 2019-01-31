import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  font-size: 20em;
  font-weight: bolder;
  font-color: salmon;
`;

const myOtherComponent = () => (
  <Container>
    <h1>Here's another thing</h1>
  </Container>
);

export default myOtherComponent;