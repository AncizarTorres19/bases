import { useState } from "react"

interface propsArgs {
    initialValue: number
}

export const Counter = ({initialValue}: propsArgs) => {
    const [counter, setCounter] = useState(initialValue)
    const handleClick = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
