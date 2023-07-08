import styled from 'styled-components';
import { StyledFieldTitle, StyledLabel, StyledInput } from "./FieldInput";

interface CheckboxInputProps{
    id: string;
    labelContent: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, stateName: string) => void;
}

export default function CheckboxInput({id, labelContent, checked, onChange}: CheckboxInputProps){
    return (
        <StyledLabel htmlFor={id}>
            <StyledFieldTitle>{labelContent}</StyledFieldTitle>
            <StyledCheckBox type='checkbox' name={id} id={id} checked={checked} onChange={(e) => onChange(e, id)}/>
        </StyledLabel>
    );
}

const StyledCheckBox = styled(StyledInput)`
    width: 100%
`;