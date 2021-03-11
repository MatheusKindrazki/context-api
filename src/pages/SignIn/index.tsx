import React, { useCallback, FormEvent } from "react";

import { Box, Heading, Text, Button, Input } from '@chakra-ui/react';
import { useAuth } from "../../hooks";

const SignIn: React.FC = () => {

  const { signIn, signed } = useAuth()

  console.log(signed)

  const handleSubmit = useCallback((e: FormEvent) => {

    e.preventDefault()

    signIn({
      password: '1234',
      user: 'matheuskindrazki'
    })

  },[signIn])


  return (
    <Box backgroundColor="rgba(0, 0, 0, 0.1)" width="100%" height="100vh" d="flex" justifyContent="center" alignItems="center" flexDir="column">

      <Box backgroundColor="white" rounded="md" p="6" maxWidth="400px">
        <Heading color="black" fontSize="xl" mb="2">
          Entrar
        </Heading>
        <Text fontSize="md" color="gray.500" mb="8">
          Insira seus dados de acesso para começar
        </Text>

        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            type="text"
            placeholder="Digite seu usuário"
            mb="2"
            />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            mb="4"
          />

          <Button
            type="submit"
            textTransform="uppercase"
            width="100%"
            variant="solid"
            colorScheme="green"
            mb="6"
          >
            Entrar
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default SignIn;