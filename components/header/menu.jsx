import React, {useEffect, useContext} from 'react'
import styled, {ThemeContext} from 'styled-components'
import Link from "next/link.js";
import ButtonConnexion from "../library/button/connexion.jsx";
import ButtonPrimary from "../library/button/primary.jsx";
import Body1 from '../library/typo/body1.jsx';

import logoImg from '../../public/images/logo.svg'
import cancelImg from '../../public/images/cancel.svg'
import twitterImg from '../../public/images/twitter.svg'
import linkedinImg from '../../public/images/linkedin.svg'


const Menu = ({path, display, click, setDisplay}) => {
    
    const themeContext = useContext(ThemeContext)
    
    useEffect(() => {
        document.getElementsByClassName('slidein').style = "@-webkit-keyframes slidein {0% {left: 100%;, webkit-transform: scaleX(0);}100% {left: 0;, webkit-transform: scaleX(1);}}"
        document.getElementsByClassName('slideout').style = "@-webkit-keyframes slideout {from {display : block;left: 0;}to {left: 100%;, webkit-transform: scaleX(1);display : none;}}"
    })
    
    const dismissMenu = (path, link) => {
            setDisplay(false)
    }
    
    return (
        <MenuWrapper>
            <MenuStyle className={`${display && click ? 'slidein' : !display && click ? 'slideout' : 'hidden'}`}>
                {/*<HeaderStyle>*/}
                {/*    <Link href={'/'}>*/}
                {/*        <LogoStyle></LogoStyle>*/}
                {/*    </Link>*/}
                {/*    <CancelStyle onClick={() => setDisplay(false)}></CancelStyle>*/}
                {/*</HeaderStyle>*/}
                <NavStyle>
                    <ListStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/nos-offres')}>
                                <Link href={'/nos-offres'}>
                                    <Body1 disable={path !== '/nos-offres'} color={path === '/nos-offres' ? themeContext.colors.primary : themeContext.colors.black}>Nos offres</Body1>
                                </Link>
                        </ElemStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/aide')}>
                            <Link href={'/aide'}>
                                <Body1 disable={path !== '/aide'} color={path === '/aide' ? themeContext.colors.primary : themeContext.colors.black}>Aide financière</Body1>
                            </Link>
                        </ElemStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/conseil')}>
                            <Link href={'/conseil'}>
                                <Body1 disable={path !== '/conseil'} color={path === '/conseil' ? themeContext.colors.primary : themeContext.colors.black}>Conseil travaux</Body1>
                            </Link>
                        </ElemStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/qui-sommes-nous')}>
                            <Link href={'/qui-sommes-nous'}>
                                <Body1 disable={path !== '/qui-sommes-nous'} color={path === '/qui-sommes-nous' ? themeContext.colors.primary : themeContext.colors.black}>Qui sommes-nous</Body1>
                            </Link>
                        </ElemStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/login')}>
                            <Link href={'/login'} >
                                <ButtonConnexion>Connexion</ButtonConnexion>
                            </Link>
                        </ElemStyle>
                        <ElemStyle onClick={() => dismissMenu(path, '/devis')}>
                            <Link href={'/devis'}>
                                <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>DEMANDER UN DEVIS</ButtonPrimary>
                            </Link>
                        </ElemStyle>
                    </ListStyle>
                </NavStyle>
                {/*<SocialsStyle>*/}
                {/*    <a href="https://twitter.com/MedadTech"><TwitterImage></TwitterImage></a>*/}
                {/*    <a href="https://www.linkedin.com/company/medad-technology"><LinkedinImage></LinkedinImage></a>*/}
                {/*</SocialsStyle>*/}
            </MenuStyle>
        </MenuWrapper>
    )
}

export default Menu

const MenuStyle = styled.div`
  height: calc(100vh - 8.8rem);
  position: fixed;
  width: 100%;
  overflow-y: hidden;
  z-index: 5;
  background-color: white;
  left: 0;
  top: 8.8rem;
`

const HeaderStyle = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
`

const LogoStyle = styled.div`
  width: 4.4rem;
  height: 2.47rem;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
`

const CancelStyle = styled.div`
  //text-decoration: none;
  //border: none;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${cancelImg});
  background-repeat: no-repeat;
  background-size: contain;
`

const NavStyle = styled.div`
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
`

const ListStyle = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.1rem;
  margin-top: 6rem;
`

const ElemStyle = styled.li`
  .link {
    color: #ffffff;
    opacity: .6;
  }
  
  .white {
      opacity: 1;
  }

  .active {
    opacity: 1;
    padding: 1.5rem 0;
    position: relative;
    color: red;
    width: fit-content;
    font-size: 1.8rem;
  }
  .active:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      background: ${({theme}) => theme.colors.white};
      visibility: visible;
      transform: scaleX(1);
      transition: .25s linear;
    }
`

const SocialsStyle = styled.div`
  position: absolute;
  bottom: 10.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: .8rem;
`

const TwitterImage = styled.div`
  background-image: url(${twitterImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 3.8rem;
  height: 3.8rem;
`

const LinkedinImage = styled.div`
  background-image: url(${linkedinImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 3.8rem;
  height: 3.8rem;
`

const MenuWrapper = styled.div`
  position: absolute;
  .slidein {
    display : block;
    animation: slidein .6s;
    -moz-animation: slidein .6s; /* Firefox */
    -webkit-animation: slidein .6s; /* Safari and Chrome */
    -o-animation: slidein .6s; /* Opera */

    @keyframes slidein {
      0% {
        left: 100%;
        , webkit-transform: scaleX(0);
      }
      100% {
        left: 0;
      , webkit-transform: scaleX(1);

      }
    }
    @-moz-keyframes slidein { /* Firefox */
      0% {
        left: 100%;
                , webkit-transform: scaleX(0);

      }
      100% {
        left: 0;
      , webkit-transform: scaleX(1);

      } }
    //@-webkit-keyframes slidein { /* Safari and Chrome */
    //  0% {
    //    left: 100%;
    //            , webkit-transform: scaleX(0);
    //  }
    //  100% {
    //    left: 0;
    //  , webkit-transform: scaleX(1);
    //  }
    //}
    @-o-keyframes slidein { /* Opera */
      0% {
        left: 100%;
      }
      100% {
        left: 0;
      // , webkit-transform: scaleX(1);

      }
    }
  }

  .hidden {
    display : none;
  }

  .slideout {
    animation: slideout .6s;
    -moz-animation: slideout .6s; /* Firefox */
    -webkit-animation: slideout .6s; /* Safari and Chrome */
    -o-animation: slideout .6s; /* Opera */
    left: 100%;
    @keyframes slideout {
      from {
        display : block;
        left: 0;
      }
      to {
        left: 100%;
      , webkit-transform: scaleX(1);
        display : none;
      }
    }
    @-moz-keyframes slideout { /* Firefox */
      from {
        display : block;
        left: 0;
      }
      to {
        left: 100%;
      , webkit-transform: scaleX(1);
        display : none;
      }
    }
    //@-webkit-keyframes slideout { /* Safari and Chrome */
    //  from {
    //    display : block;
    //    left: 0;
    //  }
    //  to {
    //    left: 100%;
    //  , webkit-transform: scaleX(1);
    //    display : none;
    //  }
    //}
    @-o-keyframes slideout { /* Opera */
      from {
        display : block;
        left: 0;
      }
      to {
        left: 100%;
      , webkit-transform: scaleX(1);
        display : none;
      }
    }
  }`
