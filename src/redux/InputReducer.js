import * as ActionTypes from "./ActionTypes";

const DisplayInput = (state = { displayInput: "" }, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_INPUT:
      return {
        ...state,
        displayInput: state.displayInput + action.payload
      };

    default:
      return state;
  }
};
export default DisplayInput;
