import React, { useContext } from 'react';

import ModalContext from './context'

import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, } from '@chakra-ui/react'

const ModalC: React.FC = () => {

  const context = useContext(ModalContext)

  context.openModal = () => onOpen()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Brasil de
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )

}

export default ModalC;