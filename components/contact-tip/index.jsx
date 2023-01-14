import Image from "next/image.js";
import React from 'react';
import styled from 'styled-components';
import phone from "../../public/images/phone.svg";
import Body1 from '../library/typo/body1.jsx';

const ContactTipStyle = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 11px;
  padding: 1rem 1.9rem;
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 2.2rem;
`;

const ContactTip = () => {
    return (
        <ContactTipStyle>
            <Image src={phone} alt="logo" width={24} height={24}/>
            <Text>
                <Body1>Contactez nous</Body1>
                <Body1>Du lundi au vendredi de 8h00 à 17h30</Body1>
            </Text>
        </ContactTipStyle>
    );
};

export default ContactTip;
