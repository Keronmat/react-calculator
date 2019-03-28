import * as ActionTypes from "./ActionTypes";

const DisplayResult = (state = { displayResult: "" }, action) => {
  switch (action.type) {
    case ActionTypes.DISPLAY_RESULT:
      return {
        ...state,
        displayResult: action.payload
      };

    default:
      return state;
  }
};
export default DisplayResult;
