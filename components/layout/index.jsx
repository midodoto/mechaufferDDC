import {useRouter} from "next/router.js";
import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const LayoutWrapper = styled.div`
    position: relative;
`;

const HeaderSticky = styled.div`
  height: 9rem;
  width: 100%;
  position: sticky;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
`;

const Layout = ({ children }) => {
    const router = useRouter();
    
    return (
        <LayoutWrapper>
            <HeaderSticky>
                <Header />
            </HeaderSticky>
            {children}
            {router.pathname !== '/devis' &&
                <Footer/>
            }
        </LayoutWrapper>
    );
};

export default Layout;
