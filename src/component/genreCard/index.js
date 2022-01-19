import React from 'react';
import {TouchableOpacity} from 'react-native';
import Poppins from '../Poppins';
import {genreStyles} from './style';

export default function GenreCard({title, isActive, onPress}) {
  return (
    <TouchableOpacity
    onPress={onPress}
      activeOpacity={0.7}
      style={genreStyles[isActive ? 'buttonActive' : 'button']}>
      <Poppins color={isActive ? 'white' : 'black'} size={12}>
        {title}
      </Poppins>
    </TouchableOpacity>
  );
}
