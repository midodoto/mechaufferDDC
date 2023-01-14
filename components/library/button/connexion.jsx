import Image from "next/image.js";
import React from 'react';
import styled from 'styled-components';
import profileWhite from '/public/images/profile-white.svg';
import profile from '/public/images/profile.svg';
import phone from "../../../public/images/phone.svg";

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: ${({ bgColor, theme }) => (!bgColor ? theme.colors.white : bgColor)};
  p {
    color: ${({ textColor, theme }) => (!textColor ? theme.colors.black : textColor)};
  }
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 1rem 1.3rem;
  border-radius: 3rem;
  cursor: pointer;
  filter: drop-shadow(1px 5px 5px rgba(0, 0, 0, 0.07));
  .profile {
    width: 2rem;
    height: 2rem;
    background: url(${profile.src});
    background-repeat: no-repeat;
    background-size: contain;
  }
  &:hover {
    .profile {
      background: url(${profileWhite.src});
      background-repeat: no-repeat;
      background-size: contain;
    }
    background: ${({ hoverBgColor, theme }) => (!hoverBgColor ? theme.colors.primary : hoverBgColor)};
    border: unset;
    p {
      color: ${({hoverColor, theme}) => (!hoverColor ? theme.colors.white : hoverColor)};
    }
  }
`;

const Text = styled.p``;

/**
 * Primary UI component for user interaction
 */
export const ButtonConnexion = ({ textColor = '', bgColor= '', hoverColor = '', hoverBgColor = '', children, ...props }) => {
    return (
        <ButtonComponent type="button" textColor={textColor} bgColor={bgColor} hoverColor={hoverColor} hoverBgColor={hoverBgColor} {...props}>
            <div className="profile">
            </div>
            <Text>
                {children}
            </Text>
        </ButtonComponent>
    );
};

export default ButtonConnexion;
