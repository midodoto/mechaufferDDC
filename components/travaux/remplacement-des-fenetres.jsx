import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import H2 from '../library/typo/h2';
import H3 from '../library/typo/h3';
import Body from '../library/typo/body1';
import Image from 'next/image';
import img1 from '../../public/images/conseil/detail-page/1.png';
import img2 from '../../public/images/conseil/detail-page/2.png';
import img3 from '../../public/images/conseil/detail-page/3.png';
import img4 from '../../public/images/conseil/detail-page/4.png';
import img55 from '../../public/images/conseil/detail-page/55.png';
import img6 from '../../public/images/conseil/detail-page/6.png';
import img7 from '../../public/images/conseil/detail-page/7.png';
import img8 from '../../public/images/conseil/detail-page/8.png';

const RemplacementDesFenetresStyle = styled.div``;
const HeroStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 0rem 12rem;
  position: relative;
  min-height: calc(30vh);

  background-color: #f7f9fe;

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

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 6rem 12rem 6rem 12rem;
  h2 {
    font-size: 2.6rem;
    line-height: 3.2rem;
    margin-bottom: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 6rem 2rem 6rem 2rem;
  }
`;
const Flex = styled.div`
  display: flex;
  gap: 8rem;
  padding: 4rem 0;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    padding: 2rem 0;
  }
`;
const FlexReverse = styled.div`
  display: flex;
  gap: 8rem;
  padding: 4rem 0;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column-reverse;
    padding: 2rem 0;
  }
`;
const Img = styled.div`
  flex: 0.5;
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Hero = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <HeroStyle>
      <HeroWrapper>
        <H2>Conseils travaux</H2>
      </HeroWrapper>
    </HeroStyle>
  );
};

const RemplacementDesFenetres = () => {
  return (
    <RemplacementDesFenetresStyle>
      <Hero />
      <Wrapper>
        <Flex>
          <Img>
            <H2>Remplacement des fenetres</H2>
            <H3>Explication de l'intérêt de remplacer ses fenêtres</H3>
            <Image src={img1} alt="logo" width={220} height={220} />
          </Img>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
        </Flex>
        <FlexReverse>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
          <Img>
            <H2>Types de fenêtres et caractéristiques</H2>
            <Image src={img2} alt="logo" width={220} height={220} />
          </Img>
        </FlexReverse>
        <Flex>
          <Img>
            <H2>Processus d'installation</H2>
            <Image src={img3} alt="logo" width={220} height={220} />
          </Img>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
        </Flex>
        <FlexReverse>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
          <Img>
            <H2>Avantages de l'isolation du sol pour la consommation d'énergie et le confort thermique</H2>
            <Image src={img4} alt="logo" width={220} height={220} />
          </Img>
        </FlexReverse>
        <Flex>
          <Img>
            <H2>Coûts et économies potentielles</H2>
            <Image src={img55} alt="logo" width={220} height={220} />
          </Img>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
        </Flex>
        <FlexReverse>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
          <Img>
            <H2>Des références de renommée...</H2>
            <Image src={img6} alt="logo" width={220} height={220} />
          </Img>
        </FlexReverse>
        <Flex>
          <Img>
            <H2>Nos engagements</H2>
            <Image src={img7} alt="logo" width={220} height={220} />
          </Img>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
        </Flex>
        <FlexReverse>
          <Text>
            <Body>
              L'isolation du sol est une étape importante dans l'amélioration de l'efficacité énergétique de votre
              maison. En effet, environ 10% de la chaleur d'une maison s'échappe par le sol, ce qui peut représenter une
              perte significative d'énergie et donc de l'argent.
            </Body>
            <Body>
              Isoler le sol permet de réduire les pertes de chaleur et d'améliorer le confort thermique de votre maison.
              De plus, l'isolation du sol peut également contribuer à réduire l'humidité et à empêcher la formation de
              moisissures et de champignons, en créant une barrière entre le sol froid et l'air chaud de la maison.{' '}
            </Body>
            <Body>
              Enfin, isoler le sol peut également améliorer l'acoustique de votre maison en réduisant la propagation des
              bruits d'impact et des bruits de pas. En somme, l'isolation du sol est une solution efficace pour
              améliorer le confort thermique et acoustique de votre maison tout en réduisant vos coûts d'énergie.
            </Body>
          </Text>
          <Img>
            <H2>Un accompagnement de A à Z gratuit, rejoignez la parade verte !</H2>
            <Image src={img8} alt="logo" width={220} height={220} />
          </Img>
        </FlexReverse>
      </Wrapper>
    </RemplacementDesFenetresStyle>
  );
};

export default RemplacementDesFenetres;
