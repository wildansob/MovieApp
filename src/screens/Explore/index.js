import React from 'react'
import {View} from 'react-native'
import { useSelector } from 'react-redux'
import Poppins from '../../component/Poppins'

export default function Explore() {
    const ExploreData = useSelector (state=>state);

    console.log(ExploreData, "ini explore data");
    
    return (
        <View>
            <Poppins>ini Explore</Poppins>
        </View>
    )
}
