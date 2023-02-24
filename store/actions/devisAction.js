export const OverwriteDevis = (devis) => {
    return (dispatch) => {
        dispatch({
            type: 'overwrite_devis',
            payload: devis,
        });
    };
};

export const InitialState = () => {
    return (dispatch) => {
        dispatch({
            type: 'initial_state',
            payload: null,
        });
    };
};
