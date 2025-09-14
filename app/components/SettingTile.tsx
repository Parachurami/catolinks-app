import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSystemTheme } from '../hooks/useSystemTheme';
import CustomText from './CustomText';

const SettingTile = ({title, value}:{title:any, value:any}) => {
  const {themeData} = useSystemTheme()
  return (
    <TouchableOpacity className='w-full py-[18px] flex flex-row items-center justify-between'>
      <CustomText style={{color:themeData.textColor}} className='text-lg'>{title}</CustomText>
      <View className='flex flex-row items-center gap-2'>
        <CustomText style={{color:themeData.settingsText}} className='text-lg'>{value}</CustomText>
        <Octicons name="chevron-right" size={18} color="#71717A" />
      </View>
    </TouchableOpacity>
  )
}

export default SettingTile