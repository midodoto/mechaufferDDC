import React from 'react';
import styled from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body2.jsx';
import BodyMed from '../library/typo/body-med.jsx';

const CoordonneeStyle = styled.div`
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

const Coordonnee = () => {
    return (
        <CoordonneeStyle>
            <Content>
                <Body>Renseignez vos coordonnées </Body>
                <br/>
                <BodyMed>Merci de vérifier attentivement l’exactitude de vos informations, vos récompenses seront livrées à l’adresse communiquée ci-dessous. </BodyMed>
            </Content>
        </CoordonneeStyle>
    );
};

export default Coordonnee;
