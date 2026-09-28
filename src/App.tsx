import { Timer } from './Timer'

import './App.css'
import { useState } from 'react'
import { TimerForm } from './TimerForm'

function App() {
  const [timer, setTimer] = useState({ 'h': 0, 'm': 0, 's': 0 })
  const [isActive, setIsActive] = useState(false)

  return (
    <main>
      {isActive
        ? <TimerForm
          setTimer={setTimer}
          setIsActive={setIsActive}
        />
        : <Timer
          timer={timer}
          setTimer={setTimer}
          setIsActive={setIsActive}
        />}
    </main>
  )
}

export default App
