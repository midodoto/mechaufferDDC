import React from 'react';
import styled from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body2.jsx';
import Body1 from '../library/typo/body1.jsx';
import Body3 from '../library/typo/body3.jsx';
import BodyMed from '../library/typo/body-med.jsx';

const GestionStyle = styled.div`
  .subtitle {
    opacity: 0.4;
  }
`;

const Content = styled.div`
  padding: 3.4rem 5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
`;

const Flex = styled.div`
  display: flex;
`;

const Gestion = () => {
  return (
    <GestionStyle>
      <Content>
        <Body>Renseignez vos coordonnées </Body>
        <br />
        <Flex>
          <Row>
            <Body1>Adresse e-mail</Body1>
            <Body3>Modifier</Body3>
          </Row>
          <Row>
            <Body1 fontSize='1.2'>email</Body1>
          </Row>
        </Flex>
      </Content>
    </GestionStyle>
  );
};

export default Gestion;
