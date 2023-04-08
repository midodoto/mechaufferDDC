export const TokenParrain = (tokenParrain) => {
    return (dispatch) => {
        dispatch({
            type: 'tokenParrain',
            payload: tokenParrain,
        });
    };
};

export const TokenPartenaire = (tokenPartenaire) => {
    return (dispatch) => {
        dispatch({
            type: 'tokenPartenaire',
            payload: tokenPartenaire,
        });
    };
};
