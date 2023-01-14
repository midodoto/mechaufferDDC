export const Login = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'login',
            payload: user,
        });
    };
};

export const Logout = () => {
    return (dispatch) => {
        dispatch({
            type: 'logout',
            payload: null,
        });
    };
};
