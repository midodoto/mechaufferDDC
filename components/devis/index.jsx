import Image from "next/image.js";
import React, {useState, useContext, useEffect} from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components';
import MenuLeft from '../menu-left';
import ProgressBar from "../progress-bar/index.jsx";
import Step1 from "../steps/step1.jsx";
import Step2 from "../steps/step2.jsx";
import arrowBack from '/public/images/arrow-back.svg';
import Step3 from "../steps/step3.jsx";
import Step4 from "../steps/step4.jsx";
import Step5 from "../steps/step5.jsx";
import Step6 from "../steps/step6.jsx";
import Step7 from "../steps/step7.jsx";
import Step8 from "../steps/step8.jsx";
import Step9 from "../steps/step9.jsx";
import Step10 from "../steps/step10.jsx";
// import Step111 from "../steps/step11.jsx";
import Step11 from "../steps/step11.jsx";

const DevisWrapper = styled.div`
  min-height: calc(100vh - 9rem);
  background-color: ${({ theme }) => theme.colors.blue2};
`;

const Left = styled.div`
  flex: 2.5;
  display: flex;
  justify-content: center;
  position: relative;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    display: none;
  }
`;

const Right = styled.div`
  flex: 6;
  display: flex;
  align-items: center;
  position: relative;
`;

const Back = styled.div`
  position: absolute;
  top: -4rem;
  cursor: pointer;
  display: flex;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

const MaxWidth = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 0rem 6rem;
  display: flex;
  flex-direction: row;
  padding-top: 10rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const MobileBack = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablets} {
    display: none;
  }
`;

const Devis = () => {
    const devisReducer = useSelector(({devis}) => devis)
    const [state, setState] = useState(1);
    const [extraStepChauffage, setExtraStepChauffage] = useState(1);
    // const [step, setStep] = useState(devisReducer.step + 1);
    const [step, setStep] = useState(1);

    useEffect(() => {
      if (step >= 7) {
          setState(2);
      } else
          setState(1);
    }, [step]);

    return (
        <DevisWrapper>
            <ProgressBar currentStep={step} maxStep={12}/>
            <MaxWidth>
                <Left>
                    {step > 1 &&
                        <>
                            {step === 4 && extraStepChauffage > 1 ?
                                <Back onClick={() => {if (extraStepChauffage > 1) setExtraStepChauffage(extraStepChauffage - 1)}}>
                                    <Image src={arrowBack} alt={`Back button`} width={24} height={24}/>
                                    <button>Retour</button>
                                </Back> :
                                <Back onClick={() => {if (step > 1) setStep(step - 1)}}>
                                    <Image src={arrowBack} alt={`Back button`} width={24} height={24}/>
                                    <button>Retour</button>
                                </Back>
                            }
                            </>
                    }
                    <MenuLeft state={state} />
                </Left>
                <Right>
                    <MobileBack>
                        {step > 1 &&
                            <>
                                {step === 4 && extraStepChauffage > 1 ?
                                    <Back onClick={() => {if (extraStepChauffage > 1) setExtraStepChauffage(extraStepChauffage - 1)}}>
                                        <Image src={arrowBack} alt={`Back button`} width={24} height={24}/>
                                        <button>Retour</button>
                                    </Back> :
                                    <Back onClick={() => {if (step > 1) setStep(step - 1)}}>
                                        <Image src={arrowBack} alt={`Back button`} width={24} height={24}/>
                                        <button>Retour</button>
                                    </Back>
                                }
                            </>
                        }
                    </MobileBack>
                    <Step1 display={step === 1} setStep={setStep}/>
                    <Step2 display={step === 2} setStep={setStep}/>
                    <Step3 display={step === 3} setStep={setStep}/>
                    <Step4 display={step === 4} setStep={setStep} extraStepChauffage={extraStepChauffage} setExtraStepChauffage={setExtraStepChauffage}/>
                    <Step5 display={step === 5} setStep={setStep}/>
                    <Step6 display={step === 6} setStep={setStep}/>
                    <Step7 display={step === 7} setStep={setStep}/>
                    <Step8 display={step === 8} setStep={setStep}/>
                    <Step9 display={step === 9} setStep={setStep}/>
                    <Step10 display={step === 10} setStep={setStep}/>
                    {/*<Step111 display={step === 11} setStep={setStep}/>*/}
                    <Step11 display={step === 11} setStep={setStep}/>
                </Right>
            </MaxWidth>
        </DevisWrapper>
    );
};

export default Devis;
