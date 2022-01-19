const initialState = {
detailMovie: {},
searchResult: [],
}

const ExploreReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_DETAIL_MOVIE':
        console.log(action, 'ini from Explore');
        return {
            ...state,
            detailMovie : action.payload,
        };
        case 'SET_DATA_SEARCH_RESULT':
            console.log(action, 'ini from Explore');
            return {
                ...state,
                nowPlaying : action.payload,
            };
        default:
    return state;
}}
export default ExploreReducer;