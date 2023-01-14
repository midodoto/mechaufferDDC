import React, {useState} from 'react';
import styled from 'styled-components'
import BodyMed from '../library/typo/body-med.jsx';
import Body2 from '../library/typo/body2.jsx';

const MenuLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 10rem 5rem;
  background: #FFFFFF;
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  height: fit-content;
`;

const Menu = styled.div`
  display: flex;
  max-width: 20rem;
`;

const WrapperText = styled.div`
  padding: 0rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  opacity: ${({ opacity }) => opacity};
`;

const LineGradient = styled.div`
  width: 1rem;
  border-radius: 3rem;
  background: ${({ theme }) => theme.colors.primary};
`;

const FooterMenu = styled.div`
  max-width: 20rem;
  opacity: 0.5;
  margin-top: 3rem;
`;

const MenuLeft = ({ state }) => {
    const leftMenu = [{
        title: 'Votre projet',
        subtitle: 'Cela permet de nous assurer de votre éligibilité aux différents aides',
    }, {
        title: 'Vos informations',
        subtitle: 'Pour concrétiser votre projet, renseignez vos informations de contact.',
    }, {
        title: 'Votre eligibilite',
        subtitle: 'Découvrez votre éligibilité à nos offres et estimez vos aides.',
    }]
    
    return (
        <MenuLeftWrapper>
            {leftMenu.map((lm, index) => {
                return (<Menu key={index} selected={index + 1 === state}>
                    {index + 1 === state &&
                        <LineGradient/>
                    }
                    <WrapperText opacity={index + 1 === state ? 1 : 0.2}>
                        <Body2>{lm.title}</Body2>
                        <BodyMed fontSize={1.2}>{lm.subtitle}</BodyMed>
                    </WrapperText>
                </Menu>);
            })}
            <FooterMenu>
                <Body2 color="#374957" fontSize="1.2">* Les résultats des simulations qui peuvent être réalisées sur ce site sont indicatifs et ne constituent pas des offres. L’acceptation finale de votre demande de travaux reste soumise à la validation de leur faisabilité technique et à l’étude de votre dossier.</Body2>
            </FooterMenu>
        </MenuLeftWrapper>
    );
};

export default MenuLeft;
