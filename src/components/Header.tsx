import styled from 'styled-components';
import AddBookButton from './AddBookButton';
import SignInComponent from './SignInComponent';

export default function Header() {
    return (
        <StyledHeader>
            <AddBookButton />
            <Title>Basic Library</Title>
            <SignInComponent />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    background-color: #4f46e5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1.5rem;
`;

const Title = styled.h1`
    flex: 1;
    text-align: center;
    color: #fdba74;
    font-size: 3.5rem;
    font-family: 'Silkscreen';
    margin: 1rem;
`;