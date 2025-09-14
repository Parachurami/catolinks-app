import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { posters } from '../data/dummyData'
import PosterCard from './PosterCard'

const PosterList = () => {
    const [selectedCard, setSelectedCard] = useState(0);
    const selectCard = (id:number) => setSelectedCard(id);
    // console.log(selectedCard)
    return (
        <ScrollView className='w-full flex' horizontal showsHorizontalScrollIndicator={false}>
            <View className='w-full flex flex-row gap-3'>
            {
                posters.map((poster, index) =>{
                    const focused = selectedCard === index;
                    return <PosterCard selectCard={selectCard} index={index} key={index} {...poster} focused={focused}/>
                })
            }
            </View>
        </ScrollView>
    )
}

export default PosterList