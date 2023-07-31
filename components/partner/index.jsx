import Image from 'next/image.js';
import React from 'react';
import styled from 'styled-components';
import H2 from '../library/typo/h2.jsx';
import img1 from '/public/images/1.svg';
import img2 from '/public/images/2.svg';
import img3 from '/public/images/3.svg';
import img4 from '/public/images/4.svg';
import img5 from '/public/images/5.svg';
import img6 from '/public/images/6.svg';
import img7 from '/public/images/7.svg';
import img8 from '/public/images/8.svg';
import img9 from '/public/images/9.svg';
import img10 from '/public/images/10.svg';

const PartnerStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 0rem 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 5rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Partner = () => {
  return (
    <PartnerStyle>
      <H2>Ils nous font confiance !</H2>
      <Grid>
        <Image src={img1} alt="logo partner" width={150} height={106} />
        <Image src={img2} alt="logo partner" width={150} height={106} />
        <Image src={img3} alt="logo partner" width={150} height={106} />
        <Image src={img4} alt="logo partner" width={150} height={106} />
        <Image src={img5} alt="logo partner" width={150} height={106} />
        <Image src={img6} alt="logo partner" width={150} height={106} />
        <Image src={img7} alt="logo partner" width={150} height={106} />
        <Image src={img8} alt="logo partner" width={150} height={106} />
        <Image src={img9} alt="logo partner" width={150} height={106} />
        <Image src={img10} alt="logo partner" width={150} height={106} />
      </Grid>
    </PartnerStyle>
  );
};

export default Partner;
