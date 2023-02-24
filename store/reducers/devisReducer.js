const initialState = {
    step: 0,
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'initial_state':
            return initialState;
        case 'overwrite_devis':
            console.log(action.payload)
            console.log(state)
            let step = action.payload.step;
            if ( action.payload.multipleStep === true)
                step++;
            const dataCpy = state.data;
            if (dataCpy.length === 0 || dataCpy.length < step) {
                dataCpy.push(action.payload.data)
            } else
                dataCpy[step - 1] = action.payload.data;
            console.log("here", {step: step, data: dataCpy});
            
            return {step: step - 1, data: dataCpy};
        default:
            return state;
    }
};

export default reducer;
