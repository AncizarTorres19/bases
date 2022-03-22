import { useReducer } from "react"
import { doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from "./reducer/counterReducer";



const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0
}



export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClickReset = () => {
        dispatch(doReset())
    }
    const increaseBy = (value: number) => {
        dispatch(doIncreaseBy(value))
        // dispatch({ type: 'increaseBy', payload: { value } })
    }


    return (
        <>
            <h1>Counter Reducer Segmentado: </h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>
            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            <button onClick={handleClickReset}>
                Reset
            </button>
        </>
    )
}
