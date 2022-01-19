const initialState = {
RegisterData: {
    Name : [],
    Email : [],
    NoHandphone: [],
    Password: [],
},
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REGISTER':
        console.log(action, 'ini from REGISTER');
        return {
            ...state,
             Name: action.data,
        };
        default :
    return state;
}}
export default RegisterReducer;