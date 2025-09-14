import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useSystemTheme } from '../hooks/useSystemTheme';

const InputContainer = () => {
  const {themeData} = useSystemTheme()
  return (
    <View style={{backgroundColor:themeData.inputContainer}} className='w-full bg-[#161819] h-[170px] rounded-xl overflow-hidden p-4 flex flex-col items-center justify-center'>
        <TextInput style={{fontFamily:'Inter-bold', color:themeData.textColor}} placeholderTextColor={themeData.placeholder} multiline placeholder='' scrollEnabled spellCheck className=' m-0 w-full text-white h-[80%] align-top text-lg font' cursorColor={themeData.textColor}/>
        <View className='w-full flex items-end'>
            <TouchableOpacity onPress={() =>{}}>
                {/* <Image source={images.pic_icon} resizeMode='cover' className='size-20'/> */}
                <MaterialCommunityIcons name="image-plus-outline" size={24} color={themeData.textColor} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InputContainer