import { useConuter } from "../Hooks/useConuter";

export const CounterHook = () => {

    const {elementToAnimet, handleClick, counter} = useConuter({maxCount: 10});

    return (
        <>
            <h1>Counter Hook: </h1>
            <h2 ref={elementToAnimet}>{counter}</h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
