import styled from 'styled-components';
import ModalContent from './ModalContent';
import { useContext } from 'react';
import { DisplayModalContext } from '../contexts/DisplayModalContext';


export default function Modal(){
    const { displayModal } = useContext(DisplayModalContext);
    return (
        <StyledModal display={displayModal}>
            <ModalContent />
        </StyledModal>
    );
}

const StyledModal = styled.div<{ display?: boolean}>`
    display: ${props => props.display ? 'block' : 'none'}; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;