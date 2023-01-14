import React, {useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import styled, {ThemeContext} from 'styled-components';
import CardsLine from "../cards-line/index.jsx";
import Cards from "../cards/index.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body1 from "../library/typo/body1.jsx";
import Body2 from "../library/typo/body2.jsx";
import H3 from "../library/typo/h3.jsx";
import {DevisActions} from '../../store';
import CardsMultiple from '../cards-multiple';

const Step5Style = styled.div`
  display: ${({display}) => display ? 'flex' : 'none'};
  justify-content: center;
  gap: 1.6rem;
  flex-direction: column;

  .subtitle {
    margin-bottom: 7.5rem;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0;
  width: 100%;
  height: 8rem;
  background-color: ${({theme}) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin-bottom: 10rem;
  min-height: 25rem;
`;

const StepWrapper = styled.div`
  display: ${({display}) => display ? 'block' : 'none'};
`;

const Button = styled.button`
  background: ${({theme}) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  height: 5rem;
  border: unset;
  padding: 1rem 2rem;
`;

const Value = styled.button`
  background: ${({theme}) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  height: 5rem;
  border: unset;
  padding: 1rem 5rem;
`;

const InputTextWrapper = styled.div`
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 25rem;

  label {
    display: flex;

    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  input {
    width: 70%;
    background: ${({theme}) => theme.colors.white};
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

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 10rem;
  display: flex;
  gap: 1.5rem;
  min-height: 25rem;

  label {
    display: flex;

    span {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  input {
    width: 70%;
    background: ${({theme}) => theme.colors.white};
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

  input[type=number] {
    -moz-appearance: textfield;
  }
`;

const ExtraStep = ({
                       setExtraStep,
                       extraStep,
                       OverwriteDevis,
                       devisReducer,
                       cards,
                       setMultipleStep,
                       multipleStep
                   }) => {
    const themeContext = useContext(ThemeContext)
    const [value, setValue] = useState([]);
    const [valInc, setValInc] = useState(1);
    const [multipleStep2, setMultipleStep2] = useState(0);
    const card = cards.extra;
    useEffect(() => {
        console.log("EXTRAAAA", value);
        if (multipleStep2 === 1 &&
            (
                (value.extra && value.extra.length === 0) ||
                (card[0].type === "number" && card[0].extra.length === 0)
            )) {
            setMultipleStep2(0);
            setMultipleStep(multipleStep + 1);
        }
    }, [multipleStep2]);
    
    return (
        <>
            {card && card[0].type === "card" ?
                <StepWrapper display={multipleStep2 === 0}>
                    <H3 color={themeContext.colors.black}>{cards.name}</H3>
                    <Body2 className={"subtitle"}>{cards.subtitle}</Body2>
                    <CardWrapper>
                        <Cards cards={card} setValue={setValue} value={value} height={17.8} width={26.8}/>
                    </CardWrapper>
                    <ButtonWrapper>
                        <ButtonPrimary onClick={() => {
                            const val = devisReducer.data[4].value;
                            val[extraStep - 1].value.value = {name: value.title, value: {}};
                            setMultipleStep2(multipleStep2 + 1);
                            OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                        }} width={"26rem"} bgColor={themeContext.colors.primary}
                                       hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}
                                       disabled={!value}>Continue</ButtonPrimary>
                    </ButtonWrapper>
                </StepWrapper>
                : card && card[0].type === "list" ?
                    <StepWrapper display={multipleStep2 === 0}>
                        <H3 color={themeContext.colors.black}>{cards.name}</H3>
                        <Body2 className={"subtitle"}>{cards.subtitle}</Body2>
                        <CardWrapper>
                            <CardsLine cards={card} setValue={setValue} value={value} height={17.8} width={26.8}/>
                        </CardWrapper>
                        <ButtonWrapper>
                            <ButtonPrimary onClick={() => {
    
                                const val = devisReducer.data[4].value;
                                val[extraStep - 1].value.value = {name: value.title, value: {}};
                                setMultipleStep2(multipleStep2 + 1);
                                OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                                
                            }} width={"26rem"} bgColor={themeContext.colors.primary}
                                           hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}
                                           disabled={!value}>Continue</ButtonPrimary>
                        </ButtonWrapper>
                    </StepWrapper> :
                    card && card.length === 1 && card[0].type === "input" ?
                    <StepWrapper display={multipleStep2 === 0}>
                        <H3 color={themeContext.colors.black}>{cards.name}</H3>
                        <Body2 className={"subtitle"}>{cards.subtitle}</Body2>
                        <InputTextWrapper>
                            <label htmlFor="surface"><Body1 color={themeContext.colors.black}>Surface en
                                m </Body1><span>2</span></label>
                            <input type="number" name={"surface"} id={"surface"}
                                   onChange={(e) => setValue({title: e.target.value, extra: card[0].extra})}
                                   value={value.title}/>
                        </InputTextWrapper>
                        <ButtonWrapper>
                            <ButtonPrimary onClick={() => {
                                const val = devisReducer.data[4].value;
                                val[extraStep - 1].value.value = {name: value.title, value: {}};
                                
                                setMultipleStep2(multipleStep2 + 1);
                                OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                                
                                
                                
                                // const val = devisReducer.data[4].value;
                                // val.push(value);
                                // setExtraStep(2);
                                // OverwriteDevis({step: 5, data: {key: 'Catégorie isolation', value: val}});
                                // setMultipleStep(multipleStep + 1)
                            }} width={"26rem"} bgColor={themeContext.colors.primary}
                                           hoverBgColor={themeContext.colors.primary}
                                           hoverColor={themeContext.colors.white}
                                           disabled={!value.title}>Continue</ButtonPrimary>
                        </ButtonWrapper>
                    </StepWrapper> :
                    <StepWrapper display={multipleStep2 === 0}>
                        <H3 color={themeContext.colors.black}>{cards.name}</H3>
                        <Body2 className={"subtitle"}>{cards.subtitle}</Body2>
                        <InputWrapper>
                            <Button onClick={() => setValInc(valInc - 1)}>
                                <Body2 fontSize={1.8}>-</Body2>
                            </Button>
                            <Value>
                                <Body2 fontSize={1.8}>{valInc}</Body2>
                            </Value>
                            <Button onClick={() => setValInc(valInc + 1)}>
                                <Body2 fontSize={1.8}>+</Body2>
                            </Button>
                        </InputWrapper>
                        <ButtonWrapper>
                            <ButtonPrimary onClick={() => {
                                const val = devisReducer.data[4].value;
                                val[extraStep - 1].value.value = {name: valInc, value: {}};
                                setMultipleStep2(multipleStep2 + 1);
                                OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                            }} width={"26rem"} bgColor={themeContext.colors.primary}
                                           hoverBgColor={themeContext.colors.primary}
                                           hoverColor={themeContext.colors.white}
                                           disabled={!valInc}>Continue</ButtonPrimary>
                        </ButtonWrapper>
                    </StepWrapper>
            }
            { multipleStep2 === 1 && value && value.extra && value.extra.length > 0 &&
                <StepWrapper display={!!value}>
                    {console.log("WESHHHH", value)}
                    {value && value.extra.length > 0 &&
                        <ExtraStep setMultipleStep={setMultipleStep} multipleStep={multipleStep}
                                   setExtraStep={setExtraStep} extraStep={extraStep}
                                   OverwriteDevis={OverwriteDevis} devisReducer={devisReducer}
                                   cards={value}/>
                    }
                </StepWrapper>
            }
        </>
    );
};


