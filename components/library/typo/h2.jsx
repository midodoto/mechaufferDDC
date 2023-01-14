import React from 'react';
import styled from 'styled-components';

const H2Component = styled.h2`
  font-family: 'PoppinsBold';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ fontSize }) => (!fontSize ? '3.5' : fontSize)}rem;
  line-height: 5.2rem;
  color: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
`;

const H2 = ({ children, color = '', fontSize = '' }) => <H2Component color={color} fontSize={fontSize}>{children}</H2Component>;

export default H2;
