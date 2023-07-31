import Image from 'next/image.js';
import { useRouter } from 'next/router.js';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { ThemeContext } from 'styled-components';
import { createUserDocument } from '../../config/firebase.js';
import { useAuth } from '../../context/AuthContext.js';
import eye from '../../public/images/eye.png';
import ButtonPrimary from '../library/button/primary.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import Body1 from '../library/typo/body1.jsx';
import Body2 from '../library/typo/body2.jsx';
import H3 from '../library/typo/h3.jsx';
import { DevisActions } from '../../store';

const Step11Style = styled.div`
  display: ${({ display }) => (display ? 'flex' : 'none')};
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
  position: relative;
  width: 100%;
  img {
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top: 1.6rem;
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
    &:focus {
      outline: none;
    }
  }
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const SignupForm = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
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
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const Step2 = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
`;

const Step3 = styled.div`
  display: ${({ display }) => (display ? 'block' : 'none')};
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
  gap: ${({ width }) => (width ? '1' : '2.6')}rem;
  border: double 4px transparent;
  background-image: linear-gradient(white, white),
    ${({ theme, selected }) => (selected ? theme.colors.primary : 'linear-gradient(white, white)')};
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
    background-image: linear-gradient(white, white), ${({ theme }) => theme.colors.primary};
  }
`;

const Error = styled.div`
  color: red;
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
  });
  const themeContext = useContext(ThemeContext);
  const [displayStep, setDisplayStep] = useState(1);
  const [name, setName] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const [phone, setPhone] = useState(null);
  const [civilite, setCivilite] = useState(null);

  const [token, setToken] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const devisReducer = useSelector(({ devis }) => devis);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (data.password === data.confirmPassword) {
        setLoading(true);
        const { user } = await signup(data.email, data.password);
        await createUserDocument(user, {
          role: 'user',
          devis: devisReducer.data,
          parrainNumber: token,
          lastname: name,
          firstname: firstname,
          phone: phone,
          civilite: civilite,
        });
        setLoading(false);
        router.push('/login');
      } else setError('Les mots de passes ne sont pas similaire');
    } catch (err) {
      setError('Cet email est deja utilisé');
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Step11Style display={display}>
      <SignupForm>
        <Wrapper>
          <Step1 display={displayStep === 1}>
            <H3 color={themeContext.colors.black}>Renseigner vos informations:</H3>
            <Body2 className={'subtitle'}>Un de nos experts vous contactera pour faire avancer le projet </Body2>
            <Select>
              <InputSelect selected={civilite === 'Monsieur'} onClick={() => setCivilite('Monsieur')}>
                <Body2>Monsieur</Body2>
              </InputSelect>
              <InputSelect selected={civilite === 'Madame'} onClick={() => setCivilite('Madame')}>
                <Body2>Madame</Body2>
              </InputSelect>
            </Select>
            <InputWrapper>
              <input
                type="text"
                placeholder={'Nom*'}
                name={'surface'}
                id={'surface'}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                placeholder={'Prénom*'}
                name={'surface'}
                id={'surface'}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                placeholder={'Numéro de téléphone*'}
                name={'surface'}
                id={'surface'}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </InputWrapper>
            <ButtonWrapper>
              <ButtonPrimary
                onClick={() => setDisplayStep(2)}
                width={'26rem'}
                bgColor={themeContext.colors.primary}
                hoverBgColor={themeContext.colors.primary}
                hoverColor={themeContext.colors.white}
                disabled={!(firstname && name && civilite && phone)}
              >
                Continue
              </ButtonPrimary>
            </ButtonWrapper>
          </Step1>
          <Step2 display={displayStep === 2}>
            <H3 color={themeContext.colors.black}>Avez-vous été parrainé par un proche ?</H3>
            <Body2 className={'subtitle'}>
              Si oui, merci de renseigner son nom ainsi que son prénom. Dans le cas contraire, cliquez sur “Continuer”.
            </Body2>
            <InputWrapper>
              <input
                type="text"
                placeholder={'Token'}
                name={'token'}
                id={'token'}
                onChange={(e) => setToken(e.target.value)}
                value={token}
              />
            </InputWrapper>
            <ButtonWrapper>
              <ButtonPrimary
                onClick={() => setDisplayStep(3)}
                width={'26rem'}
                bgColor={themeContext.colors.primary}
                hoverBgColor={themeContext.colors.primary}
                hoverColor={themeContext.colors.white}
              >
                Continue
              </ButtonPrimary>
            </ButtonWrapper>
          </Step2>
          <Step3 display={displayStep === 3}>
            <H3 color={themeContext.colors.black}>Renseigner vos informations:</H3>
            <Body2 className={'subtitle'}>Un de nos experts vous contactera pour faire avancer le projet </Body2>
            <form onSubmit={handleSignup}>
              <InputWrapper>
                <input
                  placeholder={'Email'}
                  type="email"
                  required
                  name={'email'}
                  id={'email'}
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </InputWrapper>
              <InputWrapper>
                <input
                  placeholder={'Mot de passe'}
                  type={mdp ? 'password' : 'text'}
                  required
                  name={'password'}
                  id={'password'}
                  value={data.password}
                  onChange={(e) =>
                    setData({
                      ...data,
                      password: e.target.value,
                    })
                  }
                />
                <Image onClick={() => setMdp(!mdp)} src={eye} alt={`eye`} width={19} height={15} />
              </InputWrapper>
              <InputWrapper>
                <input
                  placeholder={'Confirmation du mot de passe'}
                  type={confirmMdp ? 'password' : 'text'}
                  required
                  name={'confirm-password'}
                  id={'confirm-password'}
                  value={data.confirmPassword}
                  onChange={(e) =>
                    setData({
                      ...data,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <Image onClick={() => setConfirmMdp(!confirmMdp)} src={eye} alt={`eye`} width={19} height={15} />
              </InputWrapper>
              <InputWrapperCheckbox>
                <input type="checkbox" id="callback" name="callback" value="true" />
                <label htmlFor="callback">
                  <BodyMed>
                    Vous acceptez d’être rappelé gratuitement par un de nos experts pour vous accompagner tout au long
                    de votre projet
                  </BodyMed>
                </label>
              </InputWrapperCheckbox>
              {error && <Error>{error}</Error>}
              <ButtonPrimary
                loading={loading}
                type="submit"
                width={'26rem'}
                bgColor={themeContext.colors.primary}
                hoverBgColor={themeContext.colors.primary}
                hoverColor={themeContext.colors.white}
                disabled={!(data.email && data.password && data.confirmPassword)}
              >
                Valider
              </ButtonPrimary>
            </form>
          </Step3>
        </Wrapper>
      </SignupForm>
    </Step11Style>
  );
};

export default Step11;
