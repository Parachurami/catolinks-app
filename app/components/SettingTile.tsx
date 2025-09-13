import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';

const SettingTile = ({title, value}:{title:any, value:any}) => {
  return (
    <TouchableOpacity className='w-full py-[18px] flex flex-row items-center justify-between'>
      <CustomText className='text-white text-lg'>{title}</CustomText>
      <View className='flex flex-row items-center gap-2'>
        <CustomText className='text-[#71717A] text-lg'>{value}</CustomText>
        <Octicons name="chevron-right" size={18} color="#71717A" />
      </View>
    </TouchableOpacity>
  )
}

export default SettingTile