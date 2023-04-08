import Link from "next/link.js";
import React, {useContext, useEffect, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {useAuth} from "../../context/AuthContext.js";
import ButtonPrimary from "../library/button/primary.jsx";
import BodyMed from "../library/typo/body-med.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import H2 from "../library/typo/h2.jsx";
import {Form, Formik, Field } from 'formik';
import * as zod from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Body from '../library/typo/body1.jsx';
import eye from '../../public/images/eye.png';
import Image from "next/image.js";
import youpi from '../../public/images/homepage_cards/youpi.png';
import {createUserDocument} from "../../config/firebase.js";
import { useSelector } from "react-redux";

const ParainStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Step1 = styled.div`
  width: 50%;
  margin: auto;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    //div {
    //  width: 50%;
    //}
    button {
      width: 100%;
      border-radius: 1.2rem;
    }
    .error {
      position: absolute;
      bottom: 1rem;
      color: red;
    }
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
`;

const Step2 = styled.div`
  width: 50%;
  margin: auto;
  .subtitle {
    margin-bottom: 4rem;
  }
  form {

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    //div {
    //  width: 50%;
    //}
    button {
      width: 100%;
      border-radius: 1.2rem;
    }
    .error {
      position: absolute;
      bottom: 1rem;
      color: red;
    }
  }
  .token {
    margin-top: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
`;

const Step3 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-bottom: 10rem !important;
  }
  button {
    padding: 1.8rem 6rem;
  }
  img {
    margin-bottom: 6rem;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
    border-radius: 12px;
    height: 5rem;
    border: unset;
    padding-left: 2rem;
    margin-bottom: 2.4rem;


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
  img {
    cursor: pointer;
    position: absolute;
    right: 2rem;
    top:1.6rem;
  }
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  min-height: 100vh;
  border-radius: 40px;
  padding: 7rem 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
  h3 {
    margin-bottom: 5rem;
    text-align: center;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Select = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
  margin-bottom: 2.4rem;
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
    padding: 1.8rem 4.5rem;
    @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
      padding: 1.8rem 1.5rem;
    }
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
`;

const InputWrapperCheckbox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  p {
    color: ${({ theme }) => theme.colors.blue40};
    display: flex;
    span {
      font-size: 1rem;
    }
  }

`;

const Error = styled.div`
  color: red;
`;


const Parain = () => {
    const [state, setState] = useState(0);
    const themeContext = useContext(ThemeContext);
    const [button, setButton] = useState(true);
    const [data, setData] = useState({});
    const [age, setAge] = useState(null);
    const { user, signup } = useAuth();
    const [mdp, setMdp] = useState(true);
    const [confirmMdp, setConfirmMdp] = useState(true);
    const [error, setError] = useState(null);
    const tokenReducer = useSelector(({token}) => token)
    
    const handleSignupParain = async (e) => {
        e.preventDefault()
        try {
            if (data.password === data.confirmPassword) {
                const { user } = await signup(data.email, data.password);
                const usr = await createUserDocument(user, {role: 'parrain', tokenPartenaire: data.tokenPartenaire, age: data.age, lien: data.lien, ville : data.ville, nom : data.nom, nomParrain: data.nomParrain, phone: data.phone, phoneParrain: data.phoneParrain});
                console.log("22222222");
                setState(2);
            }
            else
                throw new Error('password does not match');
        } catch (err) {
            console.log(err)
            setError("Cette Email est deja utilisé");
        }        
    }
    
    return (
        <ParainStyle>
            <Wrapper>
            {state === 0 ?
            <Step1>
               <H3>Inscrivez-vous en parrainant un proche</H3>
    
                <Formik
                    initialValues={{ age: '', lien: '', ville: '', nom: '', nomParrain: '', phone: '', phoneParrain: '', tokenPartenaire: tokenReducer.tokenPartenaire}}
                    enableReinitialize
                    initialErrors={{ error: '' }}
                    validationSchema={toFormikValidationSchema(zod.object({
                        age: zod.string({required_error: 'Champ obligatoire'}),
                        lien: zod.string({required_error: 'Champ obligatoire'}),
                        ville: zod.string({required_error: 'Champ obligatoire'}),
                        nom: zod.string({required_error: 'Champ obligatoire'}),
                        nomParrain: zod.string({required_error: 'Champ obligatoire'}),
                        phone: zod.string({required_error: 'Champ obligatoire'}),
                        phoneParrain: zod.string({required_error: 'Champ obligatoire'}),
                        tokenPartenaire: zod.string()
                        }))}
                    onSubmit={(values, actions) => {
                        setData(values);
                        console.log("VALUES", values);
                        setState(1);
                        actions.setSubmitting(false);
                    }}
                >
                    {({ errors, values, setFieldValue }) => {
                            if (Object.keys(errors).length === 0) {
                                setButton(false);
                            } else {
                                setButton(true);
                            }
                        return (
                            <Form style={{ width: '100%' }}>
                                <Field name="age">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <Select>
                                                <InputSelect selected={age === '- Moins de 18 ans'} onClick={() => {setAge("- Moins de 18 ans"); setFieldValue('age', '- Moins de 18 ans')}}>
                                                    <Body2>- Moins de 18 ans</Body2>
                                                </InputSelect>
                                                <InputSelect selected={age === '+ Plus de 18 ans'} onClick={() => { setAge("+ Plus de 18 ans"); setFieldValue('age', '+ Plus de 18 ans')}}>
                                                    <Body2>+ Plus de 18 ans</Body2>
                                                </InputSelect>
                                                <input type="hidden" {...field} />
                                            </Select>
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="lien">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="Lien avec la personne à parrainer (famille, ami...etc)" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="ville">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="Ville de la personne parrainée" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="nomParrain">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="Votre nom et votre prénom" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="nom">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="Nom et prénom de la personne à parrainer " {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="phoneParrain">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="Votre n° de téléphone" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <Field name="phone">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <InputWrapper>
                                            <input type="text" placeholder="N° de téléphone de la personne à parrainer" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </InputWrapper>
                                    )}
                                </Field>
                                <ButtonPrimary  height={"5rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={button} onClick={() => console.log("test")}>Envoyer</ButtonPrimary>

                            </Form>
                        )
                    }}
                </Formik>
            </Step1> : state === 1 ?
            <Step2>
                <H3>Dernière étape : créez votre compte Parrain MeChauffer</H3>
                <Body className={"subtitle"}>Vous pouvez retrouver tous les éléments concernant vos dossiers parrainés et suivre leurs avancements, ainsi que vos prochaines récompenses à débloquer.</Body>
                <div>
                    <form onSubmit={handleSignupParain}>
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
 
                <H3 className="token">Grâce auquel de nos partenaires avez-vous connu notre plate-forme ?</H3>
                <InputWrapper>
                  <input placeholder={"CODE PARRAINAGE (OPTIONEL)"} type="text" required name={"tokenPartenaire"} id={"tokenPartenaire"} value={data.tokenPartenaire} onChange={(e) =>
                      setData({
                          ...data,
                          tokenPartenaire: e.target.value,
                      })
                  }/>
                </InputWrapper>
                {console.log("ERRor", error)}
                {error && 
                  <Body2 color="red" fontSize="1.2">{error}</Body2>
                }
                <ButtonPrimary type="submit" width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Valider</ButtonPrimary>
                </form>
                </div>
            </Step2> : state === 2 &&
                    <Step3>
                        <H2>Félicitations ! votre compte a été créé avec succès</H2>
                        <Image src={youpi} alt={`youpi`} width={414} height={467}/>
                        <Link href="/login">
                                <ButtonPrimary  height={"5rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} onClick={() => setState(0)}>Accéder à mon Espace Parrain</ButtonPrimary>
                        </Link>
                    </Step3>}
            </Wrapper>
            
        </ParainStyle>
    );
};

export default Parain;
