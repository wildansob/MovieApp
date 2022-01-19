const initialState = {
WatchLaterMovies: [],
}

const MyListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MYLIST':
        console.log(action, 'ini from MyList');
        return {
            ...state,
            WatchLaterMovies : action.data,
        };
        default :
    return state;
}}
export default MyListReducer;