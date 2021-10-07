import React from 'react'
import { View, Text as RNText } from 'react-native'
import { mergeAll,flatten } from 'ramda'
import {presets} from './text.preset'


const Text=({children,preset='default',style})=> {

    const textStyles=mergeAll(
        flatten([presets[preset] || presets.default, style])
    )

    
    return (
            <RNText style={textStyles}>
                {children}
            </RNText>
    )
}
export default Text