import React from 'react';
import styled from 'styled-components';

const BodyComponent = styled.p`
  font-family: 'Quicksand';
  font-size: ${({ fontSize }) => (!fontSize ? '1.4' : fontSize)}rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Body3 = ({ children, color = '', fontSize = '', disable = false, className = '', ...rest }) => (
  <BodyComponent className={className} color={color} fontSize={fontSize} disable={disable} {...rest}>
    {children}
  </BodyComponent>
);

export default Body3;
