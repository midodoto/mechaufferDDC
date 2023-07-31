import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import quisommesnous from '../../public/images/quisommesnous.jpg';
import ContactTip from '../contact-tip/index.jsx';
import H1 from '../library/typo/h1.jsx';
import H2 from '../library/typo/h2.jsx';
import H4 from '../library/typo/h4.jsx';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body1.jsx';
import Link from 'next/link.js';

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

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 40px;
  padding: 4.7rem 7.7rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 4.7rem 2rem;
  }
  h2 {
    text-align: center;
    margin-bottom: 8.8rem;
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
  min-height: calc(70vh);
  background-image: url(${quisommesnous.src});
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
    padding: 0rem 2rem;
    h1 {
      font-size: 4rem;
      line-height: 5rem;
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
        <ContactTip />
      </HeroWrapper>
    </HeroStyle>
  );
};

const QuiSommesNous = () => {
  return (
    <QuiSommesNousStyle>
      <Hero />
      <Description>
        <H2>Date de création</H2>
        <H4 fontSize={2.2}>19/12/2019</H4>
        <Body>
          Nous proposons diverses solutions pour la rénovation énergétique. L&apos;équipe Mechauffer s&apos;est donnée
          pour objectif principal de permettre à tous les particuliers d&apos;accéder à l’indépendance énergétique.
          Notre accompagnement permet de faciliter les démarches administratifs de tous les profils, et ainsi informer
          les bénéficiaires de leurs droits.
        </Body>
        <br />
        <Body>
          Dans cette optique, nous recommandons à chaque foyer les solutions permettant l&apos;amélioration énergétique
          la plus adéquate au logement concerné.
        </Body>
        <br />
        <Body>
          L&apos;écologie et réchauffement climatique sont au cœur de nos préoccupations. C&apos;est pour cela qu&apos;à
          chaque installation réalisée, nous nous engageons à planter 10 arbres grâce à notre partenaire Planete Urgence
          (mettre lien). C’est le moment d’agir et mettre toutes nos ressources en œuvres pour l’environnement.
        </Body>
      </Description>
      <NosSolution>
        <Wrapper>
          <H2>Nos solutions pour répondre á tous vos besoins</H2>
          <Grid>
            <Block>
              <H3>Catégorie Chauffage traditionnel</H3>
              <Link href={'devis'}>
                <Body>Chaudière fioul à condensation</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Chaudière gaz à condensation</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Radiateur électrique</Body>
              </Link>
            </Block>
            <Block>
              <H3>Catégorie Pompe à chaleur</H3>
              <Link href={'devis'}>
                <Body>Pompe à chaleur Air/Eau</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Pompe à chaleur géothermique</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Climatisation réversible (Pompe à chaleur Air/Air)</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Pompe à chaleur hybride</Body>
              </Link>
            </Block>
            <Block>
              <H3>Catégorie Chauffage Bois</H3>
              <Link href={'devis'}>
                <Body>Chaudière à bois (granulés ou bûches)</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Poêle à bois (granulés ou bûches)</Body>
              </Link>
            </Block>
            <Block>
              <H3>Catégorie Isolation</H3>
              <Link href={'devis'}>
                <Body>Isolation des combles</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Isolation des murs</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Isolation du sol</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Fenêtres/portes-fenêtres</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Isolation de toits-terrasses</Body>
              </Link>
              <Link href={'devis'}>
                <Body>VMC double flux</Body>
              </Link>
            </Block>
            <Block>
              <H3>Chauffe-Eau</H3>
              <Link href={'devis'}>
                <Body>Chauffe-eau thermodynamique</Body>
              </Link>
              <Link href={'devis'}>
                <Body>Chauffe-eau solaire individuel</Body>
              </Link>
            </Block>
          </Grid>
        </Wrapper>
      </NosSolution>
    </QuiSommesNousStyle>
  );
};

export default QuiSommesNous;
