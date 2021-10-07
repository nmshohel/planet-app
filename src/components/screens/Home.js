
import React from 'react'
import { Pressable, StatusBar, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../planetHeader'
import Text from '../text/text'
import { colors } from '../theme'

export default function Home({navigation}) {
    return (
        <SafeAreaView style={{backgroundColor:colors.black,flex:1}}>
                <PlanetHeader/>
                <Pressable onPress={()=>navigation.navigate("Details")}>
                    <Text>Got to Details Page</Text>
                </Pressable>

                <StatusBar barStyle='light-content'/>
        </SafeAreaView>
    )
}
