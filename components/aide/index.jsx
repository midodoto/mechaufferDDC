import Image from "next/image.js";
import React from 'react';
import styled from "styled-components";
import img1 from "../../public/images/aide/1.png";
import img2 from "../../public/images/aide/2.png";
import img3 from "../../public/images/aide/3.png";
import img4 from "../../public/images/aide/4.png";
import img5 from "../../public/images/aide/5.png";
import ContactTip from "../contact-tip/index.jsx";
import H2 from '../library/typo/h2.jsx';
import H4 from '../library/typo/h4.jsx';
import Body from '../library/typo/body2.jsx';

const AideStyle = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const Hero = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 14rem 12rem 4rem 12rem;
  position: relative;
  border-bottom-right-radius: 4rem;
  border-bottom-left-radius: 4rem;
  margin-bottom: 4rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 14rem 2rem;
    h2 {
      margin-bottom: 2rem;
    }
  }
`;

const Section = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 6rem 12rem;
  h2 {
    padding-bottom: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 3rem 2rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 15rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 3.9rem;
`;

const Ul = styled.ul`
  margin-left: 1.6rem;
`;

const Li = styled.li`
  font-size: 1.6rem;
`;

const Footer = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 1rem 10rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 1rem 0rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const FooterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.blue2};
  border-radius: 4rem;
  padding: 13.6rem 12.8rem;
  h2 {
    margin-bottom: 3.2rem;
  }
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 6rem 2rem;
  }
`;

const Aide = () => {
    return (
        <AideStyle>
            <Hero>
                <H2>Prime MeChauffer</H2>
                <H4>La prime MeChauffer permet aux particuliers (et professionnels) de bénéficier de travaux de d’amélioration énergétique à un prix bas, voir intégralement pris en charge par cette prime. Découvrez comment obtenir votre Prime MeChauffer en avec un accompagnement de A à Z pour connaître les montants, ainsi que les travaux auxquels vous pouvez prétendre !</H4>
                <ContactTip />
            </Hero>
            <Section>
                <H2>Comment est calculé la Prime MeChauffer ?</H2>
                <Flex>
                    <ImageWrapper>
                        <Image src={img1} alt="logo" width={332} height={327}/>
                    </ImageWrapper>
                    <Text>
                        <Body>Le montant déterminé dépend des informations que vous renseignez lors de votre demande de prime. Le montant final de la prime est validé une fois qu’un de nos agents l’aura validé, et seulement si le dossier est complet. Cela ne vous coûte rien, et ne vous engage en rien.</Body>
                        <Body>Le montant de la Prime Me Chauffer va dépendre du volume d’énergie économisé grâce aux futurs travaux, et se calcule en prenant en compte différents critères, à savoir :</Body>
                        <Ul>
                            <Li>Le type de logement (appartement ou maison).</Li>
                            <Li>La superficie de celui-ci.</Li>
                            <Li>L’énergie de chauffage actuelle du logement (énergie principale).</Li>
                            <Li>Le nombre d’habitant du foyer, les revenus ainsi que l’emplacement géographique du logement.</Li>
                            <Li>Le type de travaux envisagés ainsi que les matériaux utilisés.</Li>
                        </Ul>
                    </Text>
                </Flex>
            </Section>
            <Section>
                <H2>Quels types de profils peuvent bénéficier de la Prime MeChauffer ?</H2>
                <Flex>
                    <Text>
                        <Body>Celle-ci est accessible à tous, sans condition de ressources. Vous pouvez en bénéficier pour votre résidence principale comme pour votre résidence secondaire, en étant locataire, comme propriétaire occupant ou bailleur.</Body>
                        <Body>Le dispositif a évolué de sorte à devenir accessible aux ménages les plus modestes, avec une revue à la hausse des montants attribués. Vous pouvez faire plusieurs demandes de Primes MeChauffer pour chaque travaux éligibles que vous souhaitez réaliser dans votre logement.</Body>
                    </Text>
                    <ImageWrapper>
                        <Image src={img2} alt="logo" width={403} height={273}/>
                    </ImageWrapper>
                </Flex>
            </Section>
            <Section>
                <H2>La Prime MeChauffer est-elle cumulable avec d’autres aides ?</H2>
                <Flex>
                    <ImageWrapper>
                        <Image src={img3} alt="logo" width={302} height={302}/>
                    </ImageWrapper>
                    <Text>
                        <Body>Au cours de ces dernières années, les pouvoirs publics ont créé de nombreuses aides. Certaines d’entre elles sont cumulables avec la Prime MeChauffer. A savoir :</Body>
                        <Ul>
                            <Li>MaPrimeRénov’ et MaPrimeRénov’ Sérénité</Li>
                            <Li>l’Éco-Prêt à Taux Zéro (Éco PTZ) </Li>
                            <Li>LaTVAà5,5%</Li>
                            <Li>Les aides de votre localité</Li>
                        </Ul>
                    </Text>
                </Flex>
            </Section>
            <Section>
                <H2>Quelles sont les démarches pour bénéficier de la Prime MeChauffer ?</H2>
                <Flex>
                    <Text>
                        <Ul>
                            <Li>Faire sa demande sur notre site avant de signer un devis de travaux concernant les travaux éligibles</Li>
                            <Li>Nous envoyer le devis sous 15 jours après sa signature</Li>
                            <Li>Faire réaliser les travaux par un artisan RGE</Li>
                            <Li>Nous faire parvenir l’attestation sur l’honneur de fin de travaux, ainsi que la facture sous 30</Li>
                            <Li>jours après sa date d’édition</Li>
                            <Li>Votre Prime MeChauffer est déduite à l’avance pour vos travaux, pas besoin d’avancer les</Li>
                            <Li>frais une fois votre dossier valide !</Li>
                        </Ul>
                    </Text>
                    <ImageWrapper>
                        <Image src={img4} alt="logo" width={403} height={269}/>
                    </ImageWrapper>
                </Flex>
            </Section>
            <Section>
                <H2>Quels types de travaux d’amélioration énergétique sont éligibles ?</H2>
                <Flex>
                    <ImageWrapper>
                        <Image src={img5} alt="logo" width={281} height={281}/>
                    </ImageWrapper>
                    <Text>
                        <Body>Deux types de travaux sont ainsi éligibles à la prime énergie</Body>
                        <Ul>
                            <Li>L’installation d’un système de chauffage (pompe à chaleur, chauffe-eau thermodynamique, chauffe-eau solaire, poêle, chaudière à bois, chaudière à condensation, radiateurs éléctrique</Li>
                            <Li>Les travaux d’isolation : isolation des combles, des murs, du sol, de la toiture-terrasse ou remplacement des fenêtres (double vitrage, triple vitrage ou Velux) ;</Li>
                            <Li>Le remplacement ou l’installation d’un système de VMC.</Li>
                        </Ul>
                    </Text>
                </Flex>
            </Section>
            <Footer>
                <FooterWrapper>
                    <H2>Logements de moins de deux ans non-éligibles ?</H2>
                    <Body>Le logement concerné par les travaux doit avoir été construit plus de 2 ans avant la date de signature de quelconque devis. Certains travaux ne sont éligibles à la Prime MeChauffer uniquement dans le cas où ils sont réalisés dans une maison individuelle (par exemple l’installation d’un poêle à bois, d’un chauffe-eau thermodynamique ou solaire, d’une chaudière biomasse ou l’installation d’un système solaire combiné).</Body>
                </FooterWrapper>
            </Footer>
        
        </AideStyle>
    );
};

export default Aide;
