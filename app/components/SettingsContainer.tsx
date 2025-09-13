import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'
import Divider from './Divider'
import SettingTile from './SettingTile'

const SettingsContainer = () => {
  return (
    <View className='w-full flex flex-col'>
        <CustomText className='text-[#75797a] text-xl mb-2'>Settings</CustomText>
        <View className='w-full flex flex-col rounded-2xl px-4 bg-[#161819]'>
            <SettingTile title={'Size'} value={'1080 x 1920 px'}/>
            <Divider/>
            <SettingTile title={'Category'} value={'Foods and beverage'}/>
        </View>
    </View>
  )
}

export default SettingsContainer