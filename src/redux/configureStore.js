import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import DisplayResult from "./ResultReducer";
import DisplayInput from "./InputReducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      displayResult: DisplayResult,
      displayInput: DisplayInput
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
