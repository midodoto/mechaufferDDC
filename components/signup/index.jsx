import Image from "next/image.js";
import React, { useState, useContext } from 'react'
import styled, {ThemeContext} from "styled-components";
import ButtonPrimary from "../library/button/primary.jsx";
import { useAuth } from '../../context/AuthContext'
import BodyMed from "../library/typo/body-med.jsx";
import eye from '../../public/images/eye.png';

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


const Signup = ({ handleSignupFct, dataSignup }) => {
    const { user, signup } = useAuth();
    const [mdp, setMdp] = useState(true);
    const [confirmMdp, setConfirmMdp] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })
    const themeContext = useContext(ThemeContext)
    
    
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            if (data.password === data.confirmPassword) {
                await signup(data.email, data.password)
                handleSignupFct();
            }
            else
                throw new Error('password does not match');
        } catch (err) {
            console.log(err)
        }
        
        console.log(data)
    }
    
    return (
        <div>
            <form onSubmit={handleSignup}>
                <InputWrapper>
                    <input placeholder={"Email"} type="email" required name={"email"} id={"email"} value={data.email} onChange={(e) =>
                        setData({
                            ...data,
                            email: e.target.value,
                        })
                    }/>
                </InputWrapper>
                <InputWrapper>
                    <input placeholder={"Mot de passe"} type={mdp ? "password" : "text"} required name={"password"} id={"password"} value={data.password} onChange={(e) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                    }/>
                    <Image onClick={() => setMdp(!mdp)} src={eye} alt={`eye`} width={19} height={15}/>
                </InputWrapper>
                <InputWrapper>
                    <input placeholder={"Confirmation du mot de passe"} type={confirmMdp ? "password" : "text"} required name={"confirm-password"} id={"confirm-password"} value={data.confirmPassword} onChange={(e) =>
                        setData({
                            ...data,
                            confirmPassword: e.target.value,
                        })
                    }/>
                    <Image onClick={() => setConfirmMdp(!confirmMdp)} src={eye} alt={`eye`} width={19} height={15}/>
                </InputWrapper>
                <InputWrapperCheckbox>
                    <input type="checkbox" id="callback" name="callback" value="true" />
                    <label htmlFor="callback"><BodyMed >Vous acceptez d’être rappelé gratuitement par un de nos experts pour vous accompagner tout au long de votre projet</BodyMed></label>
                </InputWrapperCheckbox>
                <ButtonPrimary type="submit" width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Valider</ButtonPrimary>
            </form>
        </div>
    )
}

export default Signup
