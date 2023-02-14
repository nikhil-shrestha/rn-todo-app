import 'react-native'
import React from 'react'
import { render } from '../../src/utils/test-utils'

import NotFound from '../../src/components/NotFound'

describe('NotFound', () => {
    it("should show title 'Not Found'", () => {
        let { getByText } = render(<NotFound />, {})
        getByText('Not Found')
    })

    it("should show message 'There is nothing to show'", () => {
        let { getByText } = render(<NotFound />, {})
        getByText('There is nothing to show')
    })
})
