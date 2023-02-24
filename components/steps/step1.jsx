import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {OverwriteDevis} from "../../store/actions/devisAction.js";
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DevisActions } from '../../store';

const Step1Style = styled.div`
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

const Step1 = ({ display, setStep }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    
    const devisReducer = useSelector(({ devis }) => devis);
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[0] ? devisReducer.data[0].value : null});
    
    console.log('valuvaluevaluevaluevaluee', value)
    
    const cards = [{
        image: '/images/cards/house.png',
        title: 'Une maison',
    }, {
        image: '/images/cards/flat.png',
        title: 'Un appartement',
    }]
    return (
        <Step1Style display={display}>
            <H3 color={themeContext.colors.black}>Répondez au questionnaire afin de déterminer votre prise en charge</H3>
            <Body2 className={"subtitle"}>Vos travaux concernent :</Body2>
            <CardWrapper>
                <Cards cards={cards} setValue={setValue} value={value}/>
            </CardWrapper>
            <ButtonWrapper>
                <ButtonPrimary onClick={() => {OverwriteDevis({step: 1, data: {key: 'Type', value: value.title}}); setStep(2);}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!value.title}>Continue</ButtonPrimary>
            </ButtonWrapper>
        </Step1Style>
    );
};

export default Step1;
