import {useField} from "formik";
import React, {useContext} from 'react';
import styled, {ThemeContext} from "styled-components";
import Body from '../typo/body-med.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  label {
    display: flex;
    gap: 1rem;
  }
  input {
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.colors.blue40};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${({ theme }) => theme.colors.blue40};
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
      color: ${({ theme }) => theme.colors.blue40};
    }
  }
`;

const MyCheckbox = ({ children, ...props }) => {
    const themeContext = useContext(ThemeContext)
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <Wrapper>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                <Body className="error" color={themeContext.colors.blue40}>{children}</Body>
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </Wrapper>
    );
};

export default MyCheckbox;

