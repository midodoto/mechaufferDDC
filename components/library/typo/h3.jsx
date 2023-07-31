import React from 'react';
import styled from 'styled-components';

const H3Component = styled.h3`
  font-family: 'QuicksandBold';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => (!fontSize ? '2.6' : fontSize)}rem;
  line-height: 3.2rem;
  color: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`;

const H3 = ({ children, color = '', fontSize = '', ...rest }) => (
  <H3Component color={color} fontSize={fontSize} {...rest}>
    {children}
  </H3Component>
);

export default H3;
