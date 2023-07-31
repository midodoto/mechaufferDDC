import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Cards from '../cards/index.jsx';
import ButtonPrimary from '../library/button/primary.jsx';
import Body2 from '../library/typo/body2.jsx';
import H3 from '../library/typo/h3.jsx';

const Step5Style = styled.div`
  display: ${({ display }) => (display ? 'flex' : 'none')};
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
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  margin-bottom: 10rem;
  min-height: 25rem;
`;

const Step55 = ({ display, setStep }) => {
  const themeContext = useContext(ThemeContext);
  const [value, setValue] = useState(null);
  const cards = [
    {
      image: '/images/cards/house.svg',
      title: 'J’ai froid dans ma maison',
    },
    {
      image: '/images/cards/house.svg',
      title: 'Je veux réduire ma facture',
    },
    {
      image: '/images/cards/house.svg',
      title: 'Améliorer mon diagnostic énergétique',
    },
  ];
  return (
    <Step5Style display={display}>
      <H3 color={themeContext.colors.black}>Pourquoi souhaitez-vous faire ces travaux ?</H3>
      <Body2 className={'subtitle'}>sélectionnez la raison principale pour ces travaux</Body2>
      <CardWrapper>
        <Cards cards={cards} setValue={setValue} value={value} height={17.8} width={26.8} />
      </CardWrapper>
      <ButtonWrapper>
        <ButtonPrimary
          onClick={() => setStep(6)}
          width={'26rem'}
          bgColor={themeContext.colors.primary}
          hoverBgColor={themeContext.colors.primary}
          hoverColor={themeContext.colors.white}
          disabled={!value}
        >
          Continue
        </ButtonPrimary>
      </ButtonWrapper>
    </Step5Style>
  );
};

export default Step55;
