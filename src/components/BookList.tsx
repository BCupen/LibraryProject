import { useContext } from 'react';
import styled from 'styled-components'
import { BookContext } from '../contexts/BookContext';
import Book from './Book';


export default function BookList(){

    const { books } = useContext(BookContext);

    return (
        <StyledDiv>
            {books.map((book: any)=> 
                <Book {...book} />
            )}
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 1rem;
`;