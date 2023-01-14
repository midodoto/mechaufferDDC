import Image from "next/image.js";
import Link from "next/link.js";
import {useRouter} from "next/router.js";
import React, {useContext} from 'react';
import styled from 'styled-components';
import logo from '/public/images/logo.svg';
import Body1 from '../library/typo/body1.jsx';
import ButtonPrimary from '../library/button/primary.jsx';
import ButtonConnexion from '../library/button/connexion.jsx';
import { ThemeContext } from 'styled-components'

const HeaderStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 0rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 4;
  position: relative;

  img {
    cursor: pointer;
  }
`;

const ListMenu = styled.div`
  display: flex;
  gap: 3rem;

  a {
    cursor: pointer;
  }
  &:hover {
    p {color: red !important;}
  }
`;

const LinkWrapper = styled.div`
  p {
    &:hover {
      color: ${({ theme }) => theme.colors.primary} !important;
      opacity: 1 !important;
    }
  }
`;

const Header = () => {
    const themeContext = useContext(ThemeContext)
    const router = useRouter();
    return (
        <HeaderStyle>
            <Link href={'/'}>
                <Image src={logo} alt="logo" width={100} height={24}/>
            </Link>
            <ListMenu>
                <LinkWrapper>
                    <Link href={'/offres'}>
                        <Body1 disable={router.pathname !== '/'} color={router.pathname === '/' ? themeContext.colors.primary : themeContext.colors.black}>Nos offres</Body1>
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href={'/111'}>
                        <Body1 disable={router.pathname !== '/111'} color={router.pathname === '/111' ? themeContext.colors.primary : themeContext.colors.black}>Aide financière</Body1>
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href={'/222'}>
                        <Body1 disable={router.pathname !== '/222'} color={router.pathname === '/222' ? themeContext.colors.primary : themeContext.colors.black}>Conseil travaux</Body1>
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href={'/333'}>
                        <Body1 disable={router.pathname !== '/333'} color={router.pathname === '/333' ? themeContext.colors.primary : themeContext.colors.black}>Qui sommes-nous</Body1>
                    </Link>
                </LinkWrapper>
            </ListMenu>
            <Link href={'/login'}>
                <ButtonConnexion>Connexion</ButtonConnexion>
            </Link>
            <Link href={'/devis'}>
                <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>DEMANDER UN DEVIS</ButtonPrimary>
            </Link>
        </HeaderStyle>
    );
};

export default Header;
