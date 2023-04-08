const initialState = {
    tokenParrain: null,
    tokenPartenaire: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tokenParrain':
            return {...state, tokenParrain: action.payload};
        case 'tokenPartenaire':
            return {...state, tokenPartenaire: action.payload};
        default:
            return state;
    }
};

export default reducer;
