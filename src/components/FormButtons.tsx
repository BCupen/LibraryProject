import styled from 'styled-components';

export default function FormButtons() {
    return (
        <StyledDiv>
            <StyledButton type='submit'>Add</StyledButton>
            <StyledButton type='reset'>Clear</StyledButton>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    padding: .5rem;
    display: flex;
    gap: 2rem;
`;

const StyledButton = styled.button`
    width: 6rem;
    height: 3rem;
    border-radius: 10%;
    background-color: #4f46e5;
    font-family: 'Silkscreen';
    font-size: 1.5rem;
    color:#fdba74;

    &:hover{
        background-color: #818cf8;
        cursor: pointer;
    }
`;
