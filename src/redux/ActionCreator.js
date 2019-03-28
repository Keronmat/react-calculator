import * as ActionTypes from "./ActionTypes";

export const displayInputValue = input => {
  return {
    type: ActionTypes.DISPLAY_INPUT,
    payload: input
  };
};
export const displayResultValue = result => {
  return {
    type: ActionTypes.DISPLAY_RESULT,
    payload: result
  };
};
