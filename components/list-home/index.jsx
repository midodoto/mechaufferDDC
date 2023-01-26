import Image from "next/image.js";
import React, {useContext} from 'react';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body1.jsx';
import styled, {ThemeContext} from "styled-components";
import img1 from "../../public/images/homepage_cards/9.png";
import img2 from "../../public/images/homepage_cards/10.png";
import img3 from "../../public/images/homepage_cards/11.png";
import img4 from "../../public/images/homepage_cards/12.png";

const ListHomeStyle = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 10rem 12rem 1.6rem 12rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 4rem 2rem 1.6rem 2rem;
  }
`;

const Left = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12.4rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const Li = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  img {
    align-self: center;
  }
`;

const ListHomeWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue2};
  border-radius: 4rem;
  padding: 7rem 18rem 7rem 18rem;
  @media ${({ theme }) => theme.breakpoints.tablets_reverse} {
    padding: 7rem 2rem 7rem 2rem;
  }
`;

export const ListHome = () => {
    const themeContext = useContext(ThemeContext)
    
    return (
        <ListHomeStyle>
            <ListHomeWrapper>
                <Left>
                    <Li>
                        <Image src={img1} alt={`logo`} width={91} height={91}/>
                        <H3>Des Partenaires séléctionnés soigneusement</H3>
                        <Body>Tous nos partenaires détiennent le label RGE (Reconnu Garant de l’Environnement), une enquête de satisfaction est effectuée par nos soins pour chaque réalisation.</Body>
                    </Li>
                    <Li>
                        <Image src={img2} alt={`logo`} width={91} height={91}/>
                        <H3>Chantiers contrôlés</H3>
                        <Body>Toutes nos réalisations sont obligatoirement contrôlées par des organismes accrédités COFRAC par l’état.</Body>
                    </Li>
                    <Li>
                        <Image src={img3} alt={`logo`} width={91} height={91}/>
                        <H3>Un accompagnement de A à Z</H3>
                        <Body>Un de nos agents vous accompagnera dans vos démarches administratives, ainsi que tout au long de votre projet.</Body>
                    </Li>
                    <Li>
                        <Image src={img4} alt={`logo`} width={91} height={91}/>
                        <H3>Les meilleures primes négociées </H3>
                        <Body>Que nous faisons notre maximum pour leurs décrocher les meilleurs montants d’aide sur le marché étant donné que cela varie selon le partenaire financier</Body>
                    </Li>
                </Left>
            </ListHomeWrapper>
        </ListHomeStyle>
    );
}

export default ListHome;
