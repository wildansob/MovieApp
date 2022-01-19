import {put, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import { setDataNowPlaying, setDataTopRated, setGenres, setPopularMovie } from './action';
import {URL} from '../../../helpers/url'

function* GetPopularMovieSaga(){
try {
    const res = yield axios ({
        method : 'GET',
        url : `${URL.baseUrl}/movie/popular`,
        headers : {
            Authorization : 
            `Bearer ${URL.token}`
        },
        
        validateStatus: status => status <500,
    });
    yield put(setPopularMovie(res.data.results))
    console.log(res, 'ini console res get popular movie');
} catch (error){
    console.log(error);
}
}

function* getTopRatedMovieSaga (){
    try {
        const res = yield axios ({
            method : 'GET',
            url : `${URL.baseUrl}/movie/top_rated`,
            headers : {
                Authorization :
                `Bearer ${URL.token}`
            },
            validateStatus : status => status < 500,
        })
        console.log(res, 'ini dari top rated');
        yield put (setDataTopRated(res.data.results))
    } catch (error) {
        
    }
}

function* getNowPlayingMovieSaga (){
    try {
        const res = yield axios ({
            method : 'GET',
            url : `${URL.baseUrl}/movie/now_playing`,
            headers : {
                Authorization :
                `Bearer ${URL.token}`
            },
            validateStatus : status => status <500,
        })
        console.log(res, 'ini dari nowPlaying');
        yield put (setDataNowPlaying(res.data.results))
    } catch (error) {
        
    }
}

function* getGenresSaga () {
try {
    const res = yield axios ({
        method : 'GET',
        url : `${URL.baseUrl}/genre/movie/list`,
        headers : {
            Authorization :
            `Bearer ${URL.token}`
        },
        validateStatus : status => status < 500,
    })
    console.log(res.data.genres, 'ini dari genre');
    yield put (setGenres(res.data.genres))
} catch (error) {
    
}
}

export function* HomeWatcher () {
    yield takeLatest ('GET_POPULAR_MOVIE', GetPopularMovieSaga)
    yield takeLatest ('GET_TOP_RATED_MOVIE', getTopRatedMovieSaga)
    yield takeLatest ('GET_NOW_PLAYING_MOVIE', getNowPlayingMovieSaga)
    yield takeLatest ('GET_GENRES', getGenresSaga)
}