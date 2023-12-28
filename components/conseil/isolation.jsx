import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import quisommesnous from '../../public/images/aide/2.png';
import ContactTip from '../contact-tip/index.jsx';
import H1 from '../library/typo/h1.jsx';
import H2 from '../library/typo/h2.jsx';
import H4 from '../library/typo/h4.jsx';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body1.jsx';
import Body2 from '../library/typo/body2.jsx';
import BodyMed from '../library/typo/body-med';
import Link from 'next/link.js';
import ButtonPrimary from '../library/button/primary';

const QuiSommesNousStyle = styled.div`
  min-height: 100vh;
`;

const Description = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 20rem;
  h4 {
    opacity: 0.2;
    margin-bottom: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const NosSolution = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

const Block = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
`;

const HeroStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 0rem 12rem;
  position: relative;
  min-height: calc(50vh);

  background-color: #374957;

  // background-image: url(${quisommesnous.src});
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  button {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    margin-left: -130px;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 0rem 2rem;
    button {
      position: relative;
      margin: unset;
      margin-top: 4rem;
      bottom: unset;
      left: unset;
    }
  }
`;

const HeroWrapper = styled.div`
  position: relative;
  h2 {
    padding-top: 10rem;
  }
  h1 {
    padding-top: 12rem;
    max-width: 80rem;
  }
  h3 {
    padding-top: 1.4rem;
    max-width: 50rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    h1 {
      font-size: 4rem;
      line-height: 5rem;
    }
    h3 {
      padding-bottom: 8.4rem;
    }
  }
`;

const ConseilStyle = styled.div`
  min-height: 100vh;
`;

const Section1 = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  h2 {
    text-align: center;
  }
`;

const Section2 = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .subtitle {
    text-align: center;
  }
`;

const Section3 = styled.div``;

const Section4 = styled.div`
  h2 {
    margin-top: 5rem;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 7rem 12rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem;
  }
`;

const Mur = styled.div`
  margin-top: 8rem;
`;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 40px;
  padding: 4.7rem 7.7rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 4.7rem 2rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainImage = styled.div`
  height: 29rem;
  width: 100%;
  border-radius: 1.2rem;
  background-image: url(${quisommesnous.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 4rem;
  margin-bottom: 7rem;
`;

const ListImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 4rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
  }
`;

const TallImage = styled.div`
  height: 33rem;
  border-radius: 1.2rem;
  background-image: url(${quisommesnous.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SmallImage = styled.div`
  height: 15rem;
  border-radius: 1.2rem;
  background-image: url('${({ src }) => src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContentImage = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainImageWrapper = styled.div`
  position: relative;
`;

const Tip = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40rem;
  bottom: -4rem;
  left: -2rem;
  border-radius: 1.2rem;
  background-color: white;
  padding: 2rem 3rem;
`;

const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1.2rem;
  background-color: white;
  padding: 2rem 3rem;
  box-shadow: -6px 15px 17px 0px rgba(47, 128, 237, 0.08);
`;

const ListIsolation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 6rem 0 10rem 0;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10rem;
  margin-top: 4rem;
  align-items: center;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    gap: 4rem;
  }
`;
const Block1 = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: #f1f5ff;
  flex: 1;
  box-shadow: -5.18343px 3.45562px 14.68639px 0px rgba(176, 186, 192, 0.2);
  p {
    margin-bottom: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
`;
const Block2 = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: #f1f5ff;
  flex: 1;
  box-shadow: -5.18343px 3.45562px 14.68639px 0px rgba(176, 186, 192, 0.2);
  margin-top: 8rem;
  p {
    margin-bottom: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    margin-top: 0;
    width: 100%;
  }
`;
const Block3 = styled.div`
  padding: 2rem;
  border-radius: 1.2rem;
  background-color: #f1f5ff;
  flex: 1;
  box-shadow: -5.18343px 3.45562px 14.68639px 0px rgba(176, 186, 192, 0.2);
  p {
    margin-bottom: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    width: 100%;
  }
`;

const Work1 = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  a {
    align-self: center;
  }
`;

const Work2 = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  a {
    align-self: center;
  }
`;

const Work3 = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  a {
    align-self: center;
  }
`;

const Work4 = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-items: center;
  justify-content: space-between;
  a {
    align-self: center;
  }
`;

const TypeWorks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  margin-top: 4rem;
  background-color: #f1f5ff;
  border-radius: 1.2rem;
  padding: 4rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    padding: 2rem;
  }
`;

const ImgWrapper = styled.div`
  padding: 1rem 1rem;
  background-color: #ffffff;
  border-radius: 1.2rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hero = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeroStyle>
      <HeroWrapper>
        <H2 color={'#FFFFFF'}>
          Jusqu’à 25% d’économies
          <br />
          en isolant vos murs !
        </H2>
        <Body color={'#FFFFFF'}>Profitez de notre offre ...</Body>
      </HeroWrapper>
    </HeroStyle>
  );
};

