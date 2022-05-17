// Timer Context
import { createContext, ReactNode, useState } from 'react'

interface ITimerContext {
  isRunning: boolean
  setIsRunning: (fn: boolean) => void
  counter: number
  setCounter: (fn: any) => void
}

export const TimerContext = createContext({} as ITimerContext)

const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  const timerValue = {
    isRunning,
    setIsRunning,
    counter,
    setCounter,
  }

  return (
    <TimerContext.Provider value={timerValue}>{children}</TimerContext.Provider>
  )
}

export default TimerProvider
