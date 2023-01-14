import {useField} from "formik";
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  position: relative;
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

const Input = styled.input`
  height: 5rem;
  padding: 2rem;
  border: 1px solid ${({ error, theme }) => error ? 'red' : theme.colors.blue40};
  border-radius: 12px;
  flex: 1;
`;

const Error = styled.div`
  position: absolute;
  color: red;
  bottom: -1.5rem;
  left: 0;
`;

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <Wrapper>
            {/*<label htmlFor={props.id || props.name}>{label}</label>*/}
            <Input className="text-input" error={!!(meta.touched && meta.error)} {...field} {...props} />
            {meta.touched && meta.error ? (
                <Error className="error">{meta.error}</Error>
            ) : null}
        </Wrapper>
    );
};

export default MyTextInput;

