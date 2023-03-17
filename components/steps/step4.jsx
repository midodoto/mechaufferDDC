import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import { DevisActions } from '../../store';

const Step4Style = styled.div`
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

const StepWrapper = styled.div`
  display: ${({ display }) => display ? 'block' : 'none'};
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

const ExtraStep = ({ setStep, OverwriteDevis, devisReducer, cards }) => {
    const themeContext = useContext(ThemeContext)
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[3] ? devisReducer.data[3].value[1] : null});

    return (
        <>
            { cards && cards.extra &&
                <>
                    <H3 color={themeContext.colors.black}>Quel est votre type de chauffage actuel</H3>
                    <Body2 className={"subtitle"}></Body2>
                    <CardWrapper>
                        <Cards cards={cards.extra} setValue={setValue} value={value} height={17.8} width={26.8}/>
                    </CardWrapper>
                    <ButtonWrapper>
                        <ButtonPrimary onClick={() => { const val = devisReducer.data[3].value; val.push(value.title); OverwriteDevis({step: 4, data: {key: 'Type de chauffage', value: val}});setStep(5)} } width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!value.title}>Continue</ButtonPrimary>
                    </ButtonWrapper>
                </>
            }
        </>
    );
};

const Step4 = ({ display, setStep, extraStepChauffage, setExtraStepChauffage }) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);
    
    const devisReducer = useSelector(({ devis }) => devis);
    const [value, setValue] = useState({title: devisReducer.data && devisReducer.data[3] ? devisReducer.data[3].value[0] : null});
    // const [extraStep, setExtraStep] = useState(extraStepChauffage);
    const cards = [{
        image: '/images/cards/fuel.png',
        title: 'Chauffage au fioul',
        extra: [{
            image: '/images/cards/chaudiere_condensation.png',
            title: 'Chaudière à condensation',
        }, {
            image: '/images/cards/chaudiere_classique.png',
            title: 'Chaudière classique',
        }, {
            image: '/images/cards/poele.png',
            title: 'Poêle',
        }]
    }, {
        image: '/images/cards/electric.png',
        title: 'Chauffage électrique',
        extra: [{
            image: '/images/cards/chaudiere_electrique.png',
            title: 'Chaudiere electrique',
        }, {
            image: '/images/cards/radiateur_electrique.png',
            title: 'Radiateurs electriques',
        }, {
            image: '/images/cards/plancher_chauffant.png',
            title: 'Plancher chauffant',
        }]
    }, {
        image: '/images/cards/chauffage_gaz.png',
        title: 'Chauffage au gaz',
        extra: [{
            image: '/images/cards/chaudiere_classique.png',
            title: 'Chaudière classique',
        }, {
            image: '/images/cards/chaudiere_condensation.png',
            title: 'Chaudière à condensation',
        }, {
            image: '/images/cards/radiateur_gaz.png',
            title: 'Radiateur à gaz',
        }, {
            image: '/images/cards/poele.png',
            title: 'Poêle à gaz',
        }]
    }, {
        image: '/images/cards/pompe_chaleur.png',
        title: 'Pompe à chaleur',
        extra: []
    }, {
        image: '/images/cards/chauffage_bois.png',
        title: 'Chauffage au bois',
        extra: []
    }, {
        image: '/images/cards/charcoal.png',
        title: 'Chauffage au charbon',
        extra: []
    }];
    
    return (
        <Step4Style  display={display}>
            <StepWrapper display={extraStepChauffage === 1}>
                <H3 color={themeContext.colors.black}>Sélectionnez l’énergie de chauffage utilisée dans votre logement ?</H3>
                <Body2 className={"subtitle"}>Si vous avez plusieurs énergies de chauffage, indiquez-nous la principale</Body2>
                <CardWrapper>
                    <Cards cards={cards} setValue={setValue} value={value} height={17.8} width={26.8}/>
                </CardWrapper>
                <ButtonWrapper>
                    <ButtonPrimary onClick={() => {
                        if (cards.find(element => value && element.title === value.title)?.extra?.length > 0) {
                            setExtraStepChauffage(2);
                            OverwriteDevis({step: 3, multipleStep: true, data: {key: 'Type de chauffage', value: [value.title]}});
                        } else {
                            OverwriteDevis({step: 4, data: {key: 'Type de chauffage', value: [value.title]}});
                            setStep(5);
                        }
                    }} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={!value.title}>Continue</ButtonPrimary>
                </ButtonWrapper>
            </StepWrapper>
            <StepWrapper display={extraStepChauffage === 2}>
                <ExtraStep setStep={setStep} setExtraStepChauffage={setExtraStepChauffage} OverwriteDevis={OverwriteDevis} devisReducer={devisReducer} cards={cards.find(element => value && element.title === value.title)}/>
            </StepWrapper>
        </Step4Style>
    );
};

export default Step4;