const TypeOfWork = ({setExtraStep, extraStep, OverwriteDevis, devisReducer, cards}) => {
    const themeContext = useContext(ThemeContext)
    const [value, setValue] = useState(null);
    const [multipleStep, setMultipleStep] = useState(0);
    
    useEffect(() => {
        console.log("valueee", value)
        console.log("multipleStep", multipleStep)
        if (multipleStep > 1) {
            setMultipleStep(0)
            setExtraStep(extraStep + 1);
        }
    }, [multipleStep]);

    return (
        <>
            {cards && cards.extra && cards.extra.length > 0 &&
                <>
                    <StepWrapper display={multipleStep === 0}>
                    <H3 color={themeContext.colors.black}>{cards.name}</H3>
                    <Body2 className={"subtitle"}>{cards.subtitle}</Body2>
                    <CardWrapper>
                        <CardsLine cards={cards.extra} setValue={setValue} value={value} height={17.8} width={26.8}/>
                    </CardWrapper>
                    <ButtonWrapper>
                        <ButtonPrimary onClick={() => {
                            const val = devisReducer.data[4].value;
                            val[extraStep - 1].value = {name: value.title, value: {}};
                            if (value.extra.length > 0) {
                                setMultipleStep(1);
                                OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                                ///to do
                            } else {
                                setExtraStep(extraStep + 1);
                                OverwriteDevis({step: 4, multipleStep: true, data: {key: cards.name, value: val}});
                            }
                        }} width={"26rem"} bgColor={themeContext.colors.primary}
                                       hoverBgColor={themeContext.colors.primary}
                                       hoverColor={themeContext.colors.white} disabled={!value}>Continue</ButtonPrimary>
                    </ButtonWrapper>
                </StepWrapper>
                    { multipleStep === 1 && value &&
                        <StepWrapper display={!!value}>
                            {value.extra.length > 0 &&
                                <ExtraStep setMultipleStep={setMultipleStep} multipleStep={multipleStep}
                                           setExtraStep={setExtraStep} extraStep={extraStep}
                                           OverwriteDevis={OverwriteDevis} devisReducer={devisReducer}
                                           cards={value}/>
                            }
                        </StepWrapper>
                    }
                </>
            }
        </>
    );
};


