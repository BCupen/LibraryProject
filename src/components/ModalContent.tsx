import styled from 'styled-components';
import FieldInput from './FieldInput';
import CheckboxInput from './CheckboxInput';
import FormButtons from './FormButtons';
import {FaTimes} from 'react-icons/fa';
import { useContext } from 'react';
import { DisplayModalContext } from '../contexts/DisplayModalContext';

export default function ModalContent(){

    const { setDisplayModal } = useContext(DisplayModalContext);

    return (
        <StyledModalContent>
            <CloseModalSpan>
                <FaTimes size='26' color='#818cf8' onClick={()=>setDisplayModal(false)}/>
            </CloseModalSpan>
            <ModalTitle>Add Book</ModalTitle>
            <StyledForm>
                <FieldInput id='book-title' labelContent='Book Title*' placeholder='Title...'/>
                <FieldInput id='book-author' labelContent='Book Author*' placeholder='Author...'/>
                <FieldInput type='number' id='book-pages' labelContent='Number of Pages*' placeholder='Number of Pages...'/>
                <CheckboxInput id='book-read-status' labelContent='Read?*'/>
                <FormButtons />
            </StyledForm>
        </StyledModalContent>
    );
}

const CloseModalSpan = styled.span`
    position: absolute;
    right: .5rem;
    top: 0.25rem;
    cursor: pointer;
`;

const StyledModalContent = styled.div`
    width: max-content;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fdba74;
    margin: 5% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    border-radius: 10px;
`;

const ModalTitle = styled.h2`
    font-family: 'Silkscreen';
    font-size: 2.75rem;
    padding: 0;
    margin: 0;
    color: #4f46e5;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;

`; 