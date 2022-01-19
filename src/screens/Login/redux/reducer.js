const initialState = {
Username: ['wildansob'],
Password: [],
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
        console.log(action, 'ini from Login');
        return {
            ...state,
            Username : action.data,
        };
        default :
    return state;
}}
export default LoginReducer;