import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {COLOR} from '../../config/color';

export const genreStyles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  buttonActive: {
    backgroundColor: COLOR.red,
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(4),
  },
});
