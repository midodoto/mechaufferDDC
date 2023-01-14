import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Formik, Form, Field} from 'formik';
import * as Yup from "yup";
import ButtonPrimary from "../library/button/primary.jsx";
import MyTextArea from '../library/input/text-area.jsx';
import MyTextInput from '../library/input/input-text.jsx';
import MyCheckbox from '../library/input/checkbox.jsx';
import H2 from "../library/typo/h2.jsx";
import BodyMed from '../library/typo/body-med.jsx';

const ContactUsStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  h2 {
    margin-bottom: 5rem;
    text-align: center;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  position: relative;
  button {
    border-radius: 1.2rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

const MessageSent = styled.div`
  background: linear-gradient(68.05deg, rgba(24, 188, 109, 0.2) 15.5%, rgba(106, 225, 76, 0.2) 121.74%);
  opacity: 0.9;
  border-radius: 12px;
  padding: 1.5rem 4rem;
  position: absolute;
  bottom: -7rem;
  right: 0;
`;

const ContactUs = () => {
    const themeContext = useContext(ThemeContext)
    const [messageSent, setMessageSent] = useState(true);
    return (
        <ContactUsStyle>
            <H2>Nous contacter</H2>
            <Formik
                initialValues={{
                    lastname: '',
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    contact: false,
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                    .required("Champs obligatoire"),
                    lastname: Yup.string()
                    .required("Champs obligatoire"),
                    phone: Yup.string()
                    .required("Champs obligatoire"),
                    message: Yup.string()
                    .required("Champs obligatoire"),
                    email: Yup.string()
                    .email("Invalid email addresss`")
                    .required("Champs obligatoire"),
                    acceptedTerms: Yup.boolean()
                })}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(false);
                    setMessageSent(true);
                }}
            >
                <Form>
                    <FormWrapper>
                        <Flex>
                            <MyTextInput
                                label="Nom"
                                name="lastname"
                                type="text"
                                placeholder="Nom"
                            />
                            <MyTextInput
                                label="Prénom"
                                name="name"
                                type="text"
                                placeholder="Prénom"
                            />
                        </Flex>
                        <Flex>
                            <MyTextInput
                                label="Email Address"
                                name="email"
                                type="email"
                                placeholder="jane@formik.com"
                            />
                            <MyTextInput
                                label="Phone"
                                name="phone"
                                type="phone"
                                placeholder="Phone"
                            />
                        </Flex>
                        <MyTextArea
                            label="Message"
                            name="message"
                            rows="6"
                            placeholder="Message"
                        />
                        <MyCheckbox name="contact">
                            J’autorise Mechauffer.fr à prendre contact avec moi
                        </MyCheckbox>
                        <ButtonPrimary  height={"5rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Envoyer</ButtonPrimary>
                        {messageSent &&
                            <MessageSent>
                                <BodyMed color={themeContext.colors.green}>Merci! Votre demande a été envoyée!</BodyMed>
                            </MessageSent>
                        }
                    </FormWrapper>
                </Form>
            </Formik>
        </ContactUsStyle>
    );
};

export default ContactUs;
