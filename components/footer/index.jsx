import Image from "next/image.js";
import Link from "next/link.js";
import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import logoWhite from "../../public/images/logoWhite.svg";
import H2 from '../library/typo/h2.jsx';
import H4 from '../library/typo/h4.jsx';
import BodyMed from '../library/typo/body-med.jsx'

const FooterStyle = styled.div`
  background: ${({theme}) => theme.colors.footer};
  //margin-top: -4rem;
`;

const FooterWrapper = styled.div`
  max-width: ${({theme}) => theme.layout.xxLargeScreen};
  margin: auto;
  padding: 10rem 12rem 1.6rem 12rem;
  display: flex;
  justify-content: space-between;
  margin-top: -4rem;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    margin-bottom: 13.3rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  h2 {
    margin-top: -1.6rem;
  }
`;

const Copyright = styled.div`
  p {
    opacity: 0.2;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

const L1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const L2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const L3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;


const Footer = () => {
    const themeContext = useContext(ThemeContext)
    return (
        <FooterStyle>
            <FooterWrapper>
                <Left>
                    <Link href={'/'}>
                        <Image src={logoWhite} alt="logo" width={126} height={32}/>
                    </Link>
                    <H4 color={themeContext.colors.white}>Appelez-nous</H4>
                    <BodyMed color={themeContext.colors.white}>06.55.38.97.32</BodyMed>
                    <BodyMed color={themeContext.colors.white}>Me.chauffer@gmail.com</BodyMed>
                </Left>
                <Right>
                    <H2 color={themeContext.colors.white}>N1 de la renovation energetique en ligne</H2>
                    <List>
                        <L1>
                            <H4 color={themeContext.colors.white}>Info</H4>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nous connaître</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Notre mission</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Ils parlent de nous</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nos engagements</BodyMed>
                            </Link>
                        </L1>
                        <L2>
                            <H4 color={themeContext.colors.white}>Info</H4>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nous connaître</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Notre mission</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Ils parlent de nous</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nos engagements</BodyMed>
                            </Link>
                        </L2>
                        <L3>
                            <H4 color={themeContext.colors.white}>Info</H4>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nous connaître</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Notre mission</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Ils parlent de nous</BodyMed>
                            </Link>
                            <Link href={'/'}>
                                <BodyMed color={themeContext.colors.white}>Nos engagements</BodyMed>
                            </Link>
                        </L3>
                    </List>
                    <Copyright>
                        <BodyMed color={themeContext.colors.white}>2022 © MeChauffer.com - Tous droits
                            réservés</BodyMed>
                    </Copyright>
                </Right>
            </FooterWrapper>
        </FooterStyle>
    );
};

export default Footer;
