import React from 'react'
import { View } from 'react-native'
import { useSystemTheme } from '../hooks/useSystemTheme'
import CustomText from './CustomText'
import Divider from './Divider'
import SettingTile from './SettingTile'

const SettingsContainer = () => {
  const {themeData} = useSystemTheme()
  return (
    <View className='w-full flex flex-col'>
        <CustomText style={{color:themeData.settingsText}} className='text-[#75797a] text-2xl mb-2'>Settings</CustomText>
        <View style={{backgroundColor:themeData.inputContainer}} className='w-full flex flex-col rounded-2xl px-4 bg-[#161819]'>
            <SettingTile title={'Size'} value={'1080 x 1920 px'}/>
            <Divider/>
            <SettingTile title={'Category'} value={'Foods and beverage'}/>
        </View>
    </View>
  )
}

export default SettingsContainer