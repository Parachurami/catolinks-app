import React from 'react'
import { View } from 'react-native'
import { useSystemTheme } from '../hooks/useSystemTheme'

const Divider = () => {
  const {themeData} = useSystemTheme()
  return (
    <View style={{backgroundColor:themeData.dividerStyle}} className='w-full h-[0.7px] opacity-60 bg-[#818385c5]'>
      
    </View>
  )
}

export default Divider