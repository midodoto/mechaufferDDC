import Link from "next/link.js";
import Image from "next/image.js";
import React, {useContext, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {ThemeContext} from "styled-components";
import {useAuth} from "../../context/AuthContext.js";
import {InitialState} from "../../store/actions/devisAction.js";
import ButtonPrimary from "../library/button/primary.jsx";
import styled from 'styled-components';
import H3 from '../library/typo/h3.jsx';
import H2 from '../library/typo/h2.jsx';
import H4 from '../library/typo/h4.jsx';
import Body from '../library/typo/body1.jsx';
import {DevisActions} from '../../store';
import img1 from "../../public/images/dashboard/conseil.png";
import img2 from "../../public/images/dashboard/visit.png";
import img3 from "../../public/images/dashboard/plan.png";
import dl from "../../public/images/dashboard/download.png";
import deleteImg from "../../public/images/dashboard/delete-img.png";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { storage } from "../../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL, listAll, deleteObject } from "firebase/storage";

const DashboardUserStyle = styled.div`
  min-height: calc(100vh - 9rem);
`;

const DashboardUserWrapper = styled.div`
max-width: ${({theme}) => theme.layout.xxLargeScreen};
margin: auto;
padding: 7rem 12rem;
background: ${({ theme }) => theme.colors.blue2};
@media ${({ theme }) => theme.breakpoints.tablets_reverse} {
  padding: 7rem 2rem;
}
`;

const Title = styled.div`
  text-align: center;
  padding-bottom: 6rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.blue2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

const Type = styled.div`
  padding: 6.7rem 7.2rem;
  background: #FFFFFF;
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  flex: 2;
`;

const Green = styled.div`

  flex: 1.2;
`;

const GreenWrapper = styled.div`
  padding: 0rem 3.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
  border-radius: 12px;
  margin-left: -4rem;
  margin-top: -3rem;
  max-width: 300px;
  position: absolute;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Flex = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: stretch;
  `;

const WorkWrapper = styled.div`
  display: flex;
  gap: 4.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const ValidationDoc = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: -2.6783px 1.78553px 7.58851px rgba(176, 186, 192, 0.2);
  border-radius: 6.20045px;
  padding: 1rem;
`;

const WrapperTraitement = styled.div`
  margin-top: 2rem;
`;

const StaticSectionStyle = styled.div`
max-width: ${({theme}) => theme.layout.xxLargeScreen};
margin: auto;
padding: 7rem 12rem;
width: 80%;
text-align: center;

background: ${({ theme }) => theme.colors.white};
@media ${({ theme }) => theme.breakpoints.tablets_reverse} {
  padding: 7rem 2rem;
}`;

const BoxFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 0rem;
`;

const Box = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    background: #F1F5FF;
    box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
    border-radius: 12px;
    padding: 2.4rem;
    margin: ${({ down }) => down ? '20rem': '0rem'} 3rem 0rem 3rem;
    max-height: 250px;
`;

const StaticSection = () => {
    return (
        <StaticSectionStyle>
            <H2>Un conseiller MeChauffer, expert en amélioration énergétique à votre écoute</H2>
            <Body>N’hésitez donc pas à nous solliciter afin de profiter de ses conseils tout au long de votre accompagnement !</Body>

            <BoxFlex>
                <Box>
                    <Body>Conseil et choix des travaux à réaliser</Body>
                    <Image src={img1} alt="logo"  height={160}/>
                </Box>
                <Box down={true}>
                    <Body>Éligibilité et visite technique</Body>
                    <Image src={img2} alt="logo"  height={160}/>
                </Box>
                <Box>
                    <Body>Planification des travaux</Body>
                    <Image src={img3} alt="logo"  height={160}/>
                </Box>
            </BoxFlex>
        </StaticSectionStyle>
    );
}

const DashboardUser = () => {
    
    const { user, logout, updateUser } = useAuth()
    const themeContext = useContext(ThemeContext)
    const [stateMenu, setStateMenu] = useState(0);
    const dispatch = useDispatch();
    const { InitialState } = bindActionCreators(DevisActions, dispatch);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    const handleLogout = async (e) => {
        e.preventDefault()
        
        try {
            await logout()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        updateUser(user.uid);
    }, [])
    
    return (
        <DashboardUserStyle>
            <DashboardUserWrapper>
            {user?.additionalData?.devis ?             
            <Title>
                <H3>Merci pour votre confiance</H3>
                <Body>Votre conseiller MeChauffer vous contactera très bientôt pour vous accompagner dans votre projet</Body>
            </Title>:             
            <Title>
                <H3>Vous n’avez aucune demande de prime MeChauffer en cours</H3>
                <Body>Cliquuez sur le bouton “Ajouter une demande” afin de bénéficier de votre première prime</Body>
                <ButtonWrapper>
                    <Link href={'/devis'}>
                        <ButtonPrimary onClick={() => {InitialState();}} width={"26rem"} bgColor={themeContext.colors.primary} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Ajouter une demande</ButtonPrimary>
                    </Link>
                </ButtonWrapper>
            </Title> }
            <WorkWrapper>
                {user?.additionalData?.devis && user?.additionalData?.devis[4]?.value?.map((type, index) => 
                    <>
                        {Array.isArray(type.value) && type.value.map((typeDetail, indexDetail) => <>
                            <Flex key={index}>
                            <Type>
                                <H4 fontSize="1.8">{type.name}</H4>
                                <Body fontSize="1.4" color={"rgba(55, 73, 87, 0.4)"}>{typeDetail.name}</Body>
                                <WrapperTraitement>
                                    <Body fontSize="1.4">Afin d`accélérer le traitement de votre dossier, nous vous invitons à télécharger les documents requis en cliquant sur le bouton ci-dessous.</Body>
                                </WrapperTraitement>
                            </Type>
                            <Green>
                                <GreenWrapper>
                                    <H4 color={themeContext.colors.white}>Votre prime</H4>
                                    <ValidationDoc>
                                        <Body fontSize="1.4" color={themeContext.colors.primary}>Estimation Prime MeChauffer</Body>
                                        <Body fontSize="1.2" color={"rgba(55, 73, 87, 0.4)"}>Documents en cours de validation</Body>
                                    </ValidationDoc>
                                    <Body lineHeight="1.5" fontSize="1.2" color={themeContext.colors.white}> Attention : ne signez pas votre devis avant d’avoir fait votre demande de prime par téléphone auprès d’un conseiller MeChauffer</Body>
                                </GreenWrapper>
                            </Green>
                        </Flex>                        
                        </>)}
                        {!Array.isArray(type.value) && 
                            <Flex key={index}>
                                <Type>
                                    <H4 fontSize="1.8">{type.name}</H4>
                                    <Body fontSize="1.4" color={"rgba(55, 73, 87, 0.4)"}>{type.value.name}</Body>
                                    <WrapperTraitement>
                                        <Body fontSize="1.4">Afin d`accélérer le traitement de votre dossier, nous vous invitons à télécharger les documents requis en cliquant sur le bouton ci-dessous.</Body>
                                    </WrapperTraitement>
                                </Type>
                                <Green>
                                    <GreenWrapper>
                                        <H4 color={themeContext.colors.white}>Votre prime</H4>
                                        <ValidationDoc>
                                            <Body fontSize="1.4" color={themeContext.colors.primary}>Estimation Prime MeChauffer</Body>
                                            <Body fontSize="1.2" color={"rgba(55, 73, 87, 0.4)"}>Documents en cours de validation</Body>
                                        </ValidationDoc>
                                        <Body lineHeight="1.5" fontSize="1.2" color={themeContext.colors.white}> Attention : ne signez pas votre devis avant d’avoir fait votre demande de prime par téléphone auprès d’un conseiller MeChauffer</Body>
                                    </GreenWrapper>
                                </Green>
                            </Flex>
                        }
                    </>
                )}

                <ButtonWrapper>
                    <ButtonPrimary onClick={onOpenModal} width={"26rem"} textColor={themeContext.colors.primary} bgColor={themeContext.colors.white} hoverBgColor={themeContext.colors.primary} hoverColor={themeContext.colors.white} disabled={false}>Je télécharge mes documents</ButtonPrimary>
                </ButtonWrapper>
                <ModalContent open={open} onCloseModal={onCloseModal} />
            </WorkWrapper>

            <br />
            <br />
            <ButtonPrimary type="submit" width={"20rem"} bgColor={themeContext.colors.logout} hoverBgColor={themeContext.colors.logoutHover} hoverColor={themeContext.colors.white} disabled={false} onClick={(e) => handleLogout(e)}>Logout</ButtonPrimary>
            
            </DashboardUserWrapper>
            <StaticSection />
        </DashboardUserStyle>
    );
};

const Requirement = styled.div`
    padding: 3rem 0rem 0rem 0rem;
`;

const CI = styled.div`
    display: flex;
    justify-content: cenrer;
    align-items: center;
    gap: 0.6rem;
    flex-direction: column;
    padding: 3rem;
    background: ${({ theme }) => theme.colors.white};
    border: 3px dashed #6AE14C;
    border-radius: 1.2rem;
    margin-top: 3rem;
    cursor: pointer;

`;

const CISelected = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
    gap: 0.6rem;
    padding: 2rem;
    border-radius: 1.2rem;
    margin-top: 3rem;
    position: relative;
    width: 90%;
`;

const DeleteWrapper = styled.div`
    position: absolute;
    right: -5rem;
    cursor: pointer;
`;


const Impot = styled.div`
display: flex;
justify-content: cenrer;
align-items: center;
gap: 0.6rem;
flex-direction: column;
    padding: 3rem;
    background: ${({ theme }) => theme.colors.white};
    border: 3px dashed #6AE14C;
    margin-top: 3rem;
    cursor: pointer;
    border-radius: 1.2rem;
`;

const ImpotSelected = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: -5.18343px 3.45562px 14.6864px rgba(176, 186, 192, 0.2);
gap: 0.6rem;
padding: 2rem;
border-radius: 1.2rem;
margin-top: 3rem;
position: relative;
width: 90%;
`;

const WrapperModal = styled.div`
    padding: 5rem 10rem;
`;

const ModalContent = ({ open, onCloseModal}) => {
    const { user, logout } = useAuth()

    const [percent, setPercent] = useState(0);
    const [ci, setCi] = useState(false);
    const [impot, setImpot] = useState(false);
    

    const hiddenFileInputCI = React.useRef(null);
    const hiddenFileInputInput = React.useRef(null);

    const handleClickCI = event => {
        hiddenFileInputCI.current.click();
    };

    const handleClickInput = event => {
        hiddenFileInputInput.current.click();
    };

    const handleChange = (event, filename) => {



    if (!event.target.files[0]) {
        alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/${user.uid}/${filename}.png`);
    const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        }, (err) => console.log(err), 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                if (filename === 'ci')
                setCi(true);
            else if (filename=== 'impot')
                setImpot(true);
            });
        });
    };

