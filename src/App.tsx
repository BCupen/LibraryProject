import { useState } from 'react';
import styled from 'styled-components';
import './App.css'
import Header from './components/Header';
import Modal from './components/Modal';
import { DisplayModalContext } from './contexts/DisplayModalContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <AuthContextProvider>
        <BookContextProvider>
          <DisplayModalContext.Provider value={{ displayModal, setDisplayModal }}>
            <Header />
            <StyledMain>
              <Modal />
              <BookList />
            </StyledMain>
          </DisplayModalContext.Provider>
        </BookContextProvider>
      </AuthContextProvider>
    </>
  )
}

const StyledMain = styled.main`
  background-color: #818cf8;
`;

export default App
