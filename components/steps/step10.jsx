import React, {useContext, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { DevisActions } from '../../store';
import { useAuth } from '../../context/AuthContext'
import {updateUserDocument} from "../../config/firebase.js";
import {useRouter} from "next/router.js";

const Step10Style = styled.div`
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

const CardWrapper = styled.div`
  margin-bottom: 10rem;
  min-height: 25rem;
`;

const Step10 = ({ display, setStep }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    const { user } = useAuth()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const { InitialState } = bindActionCreators(DevisActions, dispatch);
  
    const devisReducer = useSelector(({ devis }) => devis);
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[9] ? devisReducer.data[9].value : null});
    
    const addNewDevis = async () => {
      try {
        setLoading(true);
        const newDevis = { ...devisReducer };
        if (user && user.additionalData && user.additionalData.devis) {
          user.additionalData.devis[4].value.map((element) => {
            let found = false;
            console.log("ELEMENT", element);

            newDevis.data[4].value.map((devi, index) => {
              if (devi.name === element.name) {
                found = true;
                if (Array.isArray(newDevis.data[4].value[index].value)) {
                  console.log("111111111", [newDevis.data[4].value[index].value]);

                  newDevis.data[4].value[index].value = [...newDevis.data[4].value[index].value, ...element.value];
                } else {
                  console.log("22222222", element);

                  newDevis.data[4].value[index].value = [devi.value, element.value]
                }
              }
            });
            if (found === false) {
              console.log("RRRRR", element);

              newDevis.data[4].value.push(element);
            }
          });
        } 
        await updateUserDocument(user, newDevis.data);
        setLoading(false);
        InitialState();
        if (user.additionalData.role === "user")
          router.push('/dashboard-user');
      } catch(e) {
        setLoading(false);
      }
    }

    const cards = [{
        image: '/images/cards/money_1.png',
        title: 'Inférieur à 31 000',
    }, {
        image: '/images/cards/money_2.png',
        title: 'Entre 31 003 € et 37 739 €',
    }, {
        image: '/images/cards/money_3.png',
        title: 'Entre 37 739 € et 56 130 €',
    }, {
        image: '/images/cards/money_4.png',
        title: 'Supérieur à 67 585 €',
    }];
    return (
        <Step10Style  display={display}>
            <H3 color={themeContext.colors.black}>Quel est le revenu total du foyer fiscal ?</H3>
            <Body2 className={"subtitle"}>Le revenu fiscal de référence est utilisé pour calculer les primes au plus juste</Body2>
            <CardWrapper>
                <Cards cards={cards} setValue={setValue} value={value}/>
            </CardWrapper>
            <ButtonWrapper>
                <ButtonPrimary 
                  onClick={() => {
                    OverwriteDevis({step: 10, data: {key: 'Type', value: value.title}});
 
                    if (!user) {
                      setStep(11);
                    } else {
                      addNewDevis();
                    }
                  }} 
                  width={"26rem"} 
                  bgColor={themeContext.colors.primary} 
                  hoverBgColor={themeContext.colors.primary} 
                  hoverColor={themeContext.colors.white} 
                  disabled={!value.title}>
                    Continue
                  </ButtonPrimary>
            </ButtonWrapper>
        </Step10Style>
    );
};

export default Step10;
