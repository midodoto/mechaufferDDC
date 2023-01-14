import React from 'react';
import styled from 'styled-components';

const BodyComponent = styled.p`
  font-family: 'QuicksandSemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => (!fontSize ? '1.6' : fontSize)}rem;
  line-height: 2rem;
  color: ${({ color, theme }) => (!color ? theme.colors.typo : color)};
  opacity: ${({ disable }) => disable ? '0.2': '1'};
`;

const BodyMed = ({ children, color = '', fontSize = '', disable = false }) => <BodyComponent color={color} fontSize={fontSize} disable={disable}>{children}</BodyComponent>;

export default BodyMed;
