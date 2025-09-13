import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'

const TabBarLabel = ({focused, children}:{focused:boolean, children:string}) =>{
    return(
        <View>
            <CustomText style={{color:'white', opacity:focused ? 1 : 0.7,fontFamily:focused?'Inter-bold':'Inter' ,}}>{children}</CustomText>
        </View>
    )
}

export default TabBarLabel