import React from 'react'
import { Image, Pressable, useWindowDimensions, View } from 'react-native'
import { PosterType } from '../data/types/poster'
import { useSystemTheme } from '../hooks/useSystemTheme'
import CustomText from './CustomText'

const PosterCard = ({title='', image, color, index, selectCard, focused}:PosterType|any) => {
    const {width} = useWindowDimensions()
    const {currentTheme:theme} = useSystemTheme() 

    const focusHandler = () =>{
        if(theme === 'dark'){
            if(focused) return 'white';
            else return 'transparent';
        }else{
           if (focused) return color;
           else return 'transparent';
        }
    }
  return (
    <Pressable onPress={() => selectCard(index)} style={{width:width < 720 ? 107 : 180}} className='flex'>
        <View className='w-full flex flex-col items-start overflow-hidden rounded-[12px] border' style={{borderColor: focusHandler(), borderWidth:2}}>
            <View className='w-full h-[100px] rounded-lg overflow-hidden z-10'>
                <Image source={image} resizeMode='cover' className='h-full w-full'/>
            </View>
            <View className='-z-10 -mt-1 flex items-center justify-center w-full p-2 fixed bottom-0' style={{backgroundColor:color}}>
                <CustomText className='text-white text-[12px]'>{title}</CustomText>
            </View>
        </View>
    </Pressable>
  )
}

export default PosterCard