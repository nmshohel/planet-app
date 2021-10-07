import React from 'react'
import { Pressable, StatusBar, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../planetHeader'
import Text from '../text/text'
import { colors } from '../theme'

export default function Details() {
    return (
        <SafeAreaView style={{backgroundColor:colors.black,flex:1}}>
                <PlanetHeader/>
                {/* <Pressable onPress={()=>navigation.navigate("Home")}>
                    <Text>Got to Home Page</Text>
                </Pressable> */}

                <StatusBar barStyle='light-content'/>
        </SafeAreaView>
    )
}