useEffect(() => {
    const listRef = ref(storage, `/${user.uid}`);
    listAll(listRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        if (itemRef.name === 'ci.png')
            setCi(true);
        else if (itemRef.name === 'impot.png')
            setImpot(true);
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
})

    const deleteFile = (filename) => {
        // Create a reference to the file to delete
        const desertRef = ref(storage, `/${user.uid}/${filename}.png`);

        // Delete the file
        deleteObject(desertRef).then(() => {
            if (filename === "ci")
             setCi(false);
             else if (filename === "impot")
             setImpot(false);
        // File deleted successfully
        }).catch((error) => {
        // Uh-oh, an error occurred!
        });
    }

    return (
      <Modal open={open} onClose={onCloseModal} center>
        <WrapperModal>
            <H4>Documents nécessaires pour ce dossier</H4>
            <Requirement>
                <ul>
                    <li>
                        <Body fontSize="1.4">Pièce d`identité (Recto-Verso)*</Body>
                    </li>
                    <li>
                        <Body fontSize="1.4">Dernier avis d`imposition* </Body>
                    </li>
                </ul>
            </Requirement>
            {!ci ? 
                        <CI onClick={handleClickCI}>
                        <Image src={dl} alt="logo"  height={24}/>
                        <Body>Cliquer pour télécharger votre pièce d`identité</Body>
                        <Body fontSize="1.4">Taille maximale du fichier : 200Mo</Body>
                        <input
                            type="file"
                            ref={hiddenFileInputCI}
                            onChange={(e) => handleChange(e, 'ci')}
                            style={{display: 'none'}}
                        />
                    </CI> :
                                <CISelected>
                                    <Body fontSize="1.8">Pièce d`identité</Body>
                                    <DeleteWrapper onClick={() => deleteFile("ci")}>
                                    <Image src={deleteImg} alt="logo"  height={24}/>
                                    </DeleteWrapper>
                            </CISelected>}
            {!impot ? 
                        <Impot onClick={handleClickInput}>
                        <Image src={dl} alt="logo"  height={24}/>
                        <Body>Cliquer pour télécharger votre avis d`imposition</Body>
                        <Body fontSize="1.4">Taille maximale du fichier : 200Mo</Body>
                        <input
                            type="file"
                            ref={hiddenFileInputInput}
                            onChange={(e) => handleChange(e, 'impot')}
                            style={{display: 'none'}}
                        />
                    </Impot> :
                                <ImpotSelected>
                                    <Body fontSize="1.8">Dernier avis d’imposition</Body>
                                    <DeleteWrapper onClick={() => deleteFile("impot")}>
                                    <Image src={deleteImg} alt="logo"  height={24}/>
                                    </DeleteWrapper>
                                
                            </ImpotSelected>}
        </WrapperModal>
    </Modal>
    );
}

export default DashboardUser;
