import React from 'react'
import { Text, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import DefaultPage from '../../components/layouts/DefaultPage'

type HomeScreenProps = {
    navigation: MainNavigationProp<MainRoutes.Home>
}
const HomeScreenB = ({ navigation }: HomeScreenProps): React.ReactElement => (
    <DefaultPage>
        <Text>Seection B</Text>
        <Button title="settings" onPress={() => navigation.navigate(MainRoutes.Settings)} />
    </DefaultPage>
)

export default HomeScreenB
