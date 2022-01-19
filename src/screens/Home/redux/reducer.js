const initialState = {
    populars: [],
    topRated: [],
    nowPlaying: [],
    genres : [],
}

const HomeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_DATA_POPULARS':
        console.log(action, 'ini from Home');
        return {
            ...state,
            populars : action.payload,
        };
        
        case 'SET_DATA_TOP_RATED':
            console.log(action, 'ini from Home');
        return {
            ...state,
            topRated: action.payload,
        }
        case 'SET_DATA_NOW_PLAYING':
            console.log(action, 'ini from Home');
            return {
                ...state,
                nowPlaying: action.payload,
            }
        case 'SET_GENRES' :
            return {
                ...state,
                genres : action.payload,
            }
        default:
            return state;
    }
};

export default HomeReducer;