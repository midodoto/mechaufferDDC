export const OverwriteDevis = (devis) => {
    return (dispatch) => {
        dispatch({
            type: 'overwrite_devis',
            payload: devis,
        });
    };
};