const Conseil = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <ConseilStyle>
      <Hero />
      <Content>
        <Section1>
          <H2>Comment bien choisir son isolation ?</H2>
          <TypeWorks>
            <Work1>
              <ImgWrapper>
                <SmallImage src="/images/conseil/1.png" />
              </ImgWrapper>
              <Body>Isolation du sol</Body>
              <BodyMed>Retrouvez tous nos conseils concernant l'isolation du sol</BodyMed>
              <Link href="/travaux/isolation-du-sol">
                <ButtonPrimary
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  En savoir plus
                </ButtonPrimary>
              </Link>
            </Work1>
            <Work2>
              <ImgWrapper>
                <SmallImage src="/images/conseil/2.png" />
              </ImgWrapper>
              <Body>Isolation des combles</Body>
              <BodyMed>Retrouvez tous nos conseils concernant l’isolation des combles.</BodyMed>
              <Link href="/travaux/isolation-des-combles">
                <ButtonPrimary
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  En savoir plus
                </ButtonPrimary>
              </Link>
            </Work2>
            <Work3>
              <ImgWrapper>
                <SmallImage src="/images/conseil/3.png" />
              </ImgWrapper>
              <Body>Isolation des murs</Body>
              <BodyMed>Retrouvez tous nos conseils concernant l’isolation des murs.</BodyMed>
              <Link href="/travaux/isolation-des-murs">
                <ButtonPrimary
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  En savoir plus
                </ButtonPrimary>
              </Link>
            </Work3>
            <Work4>
              <ImgWrapper>
                <SmallImage src="/images/conseil/4.png" />
              </ImgWrapper>
              <Body>Remplacement des fenêtres</Body>
              <BodyMed>Retrouvez tous nos conseils concernant le remplacement des fenêtres.</BodyMed>
              <Link href="/travaux/remplacement-des-fenetres">
                <ButtonPrimary
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  En savoir plus
                </ButtonPrimary>
              </Link>
            </Work4>
          </TypeWorks>
        </Section1>
        <Section2>
          <H2>
            Un conseiller MeChauffer, <br />
            expert en amélioration énergétique à votre écoute
          </H2>
          <Body className="subtitle">
            N’hésitez donc pas à nous solliciter afin de profiter de ses conseils tout au long de votre accompagnement !
          </Body>
          <Flex>
            <Block1>
              <Body>Conseil et choix des travaux à réaliser</Body>
              <SmallImage src="/images/conseil/5.png" />
            </Block1>
            <Block2>
              <Body>Éligibilité et visite technique</Body>
              <SmallImage src="/images/conseil/6.png" />
            </Block2>
            <Block3>
              <Body>Planification des travaux</Body>
              <SmallImage src="/images/conseil/7.png" />
            </Block3>
          </Flex>
        </Section2>
        {/* <Section1>
          <H1>Comment bien isoler son logement ?</H1>
          <H4>
            Gaspillez-vous votre argent et votre énergie à cause d`une mauvaise isolation ? L`isolation des combles
            permet d`économiser jusqu`à 500€/an sur votre facture d`énergie. Et pour de meilleurs résultats, vous pouvez
            aussi isoler vos murs et votre sol. Voici tous nos conseils.
          </H4>
        </Section1>
        <Section2>
          <Mur>
            <Wrapper>
              <H2>L`isolation des murs permet de réduire entre 20% et 25% des pertes de chaleur dans un logement</H2>
              <H4>En isolant vos murs, vous réduisez donc considérablement vos factures de chauffage, jusqu`à 25%.</H4>
              <MainImageWrapper>
                <MainImage />
                <Tip>
                  <Body>#Isolation des murs</Body>
                  <Body2>Tout savoir sur l`isolation des murs extérieurs</Body2>
                </Tip>
              </MainImageWrapper>
              <ListImages>
                <ContentImage>
                  <SmallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>7 bonnes raisons de faire isoler vos murs par l`extérieur</Body>
                </ContentImage>
                <ContentImage>
                  <TallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>Combien coûte l`isolation des murs par l`extérieur ?</Body>
                </ContentImage>
                <ContentImage>
                  <SmallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>Quels matériaux pour l`isolation des murs par l`extérieur ?</Body>
                </ContentImage>
                <ContentImage>
                  <TallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>faut-il isoler ses murs par l`intérieur ou par l`extérieur</Body>
                </ContentImage>
              </ListImages>
              <ButtonWrapper>
                <ButtonPrimary
                  width={'26rem'}
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  J’ISOLE MES MURS
                </ButtonPrimary>
              </ButtonWrapper>
            </Wrapper>
          </Mur>
        </Section2>
        <Section3>
          <Mur>
            <Wrapper>
              <H2>L’isolation des combles est un choix de rénovation énergétique à prioriser.</H2>
              <H4>
                En effet, jusqu’à 30 % des pertes de chaleur se font par la toiture. Cette isolation est donc celle qui
                permet de faire le plus d’économies d’énergie.
              </H4>
              <MainImageWrapper>
                <MainImage />
                <Tip>
                  <Body>#Isolation des murs</Body>
                  <Body2>Tout savoir sur l’isolation des murs extérieurs</Body2>
                </Tip>
              </MainImageWrapper>
              <ListImages>
                <ContentImage>
                  <SmallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>7 bonnes raisons de faire isoler vos murs par l’extérieur</Body>
                </ContentImage>
                <ContentImage>
                  <TallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>Combien coûte l’isolation des murs par l’extérieur ?</Body>
                </ContentImage>
                <ContentImage>
                  <SmallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>Quels matériaux pour l’isolation des murs par l’extérieur ?</Body>
                </ContentImage>
                <ContentImage>
                  <TallImage />
                  <Body>#Isolation des murs</Body>
                  <Body>faut-il isoler ses murs par l’intérieur ou par l’extérieur</Body>
                </ContentImage>
              </ListImages>
              <ButtonWrapper>
                <ButtonPrimary
                  width={'26rem'}
                  bgColor={themeContext.colors.primary}
                  hoverBgColor={themeContext.colors.primary}
                  hoverColor={themeContext.colors.white}
                >
                  J’ISOLE MES MURS
                </ButtonPrimary>
              </ButtonWrapper>
            </Wrapper>
          </Mur>
        </Section3>
        <Section4>
          <H2>Comment bien isoler ses combles</H2>
          <ListIsolation>
            <Card>
              <Body2>Validation de projet</Body2>
              <BodyMed>
                Un conseiller vous contactpar téléphone, et s`assureavec vous de la pertinence de votre projet
              </BodyMed>
            </Card>
            <Card>
              <Body2>Visite technique</Body2>
              <BodyMed>Un visiteur technique se déplace chez vous pour s`assurer de la faisabilité des travaux</BodyMed>
            </Card>
            <Card>
              <Body2>Signature du devis</Body2>
              <BodyMed>Vous signez le devis sur votre espace client !</BodyMed>
            </Card>
            <Card>
              <Body2>Travaux réalisés</Body2>
              <BodyMed>c`est parti, on planifie une date pour vos travaux et on les réalise</BodyMed>
            </Card>
          </ListIsolation>
        </Section4> */}
      </Content>
    </ConseilStyle>
  );
};

export default Conseil;
