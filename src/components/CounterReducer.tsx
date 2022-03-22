import { useReducer } from "react"

interface CounterState {
    counter: number,
    previous: number,
    changes: number
}

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'rest' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'rest':
            return {
                changes: 0,
                counter: 0,
                previous: 0
            }
            break;
        case 'increaseBy':
            return {
                changes: state.changes + 1,
                counter: state.counter + action.payload.value,
                previous: state.counter
            }
            break;

        default:
            return state;
    }
}
export const CounterReducer = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClickReset = () => {
        dispatch({ type: 'rest' })
    }
    const increaseBy = (value: number) => {
        console.log()
        dispatch({ type: 'increaseBy', payload: { value } })
    }


    return (
        <>
            <h1>CounterReducer: </h1>
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
