import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { store } from './src/store/store'
import { ThemeProvider } from './src/theme/useTheme'
import { NoInternetToast } from './src/components/NoInternet'

// Navigation
import RootNavigation from './src/routes/RootNavigation'

export default class App extends Component {
    render() {
        return (
            <SafeAreaProvider>
                <Provider store={store}>
                    <ThemeProvider>
                        <RootNavigation />
                        <NoInternetToast />
                    </ThemeProvider>
                </Provider>
            </SafeAreaProvider>
        )
    }
}
