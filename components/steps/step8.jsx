import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { DevisActions } from '../../store';

const Step8Style = styled.div`
  display: ${({ display }) => display ? 'flex' : 'none'};
  justify-content: center;
  gap: 1.6rem;
  flex-direction: column;
  .subtitle {
    margin-bottom: 7.5rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    h3 {
      margin-bottom: 2.5rem;
      margin-top: 1rem;
    }
    .subtitle {
      margin-bottom: 6.5rem;
    }
    gap: 0rem;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0;
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const CardWrapper = styled.div`
  margin-bottom: 10rem;
  min-height: 25rem;
`;

const Step8 = ({ display, setStep }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    
    const devisReducer = useSelector(({ devis }) => devis);
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[7] ? devisReducer.data[7].value : null});
    
    const cards = [{
        image: '/images/cards/house_owner.png',
        title: 'Propriétaire occupant',
    }, {
        image: '/images/cards/landlord.png',
        title: 'Propriétaire bailleur',
    }, {
        image: '/images/cards/lender.png',
        title: 'Propriétaire d’une résidence secondaire',
    }, {
        image: '/images/cards/tenant.png',
        title: 'Locataire',
    }];
    return (
        <Step8Style  display={display}>
            <H3 color={themeContext.colors.black}>Dans ce logement, je suis</H3>
            <Body2 className={"subtitle"}></Body2>
            <CardWrapper>
                <Cards cards={cards} setValue={setValue} value={value}/>
            </CardWrapper>
            <ButtonWrapper>
                <ButtonPrimary onClick={() => {OverwriteDevis({step: 8, data: {key: 'Type', value: value.title}}); setStep(9);}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!value.title}>Continue</ButtonPrimary>
            </ButtonWrapper>
        </Step8Style>
    );
};

export default Step8;
