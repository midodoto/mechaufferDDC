import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import ButtonPrimary from "../library/button/primary.jsx";
import Body1 from "../library/typo/body1.jsx";
import Body2 from "../library/typo/body1.jsx";
import H3 from "../library/typo/h3.jsx";

const ForgotPassowrdStyle = styled.div`
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

const Step1 = styled.div`
  display: ${({ display }) => display ? 'block' : 'none'};
`;

const Step2 = styled.div`
  display: ${({ display }) => display ? 'block' : 'none'};
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

const ForgotPassowrd = () => {
    const themeContext = useContext(ThemeContext)
    const [data, setData] = useState({
        email: '',
    });
    const [display, setDisplay] = useState(true);
    
    const handleForgotPassword = async (e) => {
        e.preventDefault()
        
        try {
            // await login(data.email, data.password)
            setDisplay(false);
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <ForgotPassowrdStyle>
            <Wrapper>
                <Step1 display={display === true}>
                    <H3 color={themeContext.colors.black}>Mot de passe oublié ?</H3>
                    <Body2 color={themeContext.colors.black} className={"subtitle"}>Renseignez l’adresse email de votre compte Mechauffer. Vous recevrez un email pour réinitialiser votre mot de passe</Body2>
                    <form onSubmit={handleForgotPassword}>
                        <InputWrapper>
                            <input type="email" placeholder={"Email"} required name={"email"} id={"email"} value={data.email} onChange={(e) =>
                                setData({
                                    ...data,
                                    email: e.target.value,
                                })
                            }/>
                        </InputWrapper>
                        <ButtonPrimary type="submit" width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!(data.email.length > 5)}>Réinitialiser le mot de passe</ButtonPrimary>
                    </form>
                </Step1>
                <Step2 display={display === false}>
                    <H3 color={themeContext.colors.black}>Email envoyé</H3>
                    <Body2 color={themeContext.colors.black} className={"subtitle"}>Nous venons de vous envoyer un email afin de réinitialiser votre mot de passe<br /><br />
                        Si vous ne l’avez pas reçu, pensez à vérifier votre dossier “courrier indésirable”</Body2>
                </Step2>

            </Wrapper>
        </ForgotPassowrdStyle>
    );
};

export default ForgotPassowrd;
