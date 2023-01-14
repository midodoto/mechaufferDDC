import React from 'react';
import styled from 'styled-components';

const BodyComponent = styled.p`
  font-family: 'QuicksandSemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => (!fontSize ? '1.6' : fontSize)}rem;
  line-height: 2rem;
  opacity: ${({ disable }) => disable ? '0.2': '1'};
  background: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Body1 = ({ children, color = '', fontSize = '', className = '', disable = false }) => <BodyComponent className={className} color={color} fontSize={fontSize} disable={disable}>{children}</BodyComponent>;

export default Body1;
