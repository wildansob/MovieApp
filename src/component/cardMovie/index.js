import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Poppins from '../Poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {URL} from '../../helpers/url';
import {COLOR} from '../../config/color';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './style';
import {ListItem} from 'react-native-elements/dist/list/ListItem';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';

export default function CardMovie({title, data = [], navigation}) {
  //function send data pakai navigation
  // const onClickMovie = data => {
  //   console.log(data);
  //   navigation.navigate('DetailMovie', {
  //     data,
  //   })
  // }
  const getByDetails = data => {
    navigation.navigate('Movie Detail', {data});
    // const res = await axios ({
    //   method : 'GET',
    //   url : `${URL.baseUrl}/movie/${id}`,
    //   headers : {authorization : `Bearer ${URL.token}`},
    // })
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Poppins>{title}</Poppins>

        <TouchableOpacity style={styles.buttonSeeAll}>
          <Poppins size={12}>See All</Poppins>

          <Ionicons
            name="chevron-forward-outline"
            size={moderateScale(16)}
            color={COLOR.red}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => getByDetails(item)}
              style={styles.content}>
              <FastImage
                source={{
                  uri: `${URL.imageUrl.sd}${item.poster_path}`,
                }}
                style={{
                  height: moderateScale(120),
                  width: moderateScale(80),
                }}
                resizeMode="contain"
              />
              <Poppins
                size={12}
                align="center"
                style={{width: moderateScale(80), marginTop: moderateScale(8)}}>
                {item.original_title}
              </Poppins>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
