import { useRouter } from 'next/router.js';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TokenActions } from '../../store';

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
  const dispatch = useDispatch();
  const { TokenParrain, TokenPartenaire } = bindActionCreators(TokenActions, dispatch);

  useEffect(() => {
    if (router.query?.tokenParrain) {
      TokenParrain(router.query?.tokenParrain);
    }
    if (router.query?.tokenPartenaire) {
      TokenPartenaire(router.query?.tokenPartenaire);
    }
  });

  return (
    <LayoutWrapper>
      <HeaderSticky>
        <Header />
      </HeaderSticky>
      {children}
      {router.pathname !== '/devis' && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;
