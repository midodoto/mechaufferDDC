import Image from "next/image.js";
import React from 'react';
import Body2 from "../library/typo/body2.jsx";
import styled from 'styled-components';

const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ width }) => width ? '1' : '2.6'}rem;
  border: double 4px transparent;
  background-image: linear-gradient(white, white),
  ${({ theme, selected }) => selected ? theme.colors.primary : 'linear-gradient(white, white)'};
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  width: 40rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
  p {
    padding: 1.8rem 6.5rem;
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
  opacity: ${({ theme, disable }) => disable ? '0.2' : '1'};
`;

const Cards = ({cards, setValue, value, height = '', width = '', typeDevis = null}) => {

    return (
        <CardsStyle>
            {cards && cards.map((card, index) => {
              return (
                <Card key={index} disable={typeDevis && typeDevis?.value?.find((element) => Array.isArray(element.value) ? element.value.find((elem) => elem.name === card.title) :  element.value.name === card.title) ? true : false} selected={value && value.title === card.title} height={height} width={width} onClick={() => {typeDevis && typeDevis.value.find((element) => Array.isArray(element.value) ? element.value.find((elem) => elem.name === card.title) :  element.value.name === card.title) ? null : setValue(card)}}>
                    <Body2>{card.title}</Body2>
                </Card>
              )
            })}
        </CardsStyle>
    );
};

export default Cards;
