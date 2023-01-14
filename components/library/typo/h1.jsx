import React from 'react';
import styled from 'styled-components';

const H1Component = styled.h1`
  font-family: 'PoppinsBold';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => (!fontSize ? '5.0' : fontSize)}rem;
  line-height: 7.5rem;
  color: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
`;

const H1 = ({ children, color = '', fontSize = '' }) => <H1Component color={color} fontSize={fontSize}>{children}</H1Component>;

export default H1;
