import React from 'react'
import { Button, Text } from 'react-native'

import { decrement, increment } from '../../redux/demo/counter'
import { useReduxDispatch, useReduxSelector } from '../../redux'

const Counter = (): React.ReactElement => {
    const value = useReduxSelector((state) => state.counter)
    const dispatch = useReduxDispatch()

    return (
        <>
            <Text>{value}</Text>
            <Button title="increment" onPress={() => dispatch(increment(1))} />
            <Button title="decrement" onPress={() => dispatch(decrement(1))} />
        </>
    )
}

export default Counter
