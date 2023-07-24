import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import H2 from '../library/typo/h2.jsx';
import Body from '../library/typo/body1.jsx';
import Body2 from '../library/typo/body2.jsx';
import Body3 from '../library/typo/body3.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import {DemandesList} from './demandes.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import {getDevisByUserId} from '../../config/firebase.js';
import { useAuth } from '../../context/AuthContext'
import Recompense from './recompenses.jsx';
import 'swiper/css';

const TableauDeBordStyle = styled.div`
    max-width: 900px;
`;

const Button = styled.div`
    cursor: pointer;
`;

const FlexPoints = styled.div`
    display: flex;
    gap: 2rem;
`;

const Numbers = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: white;
    border-radius: 12px;
    padding: 2.2rem 1.6rem;
`;

const Flex = styled.div`
    cursor: pointer;
`;

const XCP = styled.h2`
    margin-top: -1rem;
    background: ${({ theme }) => (theme.colors.primary)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const DemandesWrapper = styled.div`
max-width: ${({theme}) => theme.layout.xxLargeScreen};
margin: auto;
margin-top: 4rem;
padding: 3rem 4rem;
background: ${({ theme }) => theme.colors.white};
border-radius: 1.2rem;
@media ${({ theme }) => theme.breakpoints.tablets_reverse} {
  padding: 7rem 2rem;
}
box-shadow: -5.183431625366211px 3.4556212425231934px 14.686389923095703px 0px rgba(176, 186, 192, 0.20);
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 3rem;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    gap: 1rem;
`
const Number = styled.div`
font-size: 1.4rem;
background: ${({ theme }) => (theme.colors.primary)};
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-align: center;
`

const Image = styled.div`
    height: 80px;
    background-image: url('${({src}) => src}');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`

const Description = styled.div`
`

const ProgressBar = styled.div`
margin-top: 3rem;
border-radius: 50px;
background: #AFB6BC;
height: 6px;
`

const FlexXCP = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between
`;



const TableauDeBord = ({ user, demandes }) => {

    const [link, setLink] = useState(`https://me-chauffer.vercel.app/?tokenParrain=${user.uid}`)

    return (
        <TableauDeBordStyle>
            <FlexPoints>
            <Numbers>
                <Flex>
                    <H2>0</H2>
                    <XCP>XCP</XCP>
                </Flex>
                <Body>Points acquis</Body>
            </Numbers>
            <Numbers>
                <Flex>
                    <H2>0</H2>
                    <XCP>XCP</XCP>
                </Flex>
                <Body>Points acquis</Body>
            </Numbers>
            <Numbers>
                <Flex>
                    <H2>0</H2>
                    <XCP>XCP</XCP>
                </Flex>
                <Body>Points acquis</Body>
            </Numbers>
            </FlexPoints>
            <Recompense demandes={demandes}/>

            {/* <Button>
            <p onClick={() => {navigator.clipboard.writeText(link)}}>Lien d`affiliation (Cliquer pour copier le lien): {link}</p>

            </Button> */}
        </TableauDeBordStyle>
    );
};

export default TableauDeBord;
