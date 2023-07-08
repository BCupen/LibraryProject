import { useState } from 'react';
import styled from 'styled-components';

interface FieldInputProps {
    id: string;
    labelContent: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, stateName: string)=>void;
}

export default function FieldInput({ id, labelContent, placeholder, type, value, onChange }: FieldInputProps) {
    const [isFieldValid, setIsFieldValid] = useState(true);

    const validateField = (value: string) => {
        if (value)
            setIsFieldValid(true);
        else setIsFieldValid(false);
    }

    return (
        <StyledLabel htmlFor={id}>
            <StyledFieldTitle>{labelContent}</StyledFieldTitle>
            <StyledInput type={type ? type : 'text'} name={id} id={id} placeholder={placeholder ? placeholder : ''} value={value} onChange={(e)=> onChange(e, id)} onBlur={(e)=>validateField(e.target.value)}/>
            <StyledErrorMessage display={!isFieldValid}>This field is required.</StyledErrorMessage>
        </StyledLabel>
    );
}



export const StyledFieldTitle = styled.h3`
    margin:0;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    text-align: center;
    font-family: 'Silkscreen';
    color: #4f46e5;
    font-size: 1rem;
    padding: 0.5rem;
`;

export const StyledInput = styled.input`
    border: 1px solid #888;
    border-radius: 5px;
    height: 1.5rem;
`;

const StyledErrorMessage = styled.span<{display: boolean}>`
    display: ${props => props.display ? 'block' : 'none'}; 
    font-family: 'Times New Roman';
    color: red;
    font-size: .75rem;
`;