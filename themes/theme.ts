import {createGlobalStyle} from 'styled-components'

import PoppinsBold from '../public/fonts/Poppins-Bold.ttf'
import QuicksandBold from '../public/fonts/Quicksand-Bold.ttf'
import QuicksandSemiBold from '../public/fonts/Quicksand-SemiBold.ttf'
import QuicksandMedium from '../public/fonts/Quicksand-Medium.ttf'

export const appTheme = {
    fonts: {
        poppinsbold: "PoppinsBold",
        quicksandbold: "QuicksandBold",
        quicksandsemibold: "QuicksandSemiBold",
        quicksandmedium: "QuicksandMedium",
    },
    colors: {
        white: "#ffffff",
        black: "#000000",
        typo: "#003250",
        blue1: "#2F80ED",
        blue2: "#F7F9FE",
        blue40: "rgba(55, 73, 87, 0.4)",
        green: "#76C075",
        footer: "#2C3A47",
        logout: "#d11f1f",
        logoutHover: "#ec2e2e",
        primary: "linear-gradient(68.05deg, #18A8BC 15.5%, #6AE14C 121.74%)"
    },
    breakpoints: {
        mobile_reverse: "only screen and (min-width: 580px)",
        mobile: "only screen and (max-width: 600px)",
        medium_reverse: "only screen and (min-width: 600px)",
        landscape: "only screen and (max-width: 576px)",
        tablets: "only screen and (min-width: 768px)",
        tablets_reverse: "only screen and (max-width: 768px)",
        desktops: "only screen and (min-width: 992px)",
        desktops_reverse: "only screen and (max-width: 992px)",
        medium: "only screen and (min-width: 600px) and (max-width: 991px)",
        large: "only screen and (min-width: 1200px)",
        large_reverse: "only screen and (max-width: 1200px)",
        max_desktop: "only screen and (min-width: 1440px)",
        max_desktop_reverse: "only screen and (max-width: 1440px)",
    },
    spacings: {
        xxSmall: ".25rem",
        xSmall: ".5rem",
        small: "1rem",
        xxmedium: "1.5rem",
        xmedium: "1.75rem",
        medium: "2rem",
        large: "3rem",
        xLarge: "4rem",
        xxLarge: "6rem",
        xxxLarge: "6.25rem",
    },
    animations: {
        link: "all 0.3s linear",
    },
    layout: {
        xxLargeScreen: "1800px",
        padding: "120px",
        cards_grid_desktop: 4,
    }
}

export const GlobalStyle: any = createGlobalStyle`
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${PoppinsBold});
  }

  @font-face {
    font-family: 'QuicksandBold';
    src: url(${QuicksandBold});
  }
  
  @font-face {
    font-family: 'QuicksandSemiBold';
    src: url(${QuicksandSemiBold});
  }

  @font-face {
    font-family: 'QuicksandMedium';
    src: url(${QuicksandMedium});
  }

  html {
    font-size: 62.5%;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${appTheme.colors.typo};
    font-family: ${appTheme.fonts.quicksandbold};
    font-style: normal;
    font-weight: 400;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    scroll-behavior:smooth
  }
  
  #__next {
    min-height: 100vh;
    width: 100vw;
  }
`
