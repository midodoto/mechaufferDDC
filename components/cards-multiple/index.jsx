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

const Mobile = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablets} {
    display: none;
  }
`;

const Desktop = styled.div`
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    display: none;
  }
`;

const CardMobile = styled.div`
  width: 100%;
  border-radius: 12px;
  border: double 4px transparent;
  background-image: linear-gradient(white, white),
  ${({ theme, selected }) => selected ? theme.colors.primary : 'linear-gradient(white, white)'};
  background-origin: border-box;
  background-clip: content-box, border-box;
  cursor: pointer;
  p {
    padding: 0rem 0.8rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${({ width }) => width ? '1' : '2.6'}rem;
  padding: 1.4rem 3rem;

`;


const Cards = ({cards, setValue, value, height = '', width = ''}) => {
    return (<>
        <Desktop>
            <CardsStyle>
                {cards && cards.map((card, index) => {
                    return (
                        <Card key={index} selected={value.length > 0 && value.find(elem => elem.title === card.title)} height={height} width={width} onClick={() => {
                            if (!value.find(elem => elem.title === card.title))
                                setValue([...value, card])
                            else {
                                let tmp = value;
                                const pos = tmp.map(e => e.title).indexOf(card.title);
                                tmp.splice(pos, 1);
                                setValue([...tmp])
                            }
                        }
                        }>
                            <Image src={card.image} alt={`logo ${card.title}`} width={116} height={116}/>
                            <Body2>{card.title}</Body2>
                        </Card>
                    )
                })}
            </CardsStyle>
        </Desktop>
        <Mobile>
            <CardsStyle>
                {cards && cards.map((card, index) => {
                    return (
                    <CardMobile key={index} selected={value.length > 0 && value.find(elem => elem.title === card.title)} height={height} width={width} onClick={() => {
                        if (!value.find(elem => elem.title === card.title))
                            setValue([...value, card])
                        else {
                            let tmp = value;
                            const pos = tmp.map(e => e.title).indexOf(card.title);
                            tmp.splice(pos, 1);
                            setValue([...tmp])
                        }
                    }
                    }>
                        <CardWrapper>
                            <Image src={card.image} alt={`logo ${card.title}`} width={40} height={40}/>
                            <Body2>{card.title}</Body2>
                        </CardWrapper>
                    </CardMobile>
                    )
                })}
            </CardsStyle>
        </Mobile>
        </>
    );
};

export default Cards;
