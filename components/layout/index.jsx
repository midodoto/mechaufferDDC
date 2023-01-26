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
    return (
        <LayoutWrapper>
            <HeaderSticky>
                <Header />
            </HeaderSticky>
            {children}
            <Footer />
        </LayoutWrapper>
    );
};

export default Layout;
