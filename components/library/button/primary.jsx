import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  background: ${({ bgColor, theme }) => (!bgColor ? theme.colors.blue1 : bgColor)};
  p {
    color: ${({ textColor, theme }) => (!textColor ? theme.colors.white : textColor)};
  }
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 3rem;
  width: ${({ width }) => width ? width : 'auto'};
  height: ${({ height }) => height ? height : 'auto'};
  cursor: ${({ disabled }) => disabled ? 'unset' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? '0.2' : '1'};
  filter: drop-shadow(1px 5px 5px rgba(0, 0, 0, 0.07));
  &:hover {
    background: ${({ hoverBgColor, theme }) => (!hoverBgColor ? theme.colors.blue1 : hoverBgColor)};
    p {
      color: ${({hoverColor, theme}) => (!hoverColor ? theme.colors.typo : hoverColor)};
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
`;

const Text = styled.p``;

/**
 * Primary UI component for user interaction
 */
export const ButtonPrimary = ({ type = 'button', width = '', height = '', textColor = '', bgColor= '', hoverColor = '', hoverBgColor = '', disabled = false, children, ...props }) => {
    return (
        <ButtonComponent type="type" width={width} height={height} textColor={textColor} bgColor={bgColor} hoverColor={hoverColor} hoverBgColor={hoverBgColor} disabled={disabled} {...props}>
            <Text>
                {children}
            </Text>
        </ButtonComponent>
    );
};

export default ButtonPrimary;
