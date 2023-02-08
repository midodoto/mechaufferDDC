import React from 'react';
import styled from 'styled-components';

const H4Component = styled.h4`
  font-family: 'QuicksandBold';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => (!fontSize ? '2.2' : fontSize)}rem;
  line-height: 3.2rem;
  color: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    font-size: 2.2rem;
    line-height: 2.6rem;
  }
`;

const H4 = ({ children, color = '', fontSize = '' }) => <H4Component color={color} fontSize={fontSize}>{children}</H4Component>;

export default H4;
