import { CounterState } from "../interfaces/interfaces";


export type CounterAction =
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'rest' }

export const doReset = (): CounterAction => ({
    type: 'rest'
})

export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: {value}
})