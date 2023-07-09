import styled from 'styled-components'
import { BookProps } from "../utils";
import { FaToggleOff, FaToggleOn, FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';


interface ThisBookProps extends BookProps{
    id?: string;
}


export default function Book({title, author, pages, hasRead, id}: ThisBookProps){

    const { toggleRead, deleteBook } = useContext(BookContext);

    return (
        <Card>
            <Title>{title}</Title>
            <span>Written By <StyledP>{author}</StyledP></span>
            <span>Number of Pages: <StyledP>{pages}</StyledP></span>
            <span>Read? <ReadSpan>{hasRead ? <FaToggleOn color='green' size='32' style={{cursor:'pointer'}} onClick={()=> toggleRead(id, !hasRead)}/> : <FaToggleOff color='red' size='32' style={{cursor:'pointer'}} onClick={()=> toggleRead(id, !hasRead)}/>}</ReadSpan>
            </span>
            <DeleteSpan>
                <FaTrashAlt style={{cursor:'pointer'}} onClick={()=>deleteBook(id)}/>
            </DeleteSpan>
        </Card>
    );
}

const DeleteSpan = styled.span`
    align-self: flex-end;
    cursor: pointer;
`;

const ReadSpan = styled.span`
    display: flex;
    align-content: center;
    justify-content: center;
`;

const StyledP= styled.p`
    display: inline;
    color: #4f46e5;
    font-family: 'Silkscreen';
    font-size: 1.5rem;
`;


const Title = styled.h3`
    color: #4f46e5;
    font-family: 'Silkscreen';
    font-size: 1.5rem;
`;

const Card = styled.div`
    background: #fdba74;
    min-width: 200px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 0.5rem;
    font-family: 'Silkscreen';
    font-size: 1.5rem;
    border-radius: 10%;
`;