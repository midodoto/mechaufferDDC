import Link from "next/link.js";
import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ThemeContext} from "styled-components";
import {useAuth} from "../../context/AuthContext.js";
import {InitialState} from "../../store/actions/devisAction.js";
import ButtonPrimary from "../library/button/primary.jsx";
import styled from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body1.jsx';
import {DevisActions} from '../../store';

const DashboardUserStyle = styled.div`
  min-height: calc(100vh - 9rem);
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  background: ${({ theme }) => theme.colors.blue2};
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Title = styled.div`
  text-align: center;
  padding-bottom: 6rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const DashboardUser = () => {
    
    const { user, logout } = useAuth()
    const themeContext = useContext(ThemeContext)
    const [stateMenu, setStateMenu] = useState(0);
    const dispatch = useDispatch();
    const { InitialState } = bindActionCreators(DevisActions, dispatch);
    
    const handleLogout = async (e) => {
        e.preventDefault()
        
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <DashboardUserStyle>
            <Title>
                <H3>Vous n’avez aucune demande de prime MeChauffer en cours</H3>
                <Body>Cliquuez sur le bouton “Ajouter une demande” afin de bénéficier de votre première prime</Body>
                <ButtonWrapper>
                    <Link href={'/devis'}>
                        <ButtonPrimary onClick={() => {InitialState();}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Ajouter une demande</ButtonPrimary>
                    </Link>
                </ButtonWrapper>
                </Title>
            {/*<div>Heyyyyy, {user.email}</div>*/}
            <br />
            <br />
            <ButtonPrimary type="submit" width={"20rem"} bgColor={themeContext.colors.logout} hoverBgColor={themeContext.colors.logoutHover} hoverColor={themeContext.colors.white} disabled={false} onClick={(e) => handleLogout(e)}>Logout</ButtonPrimary>
        </DashboardUserStyle>
    );
};

export default DashboardUser;
