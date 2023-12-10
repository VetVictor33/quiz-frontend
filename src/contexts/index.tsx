import { StateMachineProvider } from "little-state-machine"

interface AppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <StateMachineProvider>
      {children}
    </StateMachineProvider>
  )
}