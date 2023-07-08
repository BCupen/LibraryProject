import styled from 'styled-components';
import FieldInput from './FieldInput';
import CheckboxInput from './CheckboxInput';
import FormButtons from './FormButtons';
import {FaTimes} from 'react-icons/fa';
import { useContext, useState } from 'react';
import { DisplayModalContext } from '../contexts/DisplayModalContext';
import { BookContext } from '../contexts/BookContext';

export default function ModalContent(){

    const { setDisplayModal } = useContext(DisplayModalContext);
    const {addBook} = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [hasRead, setHasRead] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, stateName: string) =>{
        switch (stateName) {
            case 'book-title':
                setTitle(e.target.value);
                break;
            case 'book-author':
                setAuthor(e.target.value);
                break;
            case 'book-pages':
                setPages(e.target.value);
                break;
            case 'book-read-status':
                setHasRead(!hasRead);
                break;
            default:
                console.log('Invalid state');
        }

    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        const newBook = {title, author, pages, hasRead};

        addBook(newBook);
        reset();
        setDisplayModal(false);
    }

    const reset = () =>{
        setTitle('');
        setAuthor('');
        setPages('');
        setHasRead(false);
    }

    return (
        <StyledModalContent>
            <CloseModalSpan>
                <FaTimes size='26' color='#818cf8' onClick={()=>setDisplayModal(false)}/>
            </CloseModalSpan>
            <ModalTitle>Add Book</ModalTitle>
            <StyledForm onSubmit={(e) => handleSubmit(e)}>
                <FieldInput id='book-title' labelContent='Book Title*' placeholder='Title...' value={title} onChange={handleChange}/>
                <FieldInput id='book-author' labelContent='Book Author*' placeholder='Author...' value={author} onChange={handleChange} />
                <FieldInput type='number' id='book-pages' labelContent='Number of Pages*' placeholder='Number of Pages...' value={pages} onChange={handleChange}/>
                <CheckboxInput id='book-read-status' labelContent='Read?*' checked={hasRead} onChange={handleChange}/>
                <FormButtons reset={reset}/>
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