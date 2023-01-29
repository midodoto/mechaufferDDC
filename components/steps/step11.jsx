import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import {useAuth} from "../../context/AuthContext.js";
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

const InputWrapperCheckbox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  p {
    width: 80%;
    color: ${({ theme }) => theme.colors.blue40};
    display: flex;
    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
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


const InputWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position:relative;
  width: 100%;
  img {
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top:1.6rem;
  }
  label {
    display: flex;
    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  input {
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

const SignupForm = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  background: ${({ theme }) => theme.colors.blue2};
  //min-height: calc(100vh - 9rem);
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 0rem;
  }
`;

const Wrapper = styled.div`
  max-width: 50rem;
  margin: auto;
  h3 {
    margin-bottom: 1.6rem;
  }
`;

const Step1 = styled.div`
  display: ${({ display }) => display ? 'block' : 'none'};
`;

const Step2 = styled.div`
  display: ${({ display }) => display ? 'block' : 'none'};
`;


const Select = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
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
    @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
      padding: 1.8rem 3.5rem;
    }
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
`;

const Step11 = ({ display, setStep }) => {
    const dispatch = useDispatch();
    const { user, signup } = useAuth();
    const [mdp, setMdp] = useState(true);
    const [confirmMdp, setConfirmMdp] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const themeContext = useContext(ThemeContext)
    const [displayStep, setDisplayStep] = useState(true);
    const [name, setName] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [civilite, setCivilite] = useState(null);
    
    return (
        <Step11Style  display={display}>
            <SignupForm>
                <Wrapper>
                    <Step1 display={displayStep === true}>
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
                            <ButtonPrimary onClick={() => setDisplayStep(false)} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!(firstname && name && civilite && phone)}>Continue</ButtonPrimary>
                        </ButtonWrapper>
                    </Step1>
                    <Step2 display={displayStep === false}>
                        <H3 color={themeContext.colors.black}>Dernière étape : créez votre compte MeChauffer</H3>
                        <Body2 className={"subtitle"}>Vous pouvez retrouver tous les éléments de votre dossier et suivre chaque étape de votre projet</Body2>
                    </Step2>
        
                </Wrapper>
            </SignupForm>

        </Step11Style>
    );
};

export default Step11;
