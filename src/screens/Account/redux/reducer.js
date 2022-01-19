const initialState = {
ChangeAccountEmail: '',
ChangePassword: '1234',
}

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_CHANGE_ACCOUNT_EMAIL':
        console.log(action, 'ini from Account');
        return {
            ...state,
            ChangeAccountEmail : action.payload,
        };
        case 'SET_DATA_CHANGE_PASSWORD':
            console.log(action, 'ini from Account');
            return {
                ...state,
                ChangePassword : action.payload,
            };
        default :
    return state;
}}
export default AccountReducer;