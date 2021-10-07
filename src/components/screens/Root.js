import React from 'react'
import { SafeAreaView, View} from 'react-native'
import Text from '../../components/text/text'

export default function Root() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
            <Text>Root</Text>
        </SafeAreaView>
    )
}
