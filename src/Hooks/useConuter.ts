import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { gsap } from "gsap";

interface HookProps {
    maxCount: number
}
export const useConuter = ({ maxCount }: HookProps) => {

    const [counter, setCounter] = useState(0)
    const elementToAnimet = useRef<any>(null)

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1, maxCount))
    }

    useLayoutEffect(() => {

        if (!elementToAnimet.current) return;

        tl.current.to(elementToAnimet.current, { y: -19, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimet.current, { y: 0, duration: 1, ease: 'bounce.out' })
            .pause()
    }, [])

    useEffect(() => {
        tl.current.play(0)
    }, [counter])

    return {
        elementToAnimet,
        handleClick,
        counter
    }
}
