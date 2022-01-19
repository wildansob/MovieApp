const initialState = {
BillingQuestion: {},
CallUs: ['0897654346'],
}

const HelpCenterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HELP_CENTER':
        console.log(action, 'ini from Help Center');
        return {
            ...state,
            CallUs : action.data,
        };
        default :
    return state;
}}
export default HelpCenterReducer;