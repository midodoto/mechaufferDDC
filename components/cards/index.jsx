import Image from "next/image.js";
import React from 'react';
import Body2 from "../library/typo/body2.jsx";
import styled from 'styled-components';

const CardsStyle = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  height: ${({ height }) => height ? height : '23.8'}rem;
  width: ${({ width }) => width ? width : '21.4'}rem;
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
  p {
    padding: 0rem 0.8rem;
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
`;

const Cards = ({cards, setValue, value, height = '', width = ''}) => {
    return (
        <CardsStyle>
            {cards && cards.map((card, index) => {
                return (
                    <Card key={index} selected={value && card.title === value.title} height={height} width={width} onClick={() => {setValue(card)}}>
                        <Image src={card.image} alt={`logo ${card.title}`} width={116} height={116}/>
                        <Body2>{card.title}</Body2>
                    </Card>
                )
            })}
        </CardsStyle>
    );
};

export default Cards;
