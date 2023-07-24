import Image from "next/image.js";
import React, {useContext, useState, useEffect} from 'react';
import {ThemeContext} from "styled-components";
import {useAuth} from "../../context/AuthContext.js";
import ButtonPrimary from "../library/button/primary.jsx";
import H4 from "../library/typo/h4.jsx";
import styled from 'styled-components';
import img1 from '/public/images/dashboard/1.png';
import img2 from '/public/images/dashboard/2.png';
import img3 from '/public/images/dashboard/3.png';
import img4 from '/public/images/dashboard/4.png';
import TableauDeBord from './tableau-de-bord.jsx';
import Coordonnee from './coordonnee.jsx';
import Gestion from './gestion.jsx';
import Demandes from './demandes.jsx';
import Recompenses from './recompenses.jsx';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body1.jsx';
import { getDevisByUserId } from "../../config/firebase.js";

const DashboardStyle = styled.div`
  min-height: calc(100vh - 9rem);
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  background: ${({ theme }) => theme.colors.blue2};
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Left = styled.div`
    flex: 2;
`;

const Right = styled.div`
    flex: 6;
`;

const Wrapper = styled.div`
    display: flex;
  gap: 6rem;
`;

const CardLeft = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 8.9rem 1.8rem;
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardLeftWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  cursor: pointer;
  padding: 2rem;
  ${({ theme, selected }) => selected && `
background: #76C075;
opacity: 0.4;
border-radius: 20px;
    `}
  
  h4 {
    ${({ theme, selected }) => selected && `

    `}
  }
`;

const Title = styled.div`
  text-align: center;
  p {
    opacity: 0.4;
    padding-top: 1.6rem;

  }
  padding-bottom: 6rem;
`;

const Dashboard = () => {
    
    const { user, logout } = useAuth()
    const themeContext = useContext(ThemeContext)
    const [stateMenu, setStateMenu] = useState(0);
    
    const handleLogout = async (e) => {
        e.preventDefault()
        
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }

    const [demandes, setDemandes] = useState(null);
    const getDevisByUserIdFct = async () => {
        console.log("user", user);
        const d = await getDevisByUserId(user.uid);
      console.log("ddddddd", d)
      setDemandes(d)
    }
  
    useEffect(() => {
      getDevisByUserIdFct()
    }, []);
    
    return (
        <DashboardStyle>
            <Title>
                {stateMenu === 0 &&
                    <>
                        <H3>Mon tableau de bord</H3>
                        <Body>Merci de vérifier attentivement l’exactitude de vos informations, vos récompenses seront livrées à l’adresse communiquée ci-dessous.</Body>
                    </>
                }
                {stateMenu === 1 &&
                    <>
                        <H3>Récapitulatif de vos demandes</H3>
                        <Body>Accélérez le traitement de votre demande en renseignant les informationsavec votre parrainé</Body>
                    </>
                }
                {stateMenu === 2 &&
                    <>
                        <H3>Mes récompenses</H3>
                        <Body>Merci de vérifier attentivement l’exactitude de vos informations, vos récompenses seront livrées à l’adresse communiquée ci-dessous. </Body>
                    </>
                }
                {stateMenu === 3 &&
                    <>
                        <H3>Mes coordonnées</H3>
                        <Body>Accélérez le traitement de votre demande en renseignant les informations avec votre parrainé</Body>
                    </>
                }
                {stateMenu === 4 &&
                    <>
                        <H3>Gestion de compte & sécurité</H3>
                        <Body>Accélérez le traitement de votre demande en renseignant les informationsavec votre parrainé</Body>
                    </>
                }
            </Title>
            <Wrapper>
                <Left>
                    <CardLeft>
                        <CardLeftWrapper onClick={() => setStateMenu(0)} selected={stateMenu === 0}>
                            <Image src={img1} alt={`logo`} width={24} height={24}/>
                            <H4 fontSize={1.8}>Tableau de bord</H4>
                        </CardLeftWrapper>
                        <CardLeftWrapper onClick={() => setStateMenu(1)} selected={stateMenu === 1}>
                            <Image src={img1} alt={`logo`} width={24} height={24}/>
                            <H4 fontSize={1.8}>Mes demandes</H4>
                        </CardLeftWrapper>
                        <CardLeftWrapper onClick={() => setStateMenu(2)} selected={stateMenu === 2}>
                            <Image src={img2} alt={`logo`} width={24} height={24}/>
                            <H4 fontSize={1.8}>Mes récompenses</H4>
                        </CardLeftWrapper>
                        <CardLeftWrapper onClick={() => setStateMenu(3)} selected={stateMenu === 3}>
                            <Image src={img3} alt={`logo`} width={24} height={24}/>
                            <H4 fontSize={1.8}>Gestion de compte & sécurite</H4>
                        </CardLeftWrapper>
                        <CardLeftWrapper onClick={() => setStateMenu(4)} selected={stateMenu === 4}>
                            <Image src={img4} alt={`logo`} width={24} height={24}/>
                            <H4 fontSize={1.8}>Mes coordonnées</H4>
                        </CardLeftWrapper>
                    </CardLeft>
                </Left>
                <Right>
                    {stateMenu === 0 &&
                        <TableauDeBord user={user} demandes={demandes} />
                    }
                    {stateMenu === 1 &&
                        <Demandes demandes={demandes}/>
                    }
                    {stateMenu === 2 &&
                        <Recompenses demandes={demandes}/>
                    }
                    {stateMenu === 3 &&
                        <Gestion />
                    }
                    {stateMenu === 4 &&
                        <Coordonnee />
                    }
                </Right>
            </Wrapper>
            {/*<div>Heyyyyy, {user.email}</div>*/}
            <br />
            <br />
            <ButtonPrimary type="submit" width={"20rem"} bgColor={themeContext.colors.logout} hoverBgColor={themeContext.colors.logoutHover} hoverColor={themeContext.colors.white} disabled={false} onClick={(e) => handleLogout(e)}>Logout</ButtonPrimary>
        </DashboardStyle>
    );
};

export default Dashboard;
