import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

const InputContainer = () => {
  return (
    <View className='w-full bg-[#161819] h-[170px] rounded-xl overflow-hidden p-4 flex flex-col items-center justify-center'>
        <TextInput style={{fontFamily:'Inter'}} multiline placeholder='' scrollEnabled spellCheck className=' m-0 w-full text-white h-[80%] align-top' cursorColor={'white'}/>
        <View className='w-full flex items-end'>
            <TouchableOpacity onPress={() =>{}}>
                {/* <Image source={images.pic_icon} resizeMode='cover' className='size-20'/> */}
                <MaterialCommunityIcons name="image-plus-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default InputContainer