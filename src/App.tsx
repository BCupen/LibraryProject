import { useState } from 'react';
import styled from 'styled-components';
import './App.css'
import Header from './components/Header';
import Modal from './components/Modal';
import { DisplayModalContext } from './contexts/DisplayModalContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <AuthContextProvider>
      <DisplayModalContext.Provider value={{displayModal, setDisplayModal}}>
        <Header />
        <StyledMain>
          <Modal />
        </StyledMain>
      </DisplayModalContext.Provider>
      </AuthContextProvider>
    </>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #818cf8
`;

export default App
