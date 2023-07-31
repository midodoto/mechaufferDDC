import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Body2 from '../library/typo/body2.jsx';
import Body3 from '../library/typo/body3.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDevisByUserId } from '../../config/firebase.js';

import 'swiper/css';
import { DemandesList } from './demandes.jsx';

const RecompensesStyle = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 4rem;
  padding: 3rem 4rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  box-shadow: -5.183431625366211px 3.4556212425231934px 14.686389923095703px 0px rgba(176, 186, 192, 0.2);
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
  width: 100%;
`;

const DemandesWrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  margin-top: 4rem;
  padding: 3rem 4rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.2rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
  box-shadow: -5.183431625366211px 3.4556212425231934px 14.686389923095703px 0px rgba(176, 186, 192, 0.2);
`;
const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: 1rem;
`;
const Number = styled.div`
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Image = styled.div`
  height: 80px;
  background-image: url('${({ src }) => src}');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Description = styled.div``;

const ProgressBar = styled.div`
  margin-top: 3rem;
  border-radius: 50px;
  background: #afb6bc;
  height: 6px;
`;

const FlexXCP = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Recompenses = ({ demandes, getDevisByUserIdFct }) => {
  return (
    <>
      <RecompensesStyle>
        <Title>
          <Body2>Mes prochaines récompenses</Body2>
        </Title>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Wrapper>
              <Number>3 XCP</Number>
              <Image src="/images/dashboard/iphonex.png" />
              <Description>
                <BodyMed fontSize="1.4">Iphone X(ou 150€)</BodyMed>
              </Description>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <Number>5 XCP</Number>
              <Image src="/images/dashboard/iphone.png" />
              <Description>
                <BodyMed fontSize="1.4">Iphone 12(ou 250€)</BodyMed>
              </Description>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <Number>7 XCP</Number>
              <Image src="/images/dashboard/laptop.png" />
              <Description>
                <BodyMed fontSize="1.4">Macbook Pro (ou 350€)</BodyMed>
              </Description>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <Number>15 XCP</Number>
              <Image src="/images/dashboard/iphone14.png" />
              <Description>
                <BodyMed fontSize="1.4">Iphone 14(ou 750€)</BodyMed>
              </Description>
            </Wrapper>
          </SwiperSlide>
          <SwiperSlide>
            <Wrapper>
              <Number>30 XCP</Number>
              <Image src="/images/dashboard/boat.png" />
              <Description>
                <BodyMed fontSize="1.4">Croisière pour 2 personnes(ou 1500€)</BodyMed>
              </Description>
            </Wrapper>
          </SwiperSlide>
        </Swiper>
        <ProgressBar></ProgressBar>
        <FlexXCP>
          <Body3>0 XCP</Body3>
          <Body3>0 XCP / 30 XCP</Body3>

          <Body3>30 XCP</Body3>
        </FlexXCP>
      </RecompensesStyle>
      <DemandesWrapper>
        <Title>
          <Body2>Mes dernières demandes</Body2>
        </Title>
        <DemandesList demandes={demandes} getDevisByUserIdFct={getDevisByUserIdFct} />
      </DemandesWrapper>
    </>
  );
};

export default Recompenses;
