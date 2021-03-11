import React, { useContext } from 'react';

import { Box, Text, Button  } from '@chakra-ui/react'

import ModalContext from '../../components/Modal/context'


const Dashboard: React.FC = () => {

  const context = useContext(ModalContext)


  return (
    <Box width="100%" height="100vh" d="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Text fontSize="large" >Ola mundo</Text>

      <Box>
      <Button  variant="solid" colorScheme="blue" type="button" onClick={() => context.openModal()}>
        Abrir modal
      </Button>
      </Box>
    </Box>
  );
}

export default Dashboard;