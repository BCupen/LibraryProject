import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import UserProfile from './UserProfile';


export default function SignInComponent(){
    const { googleSignin, user } = useContext(AuthContext);

    const handleSignIn = async ()=>{
        try {
            await googleSignin();
        } catch (error) {
            console.log(error);        
        }
    }

    return (
        <>
            {user.displayName ? <UserProfile />: <StyledButton onClick={()=>handleSignIn()}>Sign In</StyledButton>}
        </>
        
        
    );
}



const StyledButton = styled.button`
    border: none;
    box-shadow: 1px 1px #27272a;
    background-color: #fdba74;
    cursor: pointer;
    color: #FFFFFF;
    border-radius: 40px;
    width: 10rem;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
`;