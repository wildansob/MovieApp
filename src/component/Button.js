import React from 'react'
import { TouchableOpacity, StyleSheet} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { moderateScale } from 'react-native-size-matters'
import Poppins from './Poppins'

export default function Button({
    title,
    backgroundColor = 'lightblue',
    width = 240,
    textStyle = {},
    activeOpacity = 0.7,
    style,
}) {
    const styles = StyleSheet.create ({
        container: {
            backgroundColor,
            width: moderateScale(width),
            paddingHorizontal : widthPercentageToDP(4),
            paddingVertical : heightPercentageToDP(2),
            justifyContent: 'center',
            alignItems: 'center',
            ...style
        },
    })
    return <TouchableOpacity activeOpacity={activeOpacity} style={styles.container}>
            <Poppins style={textStyle}>{title}</Poppins>
            </TouchableOpacity>
}
