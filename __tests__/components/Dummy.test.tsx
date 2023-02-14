import 'react-native'
import React from 'react'
import { render } from '../../src/utils/test-utils'

import Dummy from '../../src/components/Dummy'

describe('Dummy', () => {
    it('should renders correctly', () => {
        let { getByText } = render(<Dummy />, {})
        getByText(/Hello/i)
    })
})
