import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'

const TabBarIndicator = ({width, state,}:{width:number | any, state: TabNavigationState<ParamListBase>}) =>{
    return (
        <>
            <View style={{backgroundColor:'transparent'}} className='w-full h-full'>

            </View>
            <View className='w-full h-[5px] absolute bottom-0 flex flex-1 flex-row'>
                {state.routes.map((route: any, index: React.Key | null | undefined) =>{

                    return(
                        <View key={index} className={`h-full`} style={{width, opacity:state.index === index ? 1 : 0}}>
                            <LinearGradient className='w-full h-full' end={{x:1.1, y:0.6}} colors={['cyan', 'indigo']}/>
                        </View>
                    )
                })}
            </View>
        </>
    )
}

export default TabBarIndicator