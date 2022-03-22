import { useState } from "react"

interface PropsArgs {
    initialValue: number;
}
interface CoubterState {
    counterBy: number;
    clicks: number;
}

export const CounterBy = ({ initialValue }: PropsArgs) => {
    const [counter, setCounter] = useState<CoubterState>({
        counterBy: initialValue,
        clicks: 0
    })

    const { counterBy, clicks } = counter

    const handleClick = (value: number) => {
        setCounter(({ clicks, counterBy }) => ({
            counterBy: counterBy + value,
            clicks: clicks + 1
        }))
    }

    return (
        <>
            <h1>CounterBy: {counterBy}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
