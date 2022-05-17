import { FC } from 'react'
import './App.css'
import Timer from './components/Timer'
import TimerContext from './context/TimerContext'

const App: FC = () => {
  return (
    <>
      <main>
        <div className="py-10">
          <div className="container">
            <TimerContext>
              <Timer />
            </TimerContext>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
