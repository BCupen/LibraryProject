import styled from 'styled-components'
import { BookProps } from "../utils";
import { FaToggleOff, FaToggleOn, FaTrashAlt } from 'react-icons/fa';


//TODO: toggle hasRead
export default function Book({title, author, pages, hasRead}: BookProps){

    return (
        <Card>
            <Title>{title}</Title>
            <span>Written By <StyledP>{author}</StyledP></span>
            <span>Number of Pages: <StyledP>{pages}</StyledP></span>
            <span>Read? <ReadSpan>{hasRead ? <FaToggleOn color='green' size='32'/> : <FaToggleOff color='red' size='32'/>}</ReadSpan>
            </span>
            <DeleteSpan>
                <FaTrashAlt />
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