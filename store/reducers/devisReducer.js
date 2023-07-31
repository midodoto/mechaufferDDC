const initialState = {
  step: 0,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'initial_state':
      return {
        step: 0,
        data: [],
      };
    case 'overwrite_devis':
      let step = action.payload.step;
      if (action.payload.multipleStep === true) step++;
      const dataCpy = state.data;
      if (dataCpy.length === 0 || dataCpy.length < step) {
        dataCpy.push(action.payload.data);
      } else dataCpy[step - 1] = action.payload.data;
      return { step: step - 1, data: dataCpy };
    default:
      return state;
  }
};

export default reducer;
