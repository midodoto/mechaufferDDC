import Link from "next/link.js";
import { useRouter } from 'next/router'
import React, { useState, useContext } from 'react'
import styled, {ThemeContext} from "styled-components";
import ButtonPrimary from "../components/library/button/primary.jsx";
import Body1 from "../components/library/typo/body1.jsx";
import Body2 from "../components/library/typo/body1.jsx";
import H3 from "../components/library/typo/h3.jsx";
import { useAuth } from '../context/AuthContext'
import {getUserById} from "../config/firebase.js";

const LoginStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  background: ${({ theme }) => theme.colors.blue2};
  min-height: calc(100vh - 9rem);
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: 50rem;
  margin: auto;
  h3 {
    margin-bottom: 1.6rem;
  }
  .subtitle {
    margin-bottom: 12rem;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 2rem;
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

const ForgetMdp = styled.div`
  margin-top: 1.6rem;
  text-align: right;
`;

const Signup = styled.div`
  margin-top: 10rem;
  text-align: center;
`;

const Login = () => {
    const themeContext = useContext(ThemeContext)
    const router = useRouter()
    const { user, login } = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleLogin = async (e) => {
        e.preventDefault()
        
        try {
            await login(data.email, data.password);            
            if (user.additionalData.role === "user")
                router.push('/dashboard-user');
            else if (user.additionalData.role === "parrain")
                router.push('/dashboard');
            else
                router.push('/dashboard-partenaire');
    
        } catch (err) {
        }
    }
    
    return (
        <LoginStyle>
            <Wrapper>
            
            <H3 color={themeContext.colors.black}>Bienvenue !</H3>
            <Body2 color={themeContext.colors.black} className={"subtitle"}>Merci de renseigner votre email pour vous connecter</Body2>
            <form onSubmit={handleLogin}>
                <InputWrapper>
                    <label htmlFor="email"><Body1 color={themeContext.colors.black}>Email address</Body1></label>
                    <input type="email" required name={"email"} id={"email"} value={data.email} onChange={(e) =>
                        setData({
                            ...data,
                            email: e.target.value,
                        })
                    }/>
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="password"><Body1 color={themeContext.colors.black}>Password</Body1></label>
                    <input type="password" required name={"password"} id={"password"} value={data.password} onChange={(e) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                    }/>
                </InputWrapper>
                <ButtonPrimary type="submit" width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Login</ButtonPrimary>
            </form>
                <ForgetMdp>
                    <Link href={"forgot-password"}>
                        <Body1 fontSize={1.4} color={themeContext.colors.black}>Mot de passe oublier ?</Body1>
                    </Link>
                </ForgetMdp>
                <Signup>
                    <Body1 fontSize={1.4} color={themeContext.colors.black}>Vous n’avez pas encore de compte ? <Link href={"/signup"}>Cliquez-ici</Link> pour en créer un.</Body1>
                </Signup>
            </Wrapper>

        </LoginStyle>
    )
}

export default Login
