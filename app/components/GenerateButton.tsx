import { images } from '@/constants/images'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import CustomText from './CustomText'

const GenerateButton = () => {
  return (
    <TouchableOpacity className='w-full flex flex-row gap-4 items-center justify-center bg-white rounded-2xl p-3'>
      <View className='size-10'>
        <Image source={images.ai_img} resizeMode='cover' className='size-full'/>
      </View>
      <CustomText style={{fontFamily:'Inter-bold'}} className='text-black text-lg'>Generate Text</CustomText>
    </TouchableOpacity>
  )
}

export default GenerateButton