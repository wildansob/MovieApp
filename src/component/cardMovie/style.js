import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create ({
    container : {
        marginVertical: moderateScale(24),
    },
    header : {flexDirection: 'row', justifyContent: 'space-between'},
    content: {marginVertical : moderateScale(16)},
    buttonSeeAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: moderateScale(72),
    }

    
})