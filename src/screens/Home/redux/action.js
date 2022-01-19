//
export const GetPopularMovie = () => {
    return {
        type : 'GET_POPULAR_MOVIE'
    }
}

export const setPopularMovie = payload => ({
    type : 'SET_DATA_POPULARS',
    payload,
})

export const getTopRatedMovie = () => {
    return {
        type : 'GET_TOP_RATED_MOVIE'
    }
}

export const setDataTopRated = payload => ({
    type : 'SET_DATA_TOP_RATED',
    payload,
})

export const getNowPlayingMovie = () => ({
    type : 'GET_NOW_PLAYING_MOVIE'
})

export const setDataNowPlaying = payload => ({
    type : 'SET_DATA_NOW_PLAYING',
    payload,
})

export const getGenres = () => ({
    type : 'GET_GENRES',

})

export const setGenres = payload => ({
    type : 'SET_GENRES',
    payload,
})
