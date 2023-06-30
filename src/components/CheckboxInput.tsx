import styled from 'styled-components';
import { StyledFieldTitle, StyledLabel, StyledInput } from "./FieldInput";

interface CheckboxInputProps{
    id: string;
    labelContent: string;
}

export default function CheckboxInput({id, labelContent}: CheckboxInputProps){
    return (
        <StyledLabel htmlFor={id}>
            <StyledFieldTitle>{labelContent}</StyledFieldTitle>
            <StyledCheckBox type='checkbox' name={id} id={id} />
        </StyledLabel>
    );
}

const StyledCheckBox = styled(StyledInput)`
    width: 100%
`;