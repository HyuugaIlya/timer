import { useState } from "react"

type TTimer = {
    setTimer: React.Dispatch<React.SetStateAction<{ h: number, m: number, s: number }>>
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const TimerForm = ({
    setTimer,
    setIsActive,
}: TTimer) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    const formSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTimer({ 'h': hours, 'm': minutes, 's': seconds })
        setIsActive(false)
    }

    return <form onSubmit={formSubmit}>
        <input type="number" value={hours} onChange={(e) => setHours(+e.target.value)} />
        <input type="number" value={minutes} onChange={(e) => setMinutes(+e.target.value)} />
        <input type="number" value={seconds} onChange={(e) => setSeconds(+e.target.value)} />
        <input type="submit" value="Отправить" />
    </form>
}