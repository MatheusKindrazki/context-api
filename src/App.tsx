import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'

import Routes from './routes'

import { SignProvider } from './hooks'

import Modal from './components/Modal'

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <SignProvider>
        <Routes />
      </SignProvider>
    <Modal />
  </ChakraProvider>
  )
}

export default App;
