import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const ProgressBarStyle = styled.div`
  height: 0.8rem;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  width: calc(${({ currentStep, maxStep}) => (currentStep * 100 / maxStep)}%);
`;


const ProgressBar = ({ currentStep, maxStep}) => {
    const themeContext = useContext(ThemeContext)

    return (
        <ProgressBarStyle currentStep={currentStep} maxStep={maxStep}>
        </ProgressBarStyle>
    );
};

export default ProgressBar;
