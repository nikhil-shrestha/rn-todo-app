/* 
 *  https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

import { useEffect, useCallback, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native'

function useInterval(callback: CallableFunction, delay: number): void {
    const savedCallback = useRef<CallableFunction | null>(null)

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useFocusEffect(
        useCallback(() => {
            function tick() {
                if (savedCallback.current) savedCallback.current()
            }

            if (delay === null) {
                return () => {
                    /* meh */
                }
            }

            const id = setInterval(tick, delay)
            return () => clearInterval(id)
        }, [delay]),
    )
}

export default useInterval
