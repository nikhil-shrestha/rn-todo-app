import 'react-native'
import React from 'react'
import { render, fireEvent } from '../../src/utils/test-utils'

import MenuItem from '../../src/components/MenuItem'

const onPressMock = jest.fn()
const eventData = {
    nativeEvent: {
        pageX: 20,
        pageY: 30,
    },
}

describe('MenuItem', () => {
    it('should fire press', () => {
        let { getByText } = render(<MenuItem label="Press me" onPress={onPressMock} />, {})

        fireEvent.press(getByText('Press me'), eventData)
        expect(onPressMock).toHaveBeenCalledWith(eventData)
    })
})
