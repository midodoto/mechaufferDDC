import React, {useEffect, useState, useContext} from 'react';
import styled, { ThemeContext } from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import Body from '../library/typo/body2.jsx';
import BodyMed from '../library/typo/body-med.jsx';
import {getDevisByUserId} from '../../config/firebase.js';
import { useAuth } from '../../context/AuthContext'
import Body1 from '../library/typo/body1.jsx';
import Body3 from '../library/typo/body3.jsx';
import Link from 'next/link.js';
import ButtonPrimary from '../library/button/primary.jsx';
import moment from 'moment';
import 'moment/locale/fr'  // without this line it didn't work
import { useRouter } from 'next/router.js';

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

const Wrapper = styled.div`
position: relative;
  width: 100%;
  table {
    width: 100% !important;
    th {
      width: 25%;
      text-align: left;
    }
  }
  .demande {
    padding-top: 2rem;
  }
`;


const Notice = styled.p`
background: rgba(222, 222, 222, 0.2);
border-radius: 10px;
width: 320px;
position: relative;
float: right;
right: 2rem;
top: -2rem;
padding: 1rem;
margin-right: -20px;
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

const Status = styled.div`
&.orange {
  background-color: #FAC131;
}

&.green {
  background-color: #76C075;
}
&.red {
  background-color: #EC4444;
}
width: 16px;
height: 16px;
border-radius: 50%;
`

const Empty = styled.div`
display: flex;
justify-content: space-between;
`

const FlexStatus = styled.div`
display: flex;
align-item: center;
gap: 0.6rem;
`
const WrapperDemandeButton = styled.div`
button {
  padding-top: 0.2rem !important; 
  padding-bottom: 0.2rem !important;
}
`;

export const DemandesList = ({demandes}) => {
  const themeContext = useContext(ThemeContext)

  return (
    <Wrapper>
    {demandes?.length > 0 &&<Notice>Bénéficiez de 2 XCP supplémentaires en renseignant les informations du bénéficiaire pour votre première demande</Notice> }
    {/* <Grid>
    <Title>NOM</Title>
    <Title>ÈTAT</Title>
    <Title>DATE</Title>
    <Title></Title>
    {demandes.map((demande) => {
      return (<p>{demande.email}</p>)
    })}
    </Grid> */}
    {demandes?.length > 0 ?

    <table>
      <tr>
        <th>NOM</th>
        <th>ÈTAT</th>
        <th>DATE</th>
        <th></th>
      </tr>
      {console.log("demandes", demandes)}
      {demandes?.map((demande, index) => {
        moment.locale('fr') // returns the new locale, in this case 'de'
        var date = moment(demande.additionalData.date);
        console.log("0", demande)
        return (              
        <tr key={index}>
          <td className="demande"><Body1 fontSize='1.4'>{demande.additionalData.lastname} {demande.additionalData.firstname}</Body1></td>
          {demande.additionalData.status === 'new' ? 
            <td className="demande">
              <FlexStatus><Status className='orange'></Status><Body1 fontSize='1.4'>En attente du devis</Body1></FlexStatus></td>
          : demande.additionalData.status === 'document' ?
          <td className="demande">
            <FlexStatus><Status className='orange'></Status><Body1 fontSize='1.4'>En attente des documents</Body1></FlexStatus></td>
          : demande.additionalData.status === 'validation' ? 
            <td className="demande">
              <FlexStatus><Status className='orange'></Status><Body1 fontSize='1.4'>En attente de validation</Body1></FlexStatus></td>
          : demande.additionalData.status === 'done' ?
            <td className="demande"><FlexStatus><Status className='green'></Status><Body1 fontSize='1.4'>Validée</Body1></FlexStatus></td>
          : <td className="demande"><FlexStatus><Status className='red'></Status><Body1 fontSize='1.4'>Refusée</Body1></FlexStatus></td>
      }
          <td className="demande"><Body1 fontSize='1.4'>{date.format('DD MMMM, YYYY')}</Body1></td>
          {demande.additionalData.status === 'new' ? 
            <td className="demande">                    
            <WrapperDemandeButton>
            <Link href={'/devis?initialUser=true'}>
              <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Je renseigne les informations</ButtonPrimary>
            </Link>
            </WrapperDemandeButton>
            </td>
          : demande.additionalData.status === 'document' ?
          <td className="demande">                    
            <WrapperDemandeButton>
              <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Je renseigne les documents</ButtonPrimary>
            </WrapperDemandeButton>
          </td>: demande.additionalData.status === 'validation' ? 
           <td className="demande">                    
            <WrapperDemandeButton>
            </WrapperDemandeButton>                
            </td>: demande.additionalData.status === 'done' ?
            <td className="demande">                    
            <WrapperDemandeButton>
            </WrapperDemandeButton>          </td>          : 
            <td className="demande">  
            <WrapperDemandeButton>
              <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Je renseigne les informations</ButtonPrimary>
            </WrapperDemandeButton>
                        
          </td>      }
        </tr>)
      })}
    </table> : 
    <Empty>
      <span><Body3>Vous n’avez pas encore de demande en cours.</Body3><Body3> Cliquez sur le bouton “Créer une nouvelle demande” pour en créer une.</Body3></span>
      <Link href={'/devis'}>
                    <ButtonPrimary bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white}>Créer une nouvelle demande</ButtonPrimary>
                </Link>
    </Empty>
}

  </Wrapper>
  );
}


const Demandes = () => {

  const { user } = useAuth();
  const [demandes, setDemandes] = useState(null);

  const getDevisByUserIdFct = async () => {
    const d = await getDevisByUserId(user.uid);
    if (user?.additionalData?.user)
      d.push({additionalData: user?.additionalData?.user});
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
            <DemandesList demandes={demandes} />
          </Content>
        </DemandesStyle>
    );
};

export default Demandes;
