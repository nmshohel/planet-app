import React from 'react'
import { View } from 'react-native'
import Text from './text/text'
import { colors, spacing } from './theme'

export default function PlanetHeader() {
    return (
        <View style={{paddingLeft:spacing[4],paddingVertical:spacing[4],borderBottomWidth:.2,borderColor:colors.white}}>
            <Text preset="h2">
                THE PLANETS
            </Text>
        </View>
    )
}
