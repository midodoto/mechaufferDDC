import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { ThemeContext } from 'styled-components';
import Cards from '../cards/index.jsx';
import ButtonPrimary from '../library/button/primary.jsx';
import Body2 from '../library/typo/body2.jsx';
import H3 from '../library/typo/h3.jsx';
import { DevisActions } from '../../store';

const Step2Style = styled.div`
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

const CardWrapper = styled.div`
  margin-bottom: 10rem;
  min-height: 25rem;
`;

const Step2 = ({ display, setStep }) => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { OverwriteDevis } = bindActionCreators(DevisActions, dispatch);

  const devisReducer = useSelector(({ devis }) => devis);
  const [value, setValue] = useState({
    title: devisReducer.data && devisReducer.data[1] ? devisReducer.data[1].value : null,
  });

  const cards = [
    {
      image: '/images/cards/calendar.png',
      title: 'Moins de 2 ans',
    },
    {
      image: '/images/cards/calendar.png',
      title: 'Entre 2 ans et 15 ans',
    },
    {
      image: '/images/cards/calendar.png',
      title: 'Plus de 15 ans',
    },
  ];
  return (
    <Step2Style display={display}>
      <H3 color={themeContext.colors.black}>Date de construction du logement concerné par les travaux</H3>
      <Body2 className={'subtitle'}>Cela permet de nous assurer de votre éligibilité aux différentes aides</Body2>
      <CardWrapper>
        <Cards cards={cards} setValue={setValue} value={value} />
      </CardWrapper>
      <ButtonWrapper>
        <ButtonPrimary
          onClick={() => {
            OverwriteDevis({ step: 2, data: { key: 'Type', value: value.title } });
            setStep(3);
          }}
          width={'26rem'}
          bgColor={themeContext.colors.primary}
          hoverBgColor={themeContext.colors.primary}
          hoverColor={themeContext.colors.white}
          disabled={!value.title}
        >
          Continue
        </ButtonPrimary>
      </ButtonWrapper>
    </Step2Style>
  );
};

export default Step2;
