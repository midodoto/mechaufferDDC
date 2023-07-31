import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import H1 from '../library/typo/h1.jsx';
import H3 from '../library/typo/h3.jsx';
import heroBg from '/public/images/heroBg.jpg';
import ContactTip from '../contact-tip';

const HeroStyle = styled.div`
  min-height: calc(100vh);
  background-image: url(${heroBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeroWrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 0rem 12rem;
  position: relative;
  h1 {
    padding-top: 12rem;
    max-width: 80rem;
  }
  h3 {
    padding-top: 1.4rem;
    max-width: 50rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 3rem 2rem;
    h1 {
      margin-bottom: 4rem;
    }
    h3 {
      padding-bottom: 8.4rem;
    }
  }
`;

const Hero = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeroStyle>
      <HeroWrapper>
        <H1 color={themeContext.colors.typo}>Chauffez-vous mieux et moins cher avec MeChauffer.fr</H1>
        <H3 color={themeContext.colors.typo}>
          Des travaux efficaces, de qualité, un accompagnement de A à Z ainsi que les meilleures primes vous permettant
          des travaux à moindre coût.
        </H3>
        <ContactTip />
      </HeroWrapper>
    </HeroStyle>
  );
};

export default Hero;
