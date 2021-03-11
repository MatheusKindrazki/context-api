import { createContext } from 'react'

interface DashboardProps {
  openModal: () => void
}

const ModalContext = createContext({} as DashboardProps)

export default ModalContext