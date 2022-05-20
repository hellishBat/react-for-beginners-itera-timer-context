import { useEffect, useContext } from 'react'
import { TimerContext } from '../../context/TimerContext'

const useTimer = () => {
  const { isRunning, setIsRunning, counter, setCounter } =
    useContext(TimerContext)

  useEffect(() => {
    let counterInterval: any

    if (isRunning) {
      counterInterval = setInterval(() => {
        setCounter((counter: number) => counter + 1)
      }, 1000)
    }

    return () => clearInterval(counterInterval)
  }, [isRunning, setIsRunning, counter, setCounter])

  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCounter(0)
  }

  return { startTimer, stopTimer, resetTimer }
}

export default useTimer
