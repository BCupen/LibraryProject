import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export default function UserProfile(){
    const { user, googleSignOut } = useContext(AuthContext);

    const handleSignOut = async () =>{
        try {
            await googleSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <StyledDiv>
            <UserImage url={user.photoURL}/>
            <VStack>
                <StyledP>{user.displayName}</StyledP>
                <StyledA href='#' onClick={()=> handleSignOut()}>Sign out</StyledA>
            </VStack>
            
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const UserImage = styled.span<{url: string}>`
    border-radius: 50%;
    width: 5rem; 
    height: 5rem;
    background-image: url("${props => props.url}");
    box-shadow: 1px 1px #27272a;
`;

const StyledP = styled.p`
    font-family: 'Silkscreen';
    font-size: 1.25rem;
    color: #fdba74;
    font-weight: bold;
    margin: 0;
`;

const VStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`;

const StyledA = styled.a`
    color: #FFFFFF;
    font-size: 1rem;
    font-family: 'Silkscreen';
`;