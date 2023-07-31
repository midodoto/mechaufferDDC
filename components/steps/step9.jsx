import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { ThemeContext } from 'styled-components';
import Cards from '../cards/index.jsx';
import ButtonPrimary from '../library/button/primary.jsx';
import Body2 from '../library/typo/body2.jsx';
import H3 from '../library/typo/h3.jsx';
import { DevisActions } from '../../store';

const Step9Style = styled.div`
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

const Button = styled.button`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  height: 5rem;
  border: unset;
  padding: 1rem 2rem;
`;

const Value = styled.button`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  height: 5rem;
  border: unset;
  padding: 1rem 5rem;
`;

const Step9 = ({ display, setStep }) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);

  const devisReducer = useSelector(({ devis }) => devis);
  const [valInc, setValInc] = useState(devisReducer.data && devisReducer.data[8] ? devisReducer.data[8].value : 1);

  return (
    <Step9Style display={display}>
      <H3 color={themeContext.colors.black}>Nombre de personnes dans le foyer (y compris vous)</H3>
      <Body2 className={'subtitle'}>le montant des primes varie selon la taille du ménage</Body2>
      <InputWrapper>
        <Button
          onClick={() => {
            if (valInc > 1) setValInc(valInc - 1);
          }}
        >
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
        <ButtonPrimary
          onClick={() => {
            OverwriteDevis({ step: 9, data: { key: 'nombre de personne dans le foyer ', value: valInc } });
            setStep(10);
          }}
          width={'26rem'}
          bgColor={themeContext.colors.primary}
          hoverBgColor={themeContext.colors.primary}
          hoverColor={themeContext.colors.white}
          disabled={!valInc}
        >
          Continue
        </ButtonPrimary>
      </ButtonWrapper>
    </Step9Style>
  );
};

export default Step9;
