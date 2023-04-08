import Image from "next/image.js";
import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components'
import ContactUs from "../contact-us/index.jsx";
import Hero from '../hero';
import ButtonPrimary from "../library/button/primary.jsx";
import Body2 from "../library/typo/body2.jsx";
import Partner from '../partner';
import prime from '/public/images/prime.png';
import parain from '/public/images/parain.png';
import ListHome from '../list-home';
import H2 from '../library/typo/h2.jsx';
import H3 from '../library/typo/h3.jsx';
import H4 from '../library/typo/h4.jsx';
import Body from '../library/typo/body1.jsx';
import Parain from '../parain';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const HomePageWrapper = styled.div``;

const ContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 4.4rem;
  position: relative;
  z-index: 2;
  margin-top: -4rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 0rem;
  }
`;

const ContentHomeHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4.8rem;
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  .label {
    margin-right: 9rem;
  }
  a {
    flex: 1;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 3rem 2rem 0 2rem;
    flex-direction: column;
    .label {
      margin-right: 0rem;
    }
    a {
      width: 100%;
    }
  }
`;

const ButtonPrime = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3rem 3rem;
  gap: 6.5rem;
  background: #FFFFFF;
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  cursor: pointer;
  flex: 1;
`;

const ButtonCall = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3rem 3rem;
  gap: 6.5rem;
  background: #FFFFFF;
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  cursor: pointer;
  flex: 1;
`;

const ValueHomeHeaderStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  min-height: 100vh;
  border-radius: 40px;
  padding: 7rem 9rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
  h3 {
    margin-bottom: 5rem;
    text-align: center;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const CardsStyle = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
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
    padding:  2rem 0.8rem 0rem 0.8rem;
  }
  &:hover {
    background-image: linear-gradient(white, white),
    ${({ theme }) => theme.colors.primary};
  }
`;

const CardLageStyle = styled.div`
  display: flex;
  gap: 7rem;
  filter: drop-shadow(0px 3px 5px rgba(182, 182, 182, 0.2));
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    gap: 0rem;
  }
`;


const CardLage = styled.div`
  height: 19rem;
  border-radius: 1.2rem;
  background: ${({ theme }) => theme.colors.white};
  flex: 1;
  margin-top: 6rem;
  display: flex;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    flex: none;
    height: 39rem;
  }
`;

const Img = styled.div`
  flex:2;
  background-image: url(${({ src }) => src });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
`;

const Description = styled.div`
  flex:3;
  padding: 2.4rem 4rem 2.4rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.div`
  h4 {
    margin-bottom: 1rem;
  }
`;

export const ContentHomeHeader = ({ setPrime }) => {
    
    const scroll = () => {
            scroller.scrollTo('test1', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
    }
    
    return (
        <ContentHomeHeaderStyle>
            <Body2 className="label">Vous souhaitez :</Body2>
            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                    <ButtonPrime onClick={() => setPrime(true)}>
                        <Image src={prime} alt={`devis`} width={50} height={50}/>
                        <Element name="test1" className="element" >
                            <Body2>Calculer votre Prime MeChauffer</Body2>
                        </Element>
                    </ButtonPrime>
            </Link>
            <Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500}>
                <ButtonCall onClick={() => setPrime(false)}>
                    <Image src={parain} alt={`call`} width={50} height={50}/>
                    <Element name="test1" className="element" >
                        <Body2>Parrainer un proche</Body2>
                    </Element>
                </ButtonCall>
            </Link>

        </ContentHomeHeaderStyle>
    );
}

export const ValueHomeHeader = () => {
    const themeContext = useContext(ThemeContext)
    
    const cards = [
        {
            image: '/images/homepage_cards/1.png',
            title: 'Changer mon chauffage',
        },
        {
            image: '/images/homepage_cards/2.png',
            title: 'Isoler ma maison',
        },
        {
            image: '/images/homepage_cards/3.png',
            title: 'Passer au solaire',
        },
        {
            image: '/images/homepage_cards/4.png',
            title: 'Cumuler plusieurs primes',
        },
    ];
    
    return (
        <ValueHomeHeaderStyle>
            <Wrapper>
                <H2>Vous souhaitez réaliser des économies d’énergie ?</H2>
                <H3>Nos travaux pour répondre à vos besoins :</H3>
                <CardsStyle>
                    {cards && cards.map((card, index) => {
                        return (
                            <Card key={index} height={18.3} width={18.3}>
                                <Image src={card.image} alt={`logo ${card.title}`} width={60} height={60}/>
                                <Body2>{card.title}</Body2>
                            </Card>
                        )
                    })}
                </CardsStyle>
                <CardLageStyle>
                    <CardLage>
                        <Img src={"/images/homepage_cards/5.png"}/>
                        <Description>
                            <Text>
                                <H4>Isolation des murs</H4>
                                <Body>Votre maison est plus belle et gagne en valeur. </Body>
                            </Text>
                            <ButtonPrimary width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>J’ISOLE MES MURS</ButtonPrimary>
                        </Description>
                    </CardLage>
                    <CardLage>
                        <Img src={"/images/homepage_cards/6.png"}/>
                        <Description>
                            <Text>
                                <H4>Isolation des combles</H4>
                                <Body>Votre maison est plus belle et gagne en valeur. </Body>
                            </Text>
                            <ButtonPrimary width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>J’ISOLE MES COMBLES</ButtonPrimary>
                        </Description>
                    </CardLage>
                </CardLageStyle>
                <CardLageStyle>
                    <CardLage>
                        <Img src={"/images/homepage_cards/7.png"}/>
                        <Description>
                            <Text>
                                <H4>Isolation des sous-sol</H4>
                                <Body>Votre maison est plus belle et gagne en valeur. </Body>
                            </Text>
                            <ButtonPrimary width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>J’ISOLE MES PLANCHES BAS</ButtonPrimary>
                        </Description>
                    </CardLage>
                    <CardLage>
                        <Img src={"/images/homepage_cards/8.png"}/>
                        <Description>
                            <Text>
                                <H4>Passez au double vitrage</H4>
                                <Body>Votre maison est plus belle et gagne en valeur. </Body>
                            </Text>
                            <ButtonPrimary width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>JE PASSE AU DOUBLE VITRAGE</ButtonPrimary>
                        </Description>
                    </CardLage>
                </CardLageStyle>
            </Wrapper>
        </ValueHomeHeaderStyle>
    );
}

export const HomePage = () => {
    const [prime, setPrime] = useState(true);

    return (
        <HomePageWrapper>
            <Hero />
            <ContentWrapper>
                <ContentHomeHeader setPrime={setPrime} />
                {prime ?
                    <ValueHomeHeader /> :
                    <Parain />
                }
                <Partner />
                <ListHome />
                <ContactUs />
            </ContentWrapper>
        </HomePageWrapper>
    );
};

export default HomePage;
