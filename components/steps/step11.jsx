import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import ButtonPrimary from "../library/button/primary.jsx";
import Body1 from "../library/typo/body1.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { DevisActions } from '../../store';

const Step11Style = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  label {
    display: flex;
    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  input {
    width: 100%;
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

const Select = styled.div`
  display: flex;
  gap: 3rem;
`;

const InputSelect = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ width }) => width ? '1' : '2.6'}rem;
  border: double 4px transparent;
  background-image: linear-gradient(white, white),
  ${({ theme, selected }) => selected ? theme.colors.primary : 'linear-gradient(white, white)'};
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  height: 5rem;
  p {
    padding: 1.8rem 6.5rem;
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
`;

const Step11 = ({ display, setStep }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    
    const devisReducer = useSelector(({ devis }) => devis);
    const [name, setName] = useState(devisReducer.data && devisReducer.data[10] ? devisReducer.data[10].value.name : null);
    const [firstname, setFirstname] = useState(devisReducer.data && devisReducer.data[10] ? devisReducer.data[10].value.firstname : null);
    const [phone, setPhone] = useState(devisReducer.data && devisReducer.data[10] ? devisReducer.data[10].value.phone : null);
    const [civilite, setCivilite] = useState(devisReducer.data && devisReducer.data[10] ? devisReducer.data[10].value.civilite : null);
    
    return (
        <Step11Style  display={display}>
            <H3 color={themeContext.colors.black}>Renseigner vos informations:</H3>
            <Body2 className={"subtitle"}>Un de nos experts vous contactera pour faire avancer le projet </Body2>
            <Select>
                <InputSelect selected={civilite === 'Monsieur'} onClick={() => setCivilite("Monsieur")}>
                    <Body2>Monsieur</Body2>
                </InputSelect>
                <InputSelect selected={civilite === 'Madame'} onClick={() => setCivilite("Madame")}>
                    <Body2>Madame</Body2>
                </InputSelect>
            </Select>
            <InputWrapper>
                <input type="text" placeholder={"Nom*"} name={"surface"} id={"surface"} onChange={(e) => setName(e.target.value)} value={name}/>
            </InputWrapper>
            <InputWrapper>
                <input type="text"  placeholder={"Prénom*"} name={"surface"} id={"surface"} onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
            </InputWrapper>
            <InputWrapper>
                <input type="text"  placeholder={"Numéro de téléphone*"} name={"surface"} id={"surface"} onChange={(e) => setPhone(e.target.value)} value={phone}/>
            </InputWrapper>
            <ButtonWrapper>
                <ButtonPrimary onClick={() => {OverwriteDevis({step: 11, data: {key: 'Information', value: {name, firstname, phone, civilite}}}); setStep(12);}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!(firstname && name && civilite && phone)}>Continue</ButtonPrimary>
            </ButtonWrapper>
        </Step11Style>
    );
};

export default Step11;
