import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import * as Yup from "yup";

import Body from '../library/typo/body2.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MyTextArea from '../library/input/text-area.jsx';
import MyTextInput from '../library/input/input-text.jsx';
import MyCheckbox from '../library/input/checkbox.jsx';
import MyRadio from '../library/input/radio.jsx';
import { Form, Formik } from 'formik';
import ButtonPrimary from "../library/button/primary.jsx";
import {updateUserCoordoneeDocument} from "../../config/firebase.js";
import { Alert, Button, IconButton, Snackbar } from '@mui/material';

const CoordonneeStyle = styled.div`
  .subtitle {
    opacity: 0.4;
  }
`;

const Content = styled.div`
  padding: 3.4rem 5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
`;

const CoordoneeForm = styled.div`
`;

const Title = styled.div`
margin-bottom: 4rem;
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
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    gap: 0rem;
  }
`;
const Account = styled.div`
  padding: 2rem 0 1rem 0;
`;

const MessageSent = styled.div`
margin-top: 2rem;
  background: linear-gradient(68.05deg, rgba(24, 188, 109, 0.2) 15.5%, rgba(106, 225, 76, 0.2) 121.74%);
  opacity: 0.9;
  border-radius: 12px;
  padding: 1.5rem 4rem;
  bottom: -7rem;
  right: 0;
`;

const Coordonnee = ({ user }) => {
  const themeContext = useContext(ThemeContext)
  const [messageSent, setMessageSent] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        {/* <CloseIcon fontSize="small" /> */}
      </IconButton>
    </React.Fragment>
  );
  console.log("USERRRR", user);

    return (
        <CoordonneeStyle>
            <Content>
              <Title>
              <Body>Renseignez vos coordonnées </Body>
                <br/>
                <BodyMed>Merci de vérifier attentivement l’exactitude de vos informations, vos récompenses seront livrées à l’adresse communiquée ci-dessous. </BodyMed>

              </Title>            
              <CoordoneeForm>
            <Formik
                initialValues={{
                  civilite: user?.additionalData?.civilite ? user?.additionalData?.civilite : '',
                    lastname: user?.additionalData?.lastname ? user?.additionalData?.lastname : '',
                    firstname: user?.additionalData?.firstname ? user?.additionalData?.firstname : '',
                    adresse: user?.additionalData?.adresse ? user?.additionalData?.adresse : '',
                    codePostal: user?.additionalData?.codePostal ? user?.additionalData?.codePostal : '',
                    ville: user?.additionalData?.ville ? user?.additionalData?.ville : '',
                    pays: user?.additionalData?.pays ? user?.additionalData?.pays : '',
                    nomCompte: user?.additionalData?.nomCompte ? user?.additionalData?.nomCompte : '',
                    iban: user?.additionalData?.iban ? user?.additionalData?.iban : ''
                }}
                validationSchema={Yup.object({
                    civilite: Yup.string()
                    .required("Champs obligatoire"),
                    firstname: Yup.string()
                    .required("Champs obligatoire"),
                    lastname: Yup.string()
                    .required("Champs obligatoire"),
                    adresse: Yup.string()
                    .required("Champs obligatoire"),
                    codePostal: Yup.string()
                    .required("Champs obligatoire"),
                    ville: Yup.string()
                    .required("Champs obligatoire"),
                    pays: Yup.string()
                    .required("Champs obligatoire"),
                })}
                onSubmit={(values, actions) => {
                  console.log("VALUEEEEE", values)
                  updateUserCoordoneeDocument(user, values)
                  handleClick();
                    // actions.setSubmitting(false);
                    // setMessageSent(true);
                }}
            >
                <Form>
                    <FormWrapper>
                    <MyRadio
                                label="Civilité"
                                fieldName="civilite"
                                name="civilite"
                                data={["Madame", "Monsieur"]}
                            />
                        <Flex>
                            <MyTextInput
                                label="Nom"
                                name="lastname"
                                type="text"
                                placeholder="Nom"
                            />
                            <MyTextInput
                                label="Prénom"
                                name="firstname"
                                type="text"
                                placeholder="Prénom"
                            />
                        </Flex>
                        <Flex>
                            <MyTextInput
                                label="Adresse"
                                name="adresse"
                                type="text"
                                placeholder="Adresse*"
                            />
                            <MyTextInput
                                label="Code postal"
                                name="codePostal"
                                type="text"
                                placeholder="Code postal*"
                            />
                        </Flex>
                        <Flex>
                            <MyTextInput
                                label="Ville"
                                name="ville"
                                type="text"
                                placeholder="Ville*"
                            />
                            <MyTextInput
                                label="Pays"
                                name="pays"
                                type="text"
                                placeholder="Pays*"
                            />
                        </Flex>
                        <Account>
                        <BodyMed>Renseignez votre RIB si vous souhaitez recevoir votre récompense sur votre compte bancaire.</BodyMed>

                        </Account>
                        <MyTextInput
                                label="Nom Compte"
                                name="nomCompte"
                                type="text"
                                placeholder="Nom Compte*"
                            />
                            <MyTextInput
                                label="Iban"
                                name="iban"
                                type="text"
                                placeholder="Iban*"
                            />
                        <ButtonPrimary  height={"5rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Sauvegarder</ButtonPrimary>
                        {messageSent &&
                            <MessageSent>
                                <BodyMed color={themeContext.colors.green}>Sauvegardé</BodyMed>
                            </MessageSent>
                        }
                    </FormWrapper>
                </Form>
            </Formik>
            </CoordoneeForm>
            </Content>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Sauvegardé
  </Alert>
</Snackbar>
        </CoordonneeStyle>
    );
};

export default Coordonnee;
