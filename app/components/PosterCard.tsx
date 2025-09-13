import React from 'react'
import { Image, Pressable, View } from 'react-native'
import { PosterType } from '../data/types/poster'
import CustomText from './CustomText'

const PosterCard = ({title='', image, color, index, selectCard, focused}:PosterType|any) => {
    // const [selectedCard, setSelectedCard] = useState()
    // console.log(`${title} -> ${index}`)
  return (
    <Pressable onPress={() => selectCard(index)} className='w-[107px] flex'>
        <View className='w-full flex flex-col items-start overflow-hidden rounded-2xl border' style={{borderColor:focused ? 'white' : 'transparent', borderWidth:2}}>
            <View className='w-full h-[100px]'>
                <Image source={image} resizeMode='cover' className='h-full w-full'/>
            </View>
            <View className='flex items-center justify-center w-full p-2' style={{backgroundColor:color}}>
                <CustomText className='text-white text-[12px]'>{title}</CustomText>
            </View>
        </View>
    </Pressable>
  )
}

export default PosterCard