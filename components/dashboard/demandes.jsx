import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body2.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import {getDevisByUserId} from '../../config/firebase.js';
import { useAuth } from '../../context/AuthContext'

const DemandesStyle = styled.div`
  .subtitle {
    opacity: 0.4;
  }
`;

const ContentHeader = styled.div`
  padding: 3.4rem 5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
margin-top: 3rem;
  padding: 3.4rem 5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  position: relative;

  table {
    width: 100%;
    th {
      width: 25%;
      text-align: left;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Title = styled.p`
  font-size: 2.2rem;
  color: grey;
  opacity: 0.4;
`;


const Notice = styled.p`
background: rgba(222, 222, 222, 0.2);
border-radius: 10px;
width: 320px;
position: absolute;
right: 2rem;
top: 2rem;
padding: 1rem;
`
const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.3rem;
  }
  .title {
    opacity: 0.4;
  }
`;

const Demandes = () => {

  const { user } = useAuth();
  const [demandes, setDemandes] = useState(null);

  const getDevisByUserIdFct = async () => {
    const d = await getDevisByUserId(user.uid);
    console.log("d", d);
    setDemandes(d)
  }

  useEffect(() => {
    getDevisByUserIdFct()
  }, []);

    return (
        <DemandesStyle>
          <Flex>
            <ContentHeader>
               
            <Body fontSize='1.6'>Barème de XCP par type de travaux</Body>
            <ul>
              <li> 
                <span className='title'>Pompe à chaleur :</span> 2 XCP
              </li>
              <li> 
                <span className='title'>Chaudière à bois :</span> 2 XCP
              </li>
              <li> 
                <span className='title'>Poêle à bois :</span> 1 XCP
              </li>
              <li> 
                <span className='title'>VMC double-flux :</span> 1 XCP
              </li>
              <li> 
                <span className='title'>Chauffe-eau thermodynamique :</span> 1 XCP
              </li>
              <li> 
                <span className='title'>Isolation des combles :</span> 1 XCP
              </li>
              <li> 
                <span className='title'>Remplacement des fenêtres :</span> 1 XCP
              </li>
              <li> 
                <span className='title'>Chauffe-eau solaire :</span> 0,5 XCP
              </li>
              <li> 
                <span className='title'>Isolation du sol :</span> 0,5 XCP
              </li>
            </ul>
            </ContentHeader>
            <ContentHeader>
            <Body fontSize='1.6'>Réduction des émissions de CO2 & gaz à effet de serre, et économies réalisées par opération</Body>
            <ul>
              <li> 
                <span className='title'>Poêle à bois :</span> : jusqu’à 90% par an
              </li>
              <li> 
                <span className='title'>Chaudière à bois :</span> jusqu’à 90% par an
              </li>
              <li> 
                <span className='title'>Chauffe-eau thermodynamique :</span> Jusqu’à 70% par an
              </li>
              <li> 
                <span className='title'>Chauffe-eau solaire :</span> jusqu’à 60% par an
              </li>
              <li> 
                <span className='title'>Pompe à chaleur :</span> jusqu’à 60% par an
              </li>
              <li> 
                <span className='title'>Isolation des murs :</span> environ 25% par an
              </li>
              <li> 
                <span className='title'>Isolation des combles :</span> 20% à 25% par an
              </li>
              <li> 
                <span className='title'>Remplacement des fenêtres :</span> jusqu’à 15% par an
              </li>
              <li> 
                <span className='title'>VMC double-flux :</span> 10% par an
              </li>
              <li> 
                <span className='title'>Isolation du sol :</span> jusqu’à 10% an
              </li>
            </ul>
            </ContentHeader>
          </Flex>
          <Content>
            <Notice>Bénéficiez de 2 XCP supplémentaires en renseignant les informations du bénéficiaire pour votre première demande</Notice>  
            {/* <Grid>
            <Title>NOM</Title>
            <Title>ÈTAT</Title>
            <Title>DATE</Title>
            <Title></Title>
            {demandes.map((demande) => {
              return (<p>{demande.email}</p>)
            })}
            </Grid> */}

            <table>
              <tr>
                <th>NOM</th>
                <th>ÈTAT</th>
                <th>DATE</th>
                <th></th>
              </tr>
              {console.log("demandes", demandes)}
              {demandes?.map((demande, index) => {
                console.log("0", demande)
                return (              
                <tr key={index}>
                  <td>{demande.additionalData.lastname} {demande.additionalData.firstname}</td>
                  <td></td>
                  <td>{demande.additionalData.date}</td>
                  <td></td>
                </tr>)
              })}
            </table>

          </Content>
        </DemandesStyle>
    );
};

export default Demandes;
