import React from 'react'
import { Pressable, ScrollView, StatusBar, View,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../planetHeader'
import Text from '../text/text'
import { colors, spacing } from '../theme'

export default function Details({route}) {
    const {planet}=route.params;
    const {surfaceImage,name,description}=planet;
    return (
        <SafeAreaView style={{backgroundColor:colors.black,flex:1}}>
                <PlanetHeader backButton={true}/>


            <ScrollView>
                <View style={{padding:spacing[4], alignItems:'center',justifyContent:'center'}}>
                    <Image source={surfaceImage} style={{alignSelf:'center',height:200}} resizeMode="contain"/>
                    <View style={{marginTop:spacing[4]}}>
                        <Text preset="h1" style={{textAlign:'center', textTransform:'uppercase'}}>{name}</Text>
                        <Text style={{marginTop:spacing[5],textAlign:'center',paddingHorizontal:spacing[4],lineHeight:spacing[5]}}>{description}</Text>
                    </View>
                </View>

            </ScrollView>

                
        </SafeAreaView>
    )
}
