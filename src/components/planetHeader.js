import React from 'react'
import { TouchableOpacity, View,StyleSheet } from 'react-native'
import Text from './text/text'
import { colors, spacing } from './theme'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const styles=StyleSheet.create({
    container:{
        paddingLeft:spacing[4],
        paddingVertical:spacing[4],
        borderBottomWidth:.2,
        borderColor:colors.white,
        flexDirection:'row',
        alignItems:'center'

    }

})

export default function PlanetHeader({backButton=false}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
                {backButton && 
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign name="left" size={24} color="white" style={{marginRight:spacing[4],top:1}} />
                    </TouchableOpacity>
                }
            
            
            <Text preset="h2">
                THE PLANETS
            </Text>
            
        </View>
    )
}