const Step5 = ({display, setStep}) => {
    const themeContext = useContext(ThemeContext)
    const dispatch = useDispatch();
    const [extraStep, setExtraStep] = useState(0);
    const devisReducer = useSelector(({devis}) => devis);
    const {OverwriteDevis} = bindActionCreators(DevisActions, dispatch);
    const [value, setValue] = useState([]);
    
    useEffect(() => {
        if (value.length > 0 && extraStep > value.length) {
            setExtraStep(0)
            setStep(6);
        }
    }, [extraStep]);
    
    useEffect(() => {
    
    }, []);
    
    const cards = [
        {
            image: '/images/cards/isolation.png',
            title: 'Isolation',
            name: 'Catégorie isolation',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'Isolation des combles',
                    name: 'L’isolation des combles concerne :',
                    type: 'list',
                    extra: [
                        {
                            image: '/images/cards/house.svg',
                            title: 'Des combles perdus',
                            type: 'list',
                            name: 'La surface à isoler:',
                            extra: [{
                                image: '/images/cards/house.svg',
                                title: 'surface Des combles perdus',
                                type: 'input',
                                extra: [],
                            }],
                        }, {
                            image: '/images/cards/house.svg',
                            title: 'Des combles aménagés',
                            type: 'list',
                            name: 'La surface à isoler:',
                            extra: [{
                                image: '/images/cards/house.svg',
                                title: 'surface Des combles aménagés',
                                type: 'input',
                                extra: [],
                            }],
                        }]
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Isolation des murs',
                    type: 'list',
                    name: 'De quelle manière souhaitez-vous isoler vos murs ?',
                    subtitle: 'Cela nous suffit pour estimer votre prime, un artisan prendra les mesures exactes lors de sa visite',
                    extra: [{
                        image: '/images/cards/house.svg',
                        title: 'Isolation intérieure',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface Des murs interieur',
                            type: 'input',
                            extra: [],
                        }]
                    }, {
                        image: '/images/cards/house.svg',
                        title: 'isolation extérieure',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface Des murs exterieur',
                            type: 'input',
                            extra: [],
                        }]
                    }, {
                        image: '/images/cards/house.svg',
                        title: 'Je ne sais pas',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface Des murs interieur',
                            type: 'input',
                            extra: [],
                        }]
                    }]
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Isolation du sol',
                    type: 'list',
                    name: 'L’isolation du sol concerne :',
                    extra: [{
                        image: '/images/cards/house.svg',
                        title: 'Un garage',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface du garage',
                            type: 'input',
                            extra: [],
                        }]
                    }, {
                        image: '/images/cards/house.svg',
                        title: 'Une cave',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface cave',
                            type: 'input',
                            extra: [],
                        }]
                    }, {
                        image: '/images/cards/house.svg',
                        title: 'Un vide sanitaire',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface vide sanitaire',
                            type: 'input',
                            extra: [],
                        }]
                    }, {
                        image: '/images/cards/house.svg',
                        title: 'Un terre-plein',
                        type: 'card',
                        name: 'La surface à isoler:',
                        extra: [{
                            image: '/images/cards/house.svg',
                            title: 'surface terre-plein',
                            type: 'input',
                            extra: [],
                        }]
                    }]
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Isolation d’un toit-terasse',
                    name: 'Quelle est la surface de toiture terrasse à isoler ?',
                    type: 'list',
                    extra: [{
                        image: '/images/cards/house.svg',
                        title: 'surface toit-terasse',
                        type: 'input',
                        extra: [],
                    }],
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Fenêtres / Portes-fenêtres',
                    type: 'list',
                    name: 'Combien de fenêtres souhaitez-vous faire remplacer ?',
                    extra: [{
                        image: '/images/cards/house.svg',
                        title: 'nombre Fenêtres / Portes-fenêtres',
                        type: 'number',
                        extra: [],
                    }],
                }]
        },
        {
            image: '/images/cards/chauffe_eau.png',
            title: 'Chauffe-eau',
            name: 'Catégorie Chauffe-eau',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'Chauffe-eau thermodynamique',
                    type: 'card',
                    extra: []
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Chauffe-eau solaire individuel',
                    type: 'card',
                    extra: []
                }
            ]
        },
        {
            image: '/images/cards/clim.png',
            title: 'Pompe à chaleur climatisation',
            name: 'Catégorie Pompe à Chaleur et Climatisation',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'Pompe à chaleur Air/Eau',
                    type: 'card',
                    extra: []
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'climatisation réversible (pompe à chaleur Air/Air)',
                    type: 'card',
                    extra: []
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Pompe à chaleur géothermique',
                    type: 'card',
                    extra: []
                }]
        },
        {
            image: '/images/cards/radiateur_electrique.png',
            title: 'Chauffage traditionnel',
            name: 'Catégorie Chauffage Traditionnel',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'Chaudière à condensation',
                    type: 'list',
                    name: 'Combien de radiateurs souhaitez- vous installer/remplacer ?',
                    extra: [
                        {
                            title: 'nombre de radiateur',
                            subtitle: '',
                            type: 'number',
                            extra: [],
                        },
                    ]
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Radiateur électrique',
                    type: 'list',
                    name: 'Combien de radiateurs souhaitez- vous installer/remplacer ?',
                    extra: [
                        {
                            title: 'nombre de radiateur',
                            subtitle: '',
                            type: 'number',
                            extra: [],
                        },
                    ]
                }],
        },
        {
            image: '/images/cards/chauffage_bois.png',
            title: 'Chauffage à bois',
            name: 'Catégorie chauffage à bois',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'Chaudière Bois (Granulés ou bûches)',
                    type: 'list',
                    name: 'Quel type de poêle à bois souhaitez-vous installer ?',
                    extra: [
                        {
                            image: '/images/cards/house.svg',
                            title: 'Poêle à granulés',
                            type: 'list',
                            extra: []
                        },
                        {
                            image: '/images/cards/house.svg',
                            title: 'Poêle à bûches',
                            type: 'list',
                            extra: []
                        }]
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'Poêle à bois (Granulés ou bûches)',
                    type: 'list',
                    name: 'Quel type de poêle à bois souhaitez-vous installer ?',
                    extra: [
                        {
                            image: '/images/cards/house.svg',
                            title: 'Poêle à granulés',
                            type: 'list',
                            extra: []
                        },
                        {
                            image: '/images/cards/house.svg',
                            title: 'Poêle à bûches',
                            type: 'list',
                            extra: []
                        }]
                }],
        },
        {
            image: '/images/cards/vmc.png',
            title: 'VMC',
            name: 'Catégorie VMC',
            subtitle: '',
            extra: [
                {
                    image: '/images/cards/house.svg',
                    title: 'VMC Double Flux',
                    type: 'card',
                    extra: []
                },
                {
                    image: '/images/cards/house.svg',
                    title: 'VMC simple Flux',
                    type: 'card',
                    extra: []
                }],
        }];
    
    return (
        <Step5Style display={display}>
            <StepWrapper display={extraStep === 0}>
                <H3 color={themeContext.colors.black}>Quels travaux souhaitez-vous réaliser dans votre logement ?</H3>
                <Body2 className={"subtitle"}>Vous pouvez sélectionner plusieurs réponses</Body2>
                <CardWrapper>
                    <CardsMultiple cards={cards} setValue={setValue} value={value} height={17.8} width={26.8}/>
                </CardWrapper>
                <ButtonWrapper>
                    <ButtonPrimary onClick={() => {
                        const card = cards.find(element => element.extra && element.extra.length > 0)
                        const reducerValue = value.map((val, index) => {
                            return {name: val.title, value: {}};
                        })
                        if (card) {
                            setExtraStep(1);
                            OverwriteDevis({
                                step: 4,
                                multipleStep: true,
                                data: {key: 'Travaux', value: reducerValue}
                            });
                        } else {
                            setExtraStep(0);
                            OverwriteDevis({step: 5, data: {key: 'Travaux', value}});
                            setStep(6);
                        }
                    }} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary}
                                   hoverColor={themeContext.colors.white} disabled={!value.length > 0}>Continue</ButtonPrimary>
                </ButtonWrapper>
            </StepWrapper>
            
            {value.map((val, index) => {
                return <StepWrapper display={extraStep-1 === index} key={index}>
                    <TypeOfWork setStep={setStep} setExtraStep={setExtraStep} extraStep={extraStep}
                                OverwriteDevis={OverwriteDevis} devisReducer={devisReducer} cards={val}/>
                    
                    {/*<ExtraStep setExtraStep={setExtraStep} extraStep={extraStep} setStep={setStep} OverwriteDevis={OverwriteDevis} devisReducer={devisReducer} cards={val}/>*/}
                </StepWrapper>
            })}
        </Step5Style>
    );
};

export default Step5;
