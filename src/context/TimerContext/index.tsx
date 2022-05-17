// Timer Context
import { createContext, ReactNode, useState } from 'react'

interface ITimerContext {
  isRunning: boolean
  setIsRunning: (fn: boolean) => void
  counter: number
  setCounter: (fn: any) => void
  second: string | number
  setSecond: (fn: string | number) => void
  minute: string | number
  setMinute: (fn: string | number) => void
  hour: string | number
  setHour: (fn: string | number) => void
}

export const TimerContext = createContext({} as ITimerContext)

const TimerProvider = ({ children }: { children: ReactNode }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)
  const [second, setSecond] = useState<string | number>('00')
  const [minute, setMinute] = useState<string | number>('00')
  const [hour, setHour] = useState<string | number>('00')

  const timerValue = {
    isRunning,
    setIsRunning,
    counter,
    setCounter,
    second,
    setSecond,
    minute,
    setMinute,
    hour,
    setHour,
  }

  return (
    <TimerContext.Provider value={timerValue}>{children}</TimerContext.Provider>
  )
}

export default TimerProvider
