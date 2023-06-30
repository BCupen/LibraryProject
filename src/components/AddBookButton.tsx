import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { DisplayModalContext } from '../contexts/DisplayModalContext';

export default function AddBookButton(){

    const {setDisplayModal} = useContext(DisplayModalContext);

    return (
        <StyledButton onClick={()=>setDisplayModal(true)}>
            <FaPlus color='#FFFFFF' size='36'/>
        </StyledButton>
    );
}

const StyledButton = styled.button`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: none;
    box-shadow: 1px 1px #27272a;
    background-color: #fdba74;
    cursor: pointer;
`;