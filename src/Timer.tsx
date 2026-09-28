import { useEffect } from "react"

type TTimer = {
    timer: {
        h: number,
        m: number,
        s: number
    },
    setTimer: React.Dispatch<React.SetStateAction<{ h: number, m: number, s: number }>>
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const Timer = ({ timer, setTimer, setIsActive }: TTimer) => {
    useEffect(() => {
        if (timer.h > 0 && timer.m == 0 && timer.s == 0) {
            setTimer({ "h": timer.h - 1, 'm': 60, 's': 0 })
        }
        if (timer.m > 0 && timer.s == 0) {
            setTimer({ ...timer, 'm': timer.m - 1, 's': 60 })
        }
        if (timer.s > 0) {
            const timeout = setTimeout(() => {
                setTimer({ ...timer, 's': timer.s-- })
            }, 1000)

            return () => clearTimeout(timeout)
        }
        console.log('timer')
    }, [setTimer, timer])

    return (
        <div className="timer_wrapper" onClick={() => setIsActive(true)}>
            {Object.values(timer).map((t, i) => <div key={i} className="timer_item">
                <p>{`${t}`.length > 1 ? t : ('0' + t)}</p>
                <p>{i == 2 ? '' : ':'}</p>
            </div>)}
        </div>
    )
}
