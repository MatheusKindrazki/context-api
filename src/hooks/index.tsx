import { createContext, useCallback, useState, useContext } from 'react'

interface SignContextProps {
  signIn: (data: { user: string, password: string }) => void
  signed: boolean
  userName: string 
}

const SignContext = createContext({} as SignContextProps)

const SignProvider: React.FC = ({ children }) => {

  const [signed, setSigned] = useState(false)
  const [userName, setUser] = useState('')

  const signIn = useCallback(() => {
    setTimeout(() => {
      setSigned(true)

      setUser('Matheus')
    }, 500)
  },[])


  return (
    <SignContext.Provider value={{ signed, signIn, userName }}>
      {children}
    </SignContext.Provider>
  )
}


function useAuth(): SignContextProps {

  const context = useContext(SignContext)

  if(!context) {
    throw new Error('Provider necessário para usar o hook!')
  }

  return context

}


export { SignProvider, useAuth }

export default SignContext;

