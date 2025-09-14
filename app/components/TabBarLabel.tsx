import React from 'react'
import { View } from 'react-native'
import { useSystemTheme } from '../hooks/useSystemTheme'
import CustomText from './CustomText'

const TabBarLabel = ({focused, children}:{focused:boolean, children:string}) =>{
    const {themeData} = useSystemTheme()
    return(
        <View>
            <CustomText className='mb-4 text-lg' style={{color:themeData.textColor, opacity:focused ? 1 : 0.7,fontFamily:focused?'Inter-bold':'Inter' ,}}>{children}</CustomText>
        </View>
    )
}

export default TabBarLabel