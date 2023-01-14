import React, {useContext, useState} from 'react';
import {usePlacesWidget} from "react-google-autocomplete";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body1 from "../library/typo/body1.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { DevisActions } from '../../store';

const Step7Style = styled.div`
  display: ${({ display }) => display ? 'flex' : 'none'};
  justify-content: center;
  gap: 1.6rem;
  flex-direction: column;
  .subtitle {
    margin-bottom: 7.5rem;
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
`;

const InputWrapper = styled.div`
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 25rem;
  label {
    display: flex;
    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  input {
    width: 70%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
    border-radius: 12px;
    height: 5rem;
    border: unset;
    padding-left: 2rem;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus{
      outline: none;
    }
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;


const Step7 = ({ display, setStep }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    
    const devisReducer = useSelector(({ devis }) => devis);
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[6] ? devisReducer.data[6].value : null});
    
    console.log("VALLL", value);
    const { ref } = usePlacesWidget({
        apiKey: "AIzaSyBONNNhLGUwVS8DpbHQGFJaJCCoLj_6fQU",
        onPlaceSelected: (place) => setValue({title: place.formatted_address}),
        options: {types: ['address']}
    })
    
    return (
        <Step7Style  display={display}>
            <H3 color={themeContext.colors.black}>Adresse des travaux</H3>
            <Body2 className={"subtitle"}>Le montant des primes varie en fonction de la localisation du logement</Body2>
            <InputWrapper>
                <label htmlFor="surface"><Body1 color={themeContext.colors.black}>Adresse</Body1></label>
                <input ref={ref} type="text" name={"surface"} id={"surface"} onChange={(e) => {console.log("ICICICI", e); setValue({title: e.target.value})}} value={value.title}/>
            </InputWrapper>
            <ButtonWrapper>
                <ButtonPrimary onClick={() => {console.log("ref", ref); OverwriteDevis({step: 7, data: {key: 'Address', value: value.title}}); setStep(8);}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!value.title}>Continue</ButtonPrimary>
            </ButtonWrapper>
        </Step7Style>
    );
};

export default Step7;
