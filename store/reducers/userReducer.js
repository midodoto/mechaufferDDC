const initialState = {
  token: null,
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return action.payload;
    case 'logout':
      return initialState;
    default:
      return state;
  }
};

export default reducer;
