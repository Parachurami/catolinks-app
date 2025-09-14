import { useSystemTheme } from '@/app/hooks/useSystemTheme'
import React from 'react'
import { Text, View } from 'react-native'

const Advanced = () => {
  const {themeData} = useSystemTheme()
  return (
    <View style={{backgroundColor:themeData.backgroundColor}} className='flex-1 bg-black flex items-center justify-center'>
      <Text style={{color:themeData.textColor}} className='text-white'>Advanced</Text>
    </View>
  )
}

export default Advanced