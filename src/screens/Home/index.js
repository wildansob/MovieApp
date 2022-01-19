import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import CardMovie from '../../component/cardMovie';
import GenreCard from '../../component/genreCard';
import Poppins from '../../component/Poppins';

// import action redux
import {setChangePassword} from '../Account/redux/action';
import {setDetailMovie} from '../Explore/redux/action';
import {
  getGenres,
  getNowPlayingMovie,
  GetPopularMovie,
  getTopRatedMovie,
  setDatapopulars,
} from './redux/action';

export default function Home(props) {
  // declare dulu statenya
  const dispatch = useDispatch();
  const reducer = useSelector(state => state);
  const HomeData = useSelector(state => state);

  //useSelector mengambil data yg di reducer untuk di masukan ke komponen yang membutuhkan
  const MoviePopulars = useSelector(state => state.Home.populars);
  const topRated = useSelector(state => state.Home.topRated);
  const nowPlaying = useSelector(state => state.Home.nowPlaying);
  const genres = useSelector(state => state.Home.genres);

  // Latihan Action Reducer
  //dispatch Action All Reducer
  const dispatchAction = () => {
    //Reducer Home
    dispatch(setDatapopulars(['audy', 'wildan', 'kelvin']));
    //Reducer Explore
    dispatch(setDetailMovie({title: 'spiderman', photo: 'dsadad'}));

    //Account Reducer
    dispatch(setChangePassword('5678'));

    //Help Center
    dispatch({
      type: 'SET_HELP_CENTER',
      data: ['0897654633'],
    });

    //Login Reducer
    dispatch({
      type: 'SET_LOGIN',
      data: ['wilman'],
    });

    //MyList Reducer
    dispatch({
      type: 'SET_MYLIST',
      data: ['Waikiki', 'avengers'],
    });

    //Register Reducer
    dispatch({
      type: 'SET_REGISTER',
      data: ['wildan Shobara'],
    });
  };
  // Sampai sini latihan action reducer

  useEffect(() => {
    dispatch(GetPopularMovie());
    dispatch(getTopRatedMovie());
    dispatch(getNowPlayingMovie());
    dispatch(getGenres());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{marginTop: moderateScale(24)}}
        horizontal
        data={genres}
        renderItem={({item, index}) => {
          return (
            <GenreCard
              onPress={() => console.log(item)}
              title={item.name}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <ScrollView>
        <TouchableOpacity onPress={dispatchAction}>
          <Poppins>Dispatch Please</Poppins>
        </TouchableOpacity>
        <View>
          <CardMovie
            navigation={props.navigation}
            title={'Popular'}
            data={MoviePopulars}
          />
        </View>

        <View>
          <CardMovie
            navigation={props.navigation}
            title={'Top Rated'}
            data={topRated}
          />
        </View>

        <View>
          <CardMovie
            navigation={props.navigation}
            title={'Now Playing'}
            data={nowPlaying}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
