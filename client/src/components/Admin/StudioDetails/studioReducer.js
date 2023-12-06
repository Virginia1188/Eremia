const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_GROUPS':
            return [...action.payload];

        case 'ADD_GROUP':
            return [...state, action.payload];

        case 'EDIT_GROUP':
            return state.map(c => c._id === action.payload._id ? {...c, text:action.payload.text} : group);
        default:
            return state;
    }
}

export default reducer;